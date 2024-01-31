
import { useNavigate } from 'react-router-dom';
import { LuMails, LuPhoneCall } from "react-icons/lu";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SiFreelancer, SiUpwork } from "react-icons/si";


const SideNav = ({ isSideNavOpen, toggleSideNav }) => {
    const navigate = useNavigate();
    return (
        <div className={`${isSideNavOpen ? 'flex flex-col' : 'hidden'} md:flex md:flex-col justify-between bg-yellow-300 h-full px-6 md:px-3 py-10 w-full md:w-16 fixed md:static`}>
            <div className="mt-10">
                <ul className="flex flex-col md:hidden gap-5 text-lg">
                    <li onClick={() => {navigate("/about"); toggleSideNav();}}>About</li>
                    <li onClick={() => {navigate("/projects"); toggleSideNav();}}>Projects</li>
                    {/* <li onClick={() => {navigate("/services"); toggleSideNav();}}>Services</li> */}
                </ul>
            </div>
            <div className="flex md:flex-col gap-5 justify-center pb-10 md:pb-0">
                <a target="_blank" href="mailto:iamhemant2004@gmail.com"><LuMails className="act-links h-8 w-8" title="iamhemant2004@gmail.com" /></a>
                <a target="_blank" href="tel:+91-8076123141"><LuPhoneCall className="act-links h-8 w-8" title="+91-8076123141" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/03-hemant-k/"><BsLinkedin className="act-links h-8 w-8" title="LinkedIn.com" /></a>
                {/* <a target="_blank" href="https://www.freelancer.com/u/iamhemant2004"><SiFreelancer className="act-links h-8 w-8" title="Freelance.com" /></a>
                <a target="_blank" href="https://www.upwork.com/freelancers/~012f6e12ec5cd40acd"><SiUpwork className="act-links h-8 w-8" title="Upwork.com" /></a> */}
            </div>
        </div>
    )
}

export default SideNav;