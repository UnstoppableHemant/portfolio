import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
    return (
        <>
            <div className="flex gap-5 items-center justify-center">
                <FaGraduationCap className="text-3xl md:text-5xl font-bold" />
                <h1 className="text-3xl md:text-5xl font-bold">Education</h1>
            </div>
            <div className="md:p-5 px-4">
                <div className="mx-auto gap-3 flex flex-col md:w-2/3">
                    <div className="bg-black text-white px-6 py-4 rounded-lg flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
                        <p>Chandigarh University (Jan 2022 - Jan 2025)</p>
                        <button className="px-3 py-1 bg-[#5781ff] rounded-lg w-32">Pursuing</button>
                    </div>
                    <div className="bg-black text-white px-6 py-4 rounded-lg flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold">XII<sup>th</sup> Grade (CBSE Board)</h3>
                        <p>GSBV No-1 Yamuna Vihar Delhi-53 (2020 - 2021)</p>
                        <button className="px-3 py-1 bg-[#5781ff] rounded-lg w-32">Completed</button>
                    </div>
                    <div className="bg-black text-white px-6 py-4 rounded-lg flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold">X<sup>th</sup> Grade (CBSE Board)</h3>
                        <p>GSBV No-1 Yamuna Vihar Delhi-53 (2018 - 2019)</p>
                        <button className="px-3 py-1 bg-[#5781ff] rounded-lg w-32">Completed</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;