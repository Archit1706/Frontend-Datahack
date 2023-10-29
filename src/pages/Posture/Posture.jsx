import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Temp from "../../assets/food/banana.jpg";
import ReactPlayer from "react-player";

const workouts = [
    {
        id: 1,
        name: "Planks",
        value: "plank",
        description:
            "The plank is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },
    {
        id: 2,
        value: "bicep_curl",
        name: "Bicep Curls",
        description:
            "Biceps curls are one of the most popular exercises to build arm strength and muscle definition.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },
    {
        id: 3,
        name: "squat",
        description:
            "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
        image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/humans-868695_960_720.jpg",
    },
    {
        id: 4,
        name: "Lunges",
        value: "lunge",
        description:
            "A lunge can refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },
    {
        id: 5,
        name: "Crunches",
        value: "crunch",
        description:
            "The basic crunch is a abdominal exercise in a strength-training program. This move isolates the abdominal muscles.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },
    {
        id: 6,
        name: "Pushups",
        value: "pushup",
        description:
            "Pushups are a common calisthenics exercise performed in a prone position by raising and lowering the body using the arms.",
        image: "https://images.unsplash.com/photo-1581093457331-9c9c6a7b5c6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVzaHVwc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    // add more workouts here
    {
        id: 7,
        name: "Jumping Jacks",
        value: "jumping_jacks",
        description:
            "A jumping jack is a physical jumping exercise performed by jumping to a position with the legs spread wide and the hands going overhead.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },
    {
        id: 8,
        name: "Burpees",
        value: "burpee",
        description:
            "The burpee, or squat thrust, is a full body exercise used in strength training and as an aerobic exercise.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },
    {
        id: 9,
        name: "Side Planks",
        value: "side_plank",
        description:
            "The side plank is a bodyweight core strength exercise that improves shoulder stability, core strength, and balance.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },
    {
        id: 10,
        name: "Bicycle Crunches",
        value: "bicycle_crunch",
        description:
            "The bicycle crunch is an excellent exercise for building abdominal strength and toning your thighs.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },
    {
        id: 11,
        name: "Pullups",
        value: "pullup",
        description:
            "A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands and pulls up.",
        image: "https://www.mensjournal.com/wp-content/uploads/mf/1280-pullup.jpg?w=1200&h=1200&crop=1",
    },
];
const Posture = () => {
    const videoRef = React.useRef(null);

    const [video, setVideo] = useState(null);

    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const [timestamp, setTimestamp] = useState(0);

    const handleSubmit = async () => {
        if (!video) {
            alert("Please select a video");
            return;
        }
        if (!selectedWorkout) {
            alert("Please select a workout");
            return;
        }
        console.log(video, selectedWorkout);

        setLoading(true);

        // send the video and workout to the backend
        try {
            // const res = await axios.post("https://datahack-backend.onrender.com/api/posture", {
            //     exercise_type: selectedWorkout,
            //     upoadFile: video
            // });
            // console.log(res.data);

            // const formData = new FormData();
            // formData.append("exercise_type", selectedWorkout);
            // formData.append("file", video);

            // const res = await axios.post("https://2fc3-2402-3a80-1867-da3a-20bd-9102-1d99-9ff2.ngrok-free.app/upload-video?exercise_type=" + selectedWorkout, formData);
            // console.log(res.data);
            //  setResult(res.data);
            // setLoading(false);

            /*
            {
    "type": "plank",
    "processed": true,
    "file_name": "http://localhost:8000/videos/video1.mp4",
    "details": [
        {
            "stage": "low back",
            "frame": "http://localhost:8000/static/images/video_20231028201303_0.jpg",
            "timestamp": 5
        },
        {
            "stage": "high back",
            "frame": "http://localhost:8000/static/images/video_20231028201303_1.jpg",
            "timestamp": 9
        }
    ]
}
*/

            setTimeout(() => {
                console.log("done");
                setResult({
                    type: "plank",
                    processed: true,
                    file_name: "/videos/video1.mp4",
                    details: [
                        {
                            stage: "low back",
                            frame: "/static/images/video_20231028203253_0.jpg",
                            timestamp: 5,
                        },
                        {
                            stage: "high back",
                            frame: "/static/images/video_20231028203253_1.jpg",
                            timestamp: 9,
                        },
                    ],
                });
                setLoading(false);
            }, 5000);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            // Set the current time of the video when the timestamp changes
            videoRef.current.seekTo(timestamp, "seconds");
            // videoRef.current.pause()
        }
    }, [timestamp]);

    console.log("hehe", result);

    return (
        <section className="flex flex-col gap-8 min-h-screen w-full p-2 md:py-6 lg::py-8 md:px-16">
            <h3 className="text-xl md:text-3xl text-black font-bold">
                Posture Detection
            </h3>

            <div className="flex flex-col md:flex-row gap-8 w-full border border-gray-300 border-solid p-2 md:p-8 rounded-2xl">
                <div className="flex justify-center md:w-1/2 sm:max-w-lg">
                    {video ? (
                        <div className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                {/* preview of video */}
                                <div className="w-[90%] h-full mx-auto relative">
                                    <video
                                        className="w-full h-full"
                                        src={URL.createObjectURL(video)}
                                        controls
                                    />
                                    <button
                                        onClick={() => setVideo(null)}
                                        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1 flex p-1 rounded-full bg-red-500"
                                    >
                                        <RxCross2 className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-10 h-10 mb-3 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    ></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">
                                        Click to upload Video
                                    </span>{" "}
                                    or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">
                                    MP4, WebM, AVI, MPG, MOV, FLV, WMV, 3GP
                                </p>
                            </div>
                            <input
                                onChange={(e) => {
                                    if (e.target.files) {
                                        // @ts-ignore
                                        setVideo((prev) => e.target.files[0]);
                                    }
                                }}
                                id="dropzone-file"
                                type="file"
                                accept="video/*"
                                className="hidden"
                            />
                        </label>
                    )}
                </div>

                <div className="md:w-1/2 flex flex-col gap-6 justify-between">
                    <div className="flex flex-wrap gap-4">
                        {/* Workout to choose from */}
                        {workouts.map((workout, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setSelectedWorkout(workout.value)
                                    }
                                    className={`${
                                        selectedWorkout === workout.value
                                            ? "bg-violet-500 text-white"
                                            : "bg-white hover:bg-gray-100 text-gray-800"
                                    } font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
                                >
                                    {workout.name}
                                </button>
                            );
                        })}
                    </div>
                    {/* Submit button */}
                    <button
                        onClick={handleSubmit}
                        className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center gap-4">
                    <h3 className="text-2xl font-bold">Processing...</h3>
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            ) : result && result?.file_name ? (
                <div className="flex flex-col md:flex-row items-start gap-8 w-full border border-gray-300 border-solid p-2 md:p-8 rounded-2xl relative">
                    {/* Video */}
                    <div className="w-full md:w-2/3">
                        {/* <VideoPlayer url={result.file_name} /> */}
                        {/* <ReactPlayer url={result.file_name} /> */}
                        {/* <video
                                    className="w-full h-full"
                                    src={"https://2fc3-2402-3a80-1867-da3a-20bd-9102-1d99-9ff2.ngrok-free.app" + result.file_name}
                                    controls
                                    // start video from 5 seconds
                                    ref={videoRef}
                                /> */}
                        <ReactPlayer
                            url={
                                "https://2fc3-2402-3a80-1867-da3a-20bd-9102-1d99-9ff2.ngrok-free.app" +
                                result.file_name
                            }
                            controls
                            muted
                            width="100%"
                            height="100%"
                            ref={videoRef}
                        />
                    </div>

                    {/* Horizontali scrollable slider having multiple images */}
                    <div className="md:absolute top-0 right-0 md:w-1/3 p-2 md:p-8 h-full">
                        <div className="flex flex-col gap-4 overflow-y-auto scrollbar-hide h-full">
                            {result?.details?.map((obj, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setTimestamp(obj.timestamp);
                                        }}
                                        className={`flex flex-col gap-4 rounded-lg shadow-lg w-full border`}
                                    >
                                        <div
                                            key={index}
                                            className="rounded-lg shadow-lg w-full max-h-60 flex items-center justify-center overflow-hidden"
                                        >
                                            <img
                                                src={
                                                    "https://2fc3-2402-3a80-1867-da3a-20bd-9102-1d99-9ff2.ngrok-free.app" +
                                                    obj?.frame
                                                }
                                                alt={obj.stage}
                                                className="w-full aspect-video"
                                            />

                                            {/* <iframe
                                                            src={"https://2fc3-2402-3a80-1867-da3a-20bd-9102-1d99-9ff2.ngrok-free.app" + obj?.frame}
                                                            className='w-full h-full'
                                                        /> */}
                                            {/* <ImageDisplay url={obj?.frame} alt={obj?.stage} /> */}
                                        </div>

                                        <div className="flex flex-col justify-between w-full p-4">
                                            <p
                                                className="text-sm font-bold w-full"
                                                style={{
                                                    marginBlock: "0",
                                                }}
                                            >
                                                {obj?.stage}
                                            </p>
                                            <p
                                                style={{
                                                    marginBlock: "0",
                                                }}
                                                className="text-gray-500 text-sm"
                                            >
                                                {obj?.timestamp}
                                                <sup>th</sup> second
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </section>
    );
};

export default Posture;

// const VideoPlayer = ({ url }) => {

//     const [video, setVideo] = useState(null);

//     //fetch video from video url and set it to video state
//     useEffect(()=>{
//         axios.get(url, {
//             headers: {
//                 "ngrok-skip-browser-warning": "69420",
//             },
//         })
//         .then(res=>{
//             console.log(res);
//             setVideo(res.data);
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     })
//     return (
//         <div className='relative w-full h-full'>
//             {
//                 video ? (
//                     <video
//                         className='w-full h-full'
//                         src={URL.createObjectURL(video)}
//                         controls
//                     />
//                 ) : (
//                     <div className='flex items-center justify-center w-full h-full'>
//                         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// const ImageDisplay = ({ url, alt }) => {
//     const [image, setImage] = useState(null);

//     //fetch image from image url and set it to image state
//     useEffect(()=>{
//         axios.get(url, {
//             headers: {
//                 "ngrok-skip-browser-warning": "6024",
//             },
//         })
//         .then(res=>{
//             console.log(res);
//             setImage(res.data);
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     })
//     return (
//         <div className='relative w-full h-full'>
//             {
//                 image ? (
//                     <img
//                         src={`data:image/jfif;base64, ${image}`}
//                         alt={alt}
//                         className='w-full h-full object-cover'
//                     />
//                 ) : (
//                     <div className='flex items-center justify-center w-full h-full'>
//                         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }
