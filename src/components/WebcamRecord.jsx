import React from "react";
import { useRecordWebcam } from "react-record-webcam";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const OPTIONS = {
    filename: "test-filename",
    fileType: "mp4",
    width: 1920,
    height: 1080,
};

export function WebcamRecord({
    toggleModal,
    setVideo
}) {
    const {
        activeRecordings,
        cancelRecording,
        closeCamera,
        createRecording,
        devicesByType,
        devicesById,
        muteRecording,
        openCamera,
        pauseRecording,
        resumeRecording,
        startRecording,
        stopRecording,
    } = useRecordWebcam(OPTIONS);

    const [videoDeviceId, setVideoDeviceId] = React.useState("");
    const [audioDeviceId, setAudioDeviceId] = React.useState("");

    const handleSelect = async (event) => {
        const { deviceid: deviceId } =
            event.target.options[event.target.selectedIndex].dataset;
        if (devicesById[deviceId].type === "videoinput") {
            setVideoDeviceId(deviceId);
        }
        if (devicesById[deviceId].type === "audioinput") {
            setAudioDeviceId(deviceId);
        }
    };

    const start = async () => {
        const recording = await createRecording(videoDeviceId, audioDeviceId);
        if (recording) {
            await openCamera(recording.id);
            startRecording(recording.id);
        }
    };

    const getRecordingData = async (recordingId) => {
        const recording = activeRecordings.find((rec) => rec.id === recordingId);
        if (recording) {
            const videoBlob = await recording.getVideoBlob();
            const audioBlob = await recording.getAudioBlob();
            const videoUrl = URL.createObjectURL(videoBlob);
            const audioUrl = URL.createObjectURL(audioBlob);
            return { videoBlob, audioBlob, videoUrl, audioUrl };
        }
    };


    const stopRecordingAndUpload = async (recordingId) => {
        console.log("stopRecordingAndUpload");
        stopRecording(recordingId);
        const recording = activeRecordings.find((rec) => rec.id === recordingId);
        console.log(recording);
        if (recording) {
            const url = recording.objectURL;
            await uploadRecording(url);
        }
    };

    const uploadRecording = async (url) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();

            setVideo(blob);
            toggleModal();

            // const formData = new FormData();
            // formData.append("file", blob);

            // const res = await axios.post("https://1150-2402-3a80-4190-beee-d9-e9b3-e9fc-7e5e.ngrok-free.app/upload-video?exercise_type=plank", formData);
            // console.log(res.data);
            // if (response.ok) {
            //     console.log('Video uploaded successfully');
            // } else {
            //     console.error('Failed to upload video');
            // }
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    const handleClose = () => {
        
        closeCamera();

        toggleModal();
    };

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000] bg-black/25 overflow-y-auto scrollbar-hide rounded-lg">
            <div className="absolute inset-4 md:inset-16 md:right-16 bg-violet-100 overflow-y-auto scrollbar-hide rounded-lg">
                <div className="w-full h-full flex flex-col pt-8">

                    {/* Close Button */}
                    <RxCross2 className="absolute top-4 right-4 cursor-pointer" onClick={handleClose} />


                    <div className="w-full flex flex-col md:flex-row gap-4 items-centerp p-4">
                        <div className="md:w-1/2 flex flex-col md:flex-row gap-2 md:items-center">
                            <h4 className="whitespace-nowrap">Select video input</h4>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleSelect}>
                                {devicesByType?.video?.map((device) => (
                                    <option key={device.deviceId} data-deviceid={device.deviceId}>
                                        {device.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="md:w-1/2 flex flex-col md:flex-row gap-2 md:items-center">
                            <h4 className="whitespace-nowrap">Select audio input</h4>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleSelect}>
                                {devicesByType?.audio?.map((device) => (
                                    <option key={device.deviceId} data-deviceid={device.deviceId}>
                                        {device.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="w-full p-4">
                        <button onClick={start} className="px-3 py-1 bg-[#c759ff] rounded-lg text-white" >Open camera</button>
                    </div>
                    <div className="w-full p-4">
                        {activeRecordings?.map((recording) => (
                            <div className="device" key={recording.id}>
                                <p className="text-lg font-semibold"
                                    style={{
                                        marginBlock: "0",
                                    }}
                                >Live</p>
                                <div className="device-list">
                                    <small>Status: {recording.status}</small>
                                    <small>Video: {recording.videoLabel}</small>
                                    <small>Audio: {recording.audioLabel}</small>
                                </div>
                                <video className="my-2 w-full" ref={recording.webcamRef} loop autoPlay playsInline />
                                <div className="flex gap-2">
                                    <button
                                        className={`px-3 py-1 rounded-lg text-white
                                            ${recording.status === "RECORDING" || recording.status === "PAUSED" ? "bg-gray-400" : "bg-[#c759ff] hover:bg-violet-700"}
                                        `}
                                        disabled={
                                            recording.status === "RECORDING" ||
                                            recording.status === "PAUSED"
                                        }
                                        onClick={() => {
                                            console.log("startRecording");
                                            startRecording(recording.id)
                                        }}
                                    >
                                        Record
                                    </button>
                                    <button
                                        className={`px-3 py-1 rounded-lg text-white
                                            ${recording.status !== "RECORDING" && recording.status !== "PAUSED" ? "bg-gray-400" : "bg-[#c759ff] hover:bg-violet-700"}
                                        `}
                                        disabled={
                                            recording.status !== "RECORDING" &&
                                            recording.status !== "PAUSED"
                                        }
                                        onClick={() =>
                                            recording.status === "PAUSED"
                                                ? resumeRecording(recording.id)
                                                : pauseRecording(recording.id)
                                        }
                                    >
                                        {recording.status === "PAUSED" ? "Resume" : "Pause"}
                                    </button>
                                    {/* <button
                                        className={recording.isMuted ? "px-3 py-1 bg-[#c759ff] hover:bg-violet-700 rounded-lg text-white" : "px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white"}
                                        onClick={() => muteRecording(recording.id)}
                                    >
                                        Mute
                                    </button> */}
                                    <button
                                        className={`px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white
                                            ${recording.status !== "RECORDING" ? "bg-gray-400" : "bg-[#c759ff] hover:bg-violet-700"}
                                        `}
                                        disabled={recording.status !== "RECORDING"}
                                        onClick={() => stopRecording(recording.id)}
                                    >
                                        Stop
                                    </button>
                                    <button
                                        className={`px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white`}
                                        onClick={() => cancelRecording(recording.id)}>
                                        Cancel
                                    </button>
                                </div>
                                <div className="
                                    flex
                                    flex-col
                                    gap-2
                                    p-4
                                    border-2
                                    border-gray-300
                                    rounded-lg
                                    bg-gray-50
                                    mt-4
                                ">
                                    <p
                                        style={{
                                            marginBlockStart: "0",
                                        }}
                                        className="text-lg font-semibold"
                                    >Preview</p>
                                    <video
                                        className="w-full"
                                        ref={recording.previewRef} autoPlay loop playsInline
                                    />
                                    <div className="
                                        flex
                                        flex-row
                                        flex-wrap
                                        gap-2
                                        justify-end
                                    ">
                                        <button onClick={() => download(recording.id, {
                                            fileName: "my-recording.webm",
                                            fileType: 'mp4',

                                        })}
                                            className="px-3 py-1 bg-[#c759ff] hover:bg-violet-700 rounded-lg text-white"
                                        >Download</button>
                                        <button onClick={() => clearPreview(recording.id)}
                                            className="px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white"
                                        >
                                            Clear preview
                                        </button>

                                        <button
                                            className="px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white"
                                            // disabled={recording.status !== "RECORDING"}
                                            onClick={() => stopRecordingAndUpload(recording.id)}
                                        >
                                            Stop and Upload
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
