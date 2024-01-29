import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectPage = () => {
    const { state } = useLocation();
    console.log(state)
    return (
        <>
            <div className="w-full md:p-5 overflow-y-auto scroll-smooth h-full">
                <section className="m-1" >
                    <h1 className="text-center text-3xl font-bold">{state.name}</h1><br/>
                    <p className="font-semibold">{state.desc}</p>
                </section>
            </div>
        </>
    )
}

export default ProjectPage;