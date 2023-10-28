import axios from 'axios';
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const workouts = [
    {
        id: 1,
        name: 'Pushups',
        description: 'Pushups are a common calisthenics exercise performed in a prone position by raising and lowering the body using the arms.',
        image: 'https://images.unsplash.com/photo-1581093457331-9c9c6a7b5c6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVzaHVwc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        id: 2,
        name: 'Squats',
        description: 'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.',
        image: 'https://cdn.pixabay.com/photo/2015/07/30/17/24/humans-868695_960_720.jpg'
    },
    {
        id: 3,
        name: 'Pullups',
        description: 'A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands and pulls up.',
        image: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-pullup.jpg?w=1200&h=1200&crop=1'
    },
    {
        id: 4,
        name: 'Planks',
        description: 'The plank is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.',
        image: 'https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg'
    },
    {
        id: 5,
        name: 'Crunches',
        description: 'The basic crunch is a abdominal exercise in a strength-training program. This move isolates the abdominal muscles.',
        image: 'https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg'
    },
    {
        id: 6,
        name: 'Lunges',
        description: 'A lunge can refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind.',
        image: 'https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg'
    },
    // add more workouts here
    {
        id: 7,
        name: 'Jumping Jacks',
        description: 'A jumping jack is a physical jumping exercise performed by jumping to a position with the legs spread wide and the hands going overhead.',
        image: 'https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg'
    },
    {
        id: 8,
        name: 'Burpees',
        description: 'The burpee, or squat thrust, is a full body exercise used in strength training and as an aerobic exercise.',
        image: 'https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg'
    },
    {
        id: 9,
        name: 'Side Planks',
        description: 'The side plank is a bodyweight core strength exercise that improves shoulder stability, core strength, and balance.',
        image: 'https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg'
    },
    {
        id: 10,
        name: 'Bicycle Crunches',
        description: 'The bicycle crunch is an excellent exercise for building abdominal strength and toning your thighs.',
        image: 'https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg'
    }
]
const Posture = () => {


    const [video, setVideo] = useState(null);

    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const [loading, setLoading] = useState(false);

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
            // const res = await axios.post("http://localhost:5000/api/posture", {
            //     exercise_type: selectedWorkout,
            //     upoadFile: video
            // });
            // console.log(res.data);



            // const formData = new FormData();
            // formData.append("exercise_type", selectedWorkout);
            // formData.append("upoadFile", video);

            // const res = await axios.post("http://localhost:5000/api/posture", formData);
            // console.log(res.data);

            setTimeout(() => {
                console.log("done");
                setLoading(false);
            }, 10000);

        }catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    return (
        <section
            className='flex flex-col gap-8 min-h-screen w-full p-2 md:py-6 lg::py-8 md:px-16'
        >
            <h3 className='text-xl md:text-3xl text-black font-bold'>Posture Detection</h3>

            <div className='flex gap-8 w-full border border-gray-300 border-solid p-2 md:p-8 rounded-2xl'>

                <div className="flex justify-center w-1/2 mx-auto sm:max-w-lg">

                    {
                        video ? (
                            <div
                                className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    {/* preview of video */}
                                    <div className='w-[90%] h-full mx-auto relative'>
                                        <video
                                            className="w-full h-full"
                                            src={URL.createObjectURL(video)}
                                            controls
                                        />
                                        <button
                                            onClick={() => setVideo(null)}
                                            className='absolute top-0 right-0 translate-x-1/2 -translate-y-1 flex p-1 rounded-full bg-red-500'>
                                            <RxCross2 className='w-4 h-4 text-white' />
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
                                        <span className="font-semibold">Click to upload Video</span>{" "}
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
                        )

                    }


                </div>

                <div className='w-1/2 flex flex-col gap-6 justify-between'>
                    <div className='flex flex-wrap gap-4'>
                        {/* Workout to choose from */}
                        {
                            workouts.map((workout, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedWorkout(workout.name)}
                                        className={`${workout.name === selectedWorkout ? "bg-orange-500 text-white" : "bg-white hover:bg-gray-100 text-gray-800"} font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
                                    >
                                        {workout.name}
                                    </button>
                                )
                            })
                        }
                    </div>
                    {/* Submit button */}
                    <button
                        onClick={handleSubmit}
                        className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg'>
                        Submit
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Posture