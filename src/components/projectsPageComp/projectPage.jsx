import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectPage = () => {
    const { state } = useLocation();
    console.log(state)
    return (
        <>
            <div className="w-full md:p-5 overflow-y-auto scroll-smooth h-full">
                <div className="flex flex-col m-1 bg-black text-white px-6 py-2 rounded-xl">
                    <h1 className="text-center text-3xl font-bold">{state.name}</h1><br />
                    <h3 className="text-center text-xl font-bold">{state.skills.join(', ')}</h3><br />
                    <div className="flex flex-col-reverse gap-2 md:flex-col">
                        <p className="font-semibold text-justify">{state.desc}</p>
                        {(state.projectImg.length != 0) ?
                            <div className="flex gap-3 overflow-x-auto py-3 project">
                                {state.projectImg.map((item, index) => {
                                    return (
                                        <img className="md:w-2/5 rounded" src={item} alt={`Img ${index}`} />
                                    )
                                })}
                            </div> : <p></p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage;