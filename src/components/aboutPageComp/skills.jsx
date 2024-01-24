import { FaLaptopCode } from "react-icons/fa6";
import SharePoint_Logo from "../../assets/img/Skills_Tools/ms-sharepoint-online.png";
import PowerApps_Logo from "../../assets/img/Skills_Tools/ms-powerapps.png";
import PowerAutoamte_Logo from "../../assets/img/Skills_Tools/ms-powerautomate.png";
import HTML from "../../assets/img/Skills_Tools/html.png";
import CSS from "../../assets/img/Skills_Tools/css.png";
import JavaScript from "../../assets/img/Skills_Tools/javascript.png";
import Bootstrap from "../../assets/img/Skills_Tools/bootstrap.png";
import jQuery from "../../assets/img/Skills_Tools/jquery.png";
import ReactJS from "../../assets/img/Skills_Tools/react.png";
import NextJS from "../../assets/img/Skills_Tools/next.png";
import Tailwind from "../../assets/img/Skills_Tools/tailwind-css.png";
import MySQL from "../../assets/img/Skills_Tools/mysql.png";
import CSharp from "../../assets/img/Skills_Tools/c-sharp.png";
import GitHub from "../../assets/img/Skills_Tools/github.png";
import VS from "../../assets/img/Skills_Tools/visual-studio.png";
import VSCode from "../../assets/img/Skills_Tools/vs-code.png";

const toolsSkills = [
    { name: "SharePoint", icnName: SharePoint_Logo },
    { name: "PowerApps", icnName: PowerApps_Logo },
    { name: "Power Automate", icnName: PowerAutoamte_Logo },
    { name: "HTML5", icnName: HTML },
    { name: "CSS3", icnName: CSS },
    { name: "JavaScript", icnName: JavaScript },
    { name: "Bootstrap", icnName: Bootstrap },
    { name: "jQuery", icnName: jQuery },
    { name: "ReactJS", icnName: ReactJS },
    { name: "NextJS", icnName: NextJS },
    { name: "Tailwind CSS", icnName: Tailwind },
    { name: "MySQL", icnName: MySQL },
    { name: "C#", icnName: CSharp },
    { name: "GitHub", icnName: GitHub },
    { name: "Visual Studio", icnName: VS },
    { name: "VS Code", icnName: VSCode },
]

const Skills = () => {
    return (
        <>
            <div className="flex gap-5 items-center justify-center">
                <FaLaptopCode className="text-3xl md:text-5xl font-bold" />
                <h1 className="text-3xl md:text-5xl font-bold">Tools & Skills</h1>
            </div>
            <div className="md:p-5 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
                {toolsSkills.map((item, index) => {
                    return (
                        <div key={index} className="p-4">
                            <div className="flex flex-col justify-between items-center h-full py-5 bg-black rounded-xl text-white hover:bg-[#5781ff]">
                                <img className="w-28" src={item.icnName} alt={item.icnName} />
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Skills;