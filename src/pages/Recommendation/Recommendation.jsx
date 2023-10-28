import React, { useEffect, useState } from "react";
import Select from "react-select";
import TypewriterText from "../../components/TypewriterText";

const days = [1, 2, 3, 4, 5, 6, 7];

const breakfastData = {
    name: "Oats",
    calories: 200,
    protein: 20,
    carbs: 20,
    fat: 20,
    img: "https://www.healthline.com/hlcmsresource/images/AN_images/steel-cut-vs-rolled-oats-1296x728-feature.jpg",
    link: "https://www.healthline.com/nutrition/9-benefits-oats-oatmeal",
};

const lunchData = {
    name: "Chicken",
    calories: 200,
    protein: 20,
    carbs: 20,
    fat: 20,
    img: "https://www.healthline.com/hlcmsresource/images/AN_images/steel-cut-vs-rolled-oats-1296x728-feature.jpg",
    link: "https://www.healthline.com/nutrition/9-benefits-oats-oatmeal",
};

const dinnerData = {
    name: "Rice",
    calories: 200,
    protein: 20,
    carbs: 20,
    fat: 20,
    img: "https://www.healthline.com/hlcmsresource/images/AN_images/steel-cut-vs-rolled-oats-1296x728-feature.jpg",
    link: "https://www.healthline.com/nutrition/9-benefits-oats-oatmeal",
};

const MealComponent = ({ breakfast, lunch, dinner, day }) => {
    return (
        <>
            {/* Container for demo purpose */}
            <div className="container my-24 mx-auto md:px-6">
                {/* Section: Design Block */}
                <section className="mb-32 text-center">
                    <h3 className="mb-12 text-center text-2xl font-semibold">
                        Your Recommendations for Today (Day {day})
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-3">
                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="flex">
                                    <div
                                        className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                        data-te-ripple-init=""
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/people/111.jpg"
                                            className="w-full"
                                        />
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-4 text-lg font-bold">
                                        {breakfast.name}
                                    </h5>
                                    {/* <p className="mb-6">
                                        Ut pretium ultricies dignissim. Sed sit
                                        amet mi eget urna placerat vulputate. Ut
                                        vulputate est non quam dignissim
                                        elementum. Donec a ullamcorper diam.
                                    </p> */}
                                    <p
                                        // href={breakfast.link}
                                        className="inline-block rounded-full  px-4 py-1 text-xs font-normal uppercase leading-normal text-white bg-yellow-400 m-0"
                                    >
                                        Breakfast
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="flex">
                                    <div
                                        className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                        data-te-ripple-init=""
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/people/111.jpg"
                                            className="w-full"
                                        />
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-4 text-lg font-bold">
                                        {lunch.name}
                                    </h5>
                                    {/* <p className="mb-6">
                                        Ut pretium ultricies dignissim. Sed sit
                                        amet mi eget urna placerat vulputate. Ut
                                        vulputate est non quam dignissim
                                        elementum. Donec a ullamcorper diam.
                                    </p> */}
                                    <p className="inline-block rounded-full  px-4 py-1 text-xs font-normal uppercase leading-normal text-white bg-red-500 m-0">
                                        Lunch
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <div className="flex">
                                    <div
                                        className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                        data-te-ripple-init=""
                                        data-te-ripple-color="light"
                                    >
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/standard/people/111.jpg"
                                            className="w-full"
                                        />
                                        <a href="#!">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-4 text-lg font-bold">
                                        {dinner.name}
                                    </h5>
                                    {/* <p className="mb-6">
                                        Ut pretium ultricies dignissim. Sed sit
                                        amet mi eget urna placerat vulputate. Ut
                                        vulputate est non quam dignissim
                                        elementum. Donec a ullamcorper diam.
                                    </p> */}
                                    <p className="inline-block rounded-full  px-4 py-1 text-xs font-normal uppercase leading-normal text-white bg-green-500 m-0">
                                        Dinner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            {/* Container for demo purpose */}
        </>
    );
};

const Recommendation = () => {
    const [day, setDay] = useState(1);
    const [response, setResponse] = useState({});
    const res =
        "1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n1. Breakfast: Oats\n2. Lunch: Chicken\n3. Dinner: Rice\n".split(
            /\r?\n/
        );
    const [openaiResponse, setOpenaiResponse] = useState(res);
    console.log(openaiResponse);

    useEffect(() => {
        // const data = fetch("https://api.npoint.io/1a4d2fbbd8b4e4b7d8a5", {
        //     method: "GET",
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         setResponse({
        //             1: { breakfast: breakfast, lunch: lunch, dinner: dinner },
        //             2: { breakfast: lunch, lunch: lunch, dinner: dinner },
        //             3: { breakfast: breakfast, lunch: lunch, dinner: dinner },
        //             4: { breakfast: breakfast, lunch: lunch, dinner: dinner },
        //             5: { breakfast: breakfast, lunch: lunch, dinner: dinner },
        //             6: { breakfast: breakfast, lunch: lunch, dinner: dinner },
        //             7: { breakfast: breakfast, lunch: lunch, dinner: dinner },
        //         });
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        setResponse({
            1: [breakfastData, lunchData, dinnerData],
            2: [lunchData, lunchData, dinnerData],
            3: [breakfastData, lunchData, dinnerData],
            4: [breakfastData, lunchData, dinnerData],
            5: [breakfastData, lunchData, dinnerData],
            6: [breakfastData, lunchData, dinnerData],
            7: [breakfastData, lunchData, dinnerData],
        });

        console.log(response);
    }, []);

    const options = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
        { value: 6, label: "6" },
        { value: 7, label: "7" },
    ];

    return (
        <div className="w-full rounded-md p-2">
            {/* <div className="flex justify-center items-center bg-inherit tabs tabs-boxed">
                <a
                    className={
                        day === 1
                            ? "tab tab-active bg-orange-600 text-white"
                            : "text-gray-500 bg-orange-200 tab"
                    }
                    onClick={() => {
                        console.log(day);
                        setDay(1);
                    }}
                >
                    Day 1
                </a>
                <a
                    className={
                        day === 2
                            ? "tab tab-active bg-orange-600 text-white"
                            : "text-gray-500 bg-orange-200 tab"
                    }
                    onClick={() => {
                        console.log(day);
                        setDay(2);
                    }}
                >
                    Day 2
                </a>
                <a
                    className={
                        day === 3
                            ? "tab tab-active bg-orange-600 text-white"
                            : "text-gray-500 bg-orange-200 tab"
                    }
                    onClick={() => {
                        setDay(3);
                    }}
                >
                    Day 3
                </a>
                <a
                    className={
                        day === 4
                            ? "tab tab-active bg-orange-600 text-white"
                            : "text-gray-500 bg-orange-200 tab"
                    }
                    onClick={() => {
                        setDay(4);
                    }}
                >
                    Day 4
                </a>
                <a
                    className={
                        day === 5
                            ? "tab tab-active bg-orange-600 text-white"
                            : "text-gray-500 bg-orange-200 tab"
                    }
                    onClick={() => {
                        setDay(5);
                    }}
                >
                    Day 5
                </a>
                <a
                    className={
                        day === 6
                            ? "tab tab-active bg-orange-600 text-white"
                            : "text-gray-500 bg-orange-200 tab"
                    }
                    onClick={() => {
                        setDay(6);
                    }}
                >
                    Day 6
                </a>
                <a
                    className={
                        day === 7
                            ? "tab tab-active bg-orange-600 text-white"
                            : "text-gray-500 bg-orange-200 tab"
                    }
                    onClick={() => {
                        setDay(7);
                    }}
                >
                    Day 7
                </a>
            </div> */}
            <div className="flex justify-center items-center -mb-14 md:mt-12 gap-4 text-md">
                Select Day
                <Select
                    className="w-36"
                    defaultValue={day}
                    onChange={(day) => setDay(day.value)}
                    options={options}
                />
            </div>
            <div className="flex w-full flex-wrap rounded-md p-2">
                <div className="w-full md:w-2/3">
                    {/*Tabs content*/}
                    <div className="">
                        <div
                            key={day}
                            className="opacity-100 transition-opacity duration-150 ease-linear"
                            id={day}
                        >
                            <MealComponent
                                breakfast={breakfastData}
                                lunch={lunchData}
                                dinner={dinnerData}
                                day={day}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 bg-gray-100 rounded-md p-4">
                    <h3 className="mb-12 text-center text-2xl font-semibold">
                        Complete Day Plan
                    </h3>
                    <ul>
                        {openaiResponse &&
                            openaiResponse.map((item, index) => {
                                return (
                                    <li key={index} className="">
                                        <TypewriterText text={item} />
                                    </li>
                                );
                            })}
                    </ul>
                    {/* <p className="text-md">
                    {openaiResponse && <TypewriterText text={openaiResponse} />}
                </p> */}
                </div>
            </div>
        </div>
    );
};

export default Recommendation;
