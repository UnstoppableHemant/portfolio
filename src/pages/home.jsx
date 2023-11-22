import Header from "../components/header";
import SharePoint_Logo from "../assets/img/ms-sharepoint-online.png";
import PowerApps_Logo from "../assets/img/ms-powerapps.png";
import PowerAutoamte_Logo from "../assets/img/ms-powerautomate.png";
import SideNav from "../components/sideNav";
import { useState } from "react";

const Home = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };
    return (
        <>
            <Header toggleSideNav={toggleSideNav} />
            <div className="flex w-full">
                <SideNav isSideNavOpen={isSideNavOpen} />
                <div className="w-full flex flex-col-reverse md:flex-row sm:px-2 md:p-10  h-full">
                    <div className="py-10 px-5 md:m-5 lg:m-10 lg:w-1/2 md:w-2/3 ">
                        <h2 className="text-4xl">
                            Hi, <br />
                            I'm Hemant, <br />
                            SharePoint Online,
                            Power Apps,
                            Power Automate Developer.
                        </h2>
                        <br />
                        <h3 className="text-xl">
                            I live in Delhi, India.
                            I have developed a wide range of Enterprise Applications
                            in SharePoint Online and PowerApps.
                            I believe in delivering quality work on time to meet client expectations & requirements.
                        </h3>
                    </div>
                    <div className="pt-10 md:py-10 px-5 md:m-5 lg:m-10 lg:w-1/2 md:w-1/3 ">
                        <div className="mt-10 flex md:flex-col lg:flex-row gap-4 justify-center items-center">
                            <img className="h-20 md:w-32 md:h-32" src={SharePoint_Logo} alt="SharePoint Online" />
                            <img className="h-20 md:w-32 md:h-32" src={PowerApps_Logo} alt="PowerApps" />
                            <img className="h-20 md:w-32 md:h-32" src={PowerAutoamte_Logo} alt="Power Automate" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;