import { FaLaptopCode } from "react-icons/fa6";
import { fetchCollections } from "../firebase/firebaseCalls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const res = await fetchCollections("projects");
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
                        {/* <h1 className="text-5xl text-center mt-10">Coming Soon......</h1> */}
                        {projects.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className={`flex gap-8 flex-col-reverse project-box ${(index % 2) === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                        <div className="md:w-3/5 font-semibold">
                                            <h2 className="text-xl">{(index + 1) + ") " + item.name}</h2><br />
                                            <p className="text-justify">{item.skills.join(', ')}</p><br />
                                            <p className="text-justify">{item.desc.length > 490 ? item.desc.slice(0, 490) + " ...more" : item.desc}</p><br />
                                            {/* {item.desc.length > 490 ? item.desc.slice(0, 490) + " ...more" : item.desc} */}
                                            <button className="view-projects" onClick={() => navigate(`/projects/${item.id}`, { state: item })}>View Details</button>
                                        </div>
                                        <div className="md:w-2/5 flex justify-center">{item.mainImgURI != "" ? <img className="my-auto rounded" src={item.mainImgURI} /> : <p>Images Restricted</p> }</div>
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