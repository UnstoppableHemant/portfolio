
import { useState } from "react";
import { Routes, Route} from 'react-router-dom';
import Header from "./components/header";
import SideNav from "./components/sideNav";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };
    return (
        <>
            <Header toggleSideNav={toggleSideNav} />
            <div className="flex w-full">
                <SideNav isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </div>
        </>
    )
}

export default App;