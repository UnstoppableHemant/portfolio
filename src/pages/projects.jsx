import { FaLaptopCode } from "react-icons/fa6";
import { fetchItems } from "../firebase/firebaseCalls";
import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const fetchData = async () => {
        const res = await fetchItems("projects")
        setProjects([...res])
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(projects);
    return (
        <>
            <div className="w-full md:p-5 overflow-y-auto scroll-smooth h-full">
                <section className="m-1" >
                    <div className="flex gap-5 items-center justify-center">
                        <FaLaptopCode className="text-2xl md:text-4xl font-bold" />
                        <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
                    </div>
                    <div className="py-5">
                        {projects.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className={`flex gap-2 flex-col-reverse project-box ${(index % 2) === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                        <div className="md:w-2/3 font-semibold">
                                            <h2 className="text-xl">{(index + 1) + ") " + item.name}</h2><br />
                                            <p className="text-justify">{item.desc.length > 550 ? item.desc.slice(0, 550) + " ...more" : item.desc}</p><br />
                                            <button className="view-projects">View Details</button>
                                        </div>
                                        <div className="md:w-1/3"><img className="mx-auto" src="" /></div>
                                    </div>
                                    <br />
                                </>
                            )
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Projects;