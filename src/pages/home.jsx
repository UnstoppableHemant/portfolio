import SharePoint_Logo from "../assets/img/Skills_Tools/ms-sharepoint-online.png";
import PowerApps_Logo from "../assets/img/Skills_Tools/ms-powerapps.png";
import PowerAutoamte_Logo from "../assets/img/Skills_Tools/ms-powerautomate.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full flex flex-col-reverse md:flex-row sm:px-2 sm:p-10">
                <div className="mt-5 px-5 lg:w-1/2 md:w-2/3 ">
                    <h2 className="text-5xl leading-tight font-bold">
                        Welcome to My Portfolio.
                        I am Hemant
                    </h2>
                    <br />
                    <h3 className="text-3xl leading-tight">
                        SharePoint Online |
                        Power Apps |
                        Power Automate Developer.
                    </h3>
                    <br/>
                    <div>
                        <button className="px-4 py-2 act-btn" onClick={() => {navigate("/about")}}>About Me</button>
                    </div>
                </div>
                <div className="mt-5 md:py-10 px-5 lg:w-1/2 md:w-1/3 ">
                    <div className="flex md:flex-col lg:flex-row gap-4 justify-center items-center">
                        <img className="h-20 md:w-32 md:h-32" src={SharePoint_Logo} alt="SharePoint Online" />
                        <img className="h-20 md:w-32 md:h-32" src={PowerApps_Logo} alt="PowerApps" />
                        <img className="h-20 md:w-32 md:h-32" src={PowerAutoamte_Logo} alt="Power Automate" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;