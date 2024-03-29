
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import SideNav from "./components/sideNav";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Services from "./pages/services";
import ProjectPage from "./components/projectsPageComp/projectPage";

const App = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };
    const closeSideNav = () => {
        setIsSideNavOpen(false);
    };
    console.log(isSideNavOpen);
    return (
        <div className="flex flex-col w-full h-screen">
            <Header toggleSideNav={toggleSideNav} closeSideNav={closeSideNav} />
            <div className="block md:flex w-full height-full px-1">
                <SideNav isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
                {isSideNavOpen ? '' :
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:projectId" element={<ProjectPage />} />
                        <Route path="/services" element={<Services />} />
                    </Routes>
                }
            </div>
        </div>
    )
}

export default App;