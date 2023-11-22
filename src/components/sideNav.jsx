import { LuMails, LuPhoneCall } from "react-icons/lu";
import { BsLinkedin } from "react-icons/bs";
import { SiFreelancer, SiUpwork } from "react-icons/si";


const SideNav = ({isSideNavOpen}) => {
    return (
        <div className={`${isSideNavOpen ? 'flex flex-col' : 'hidden'} md:flex md:flex-col justify-between bg-yellow-300 h-screen px-6 md:px-4 py-10 w-full md:w-16 fixed`}>
            <div className="mt-10">
                <ul className="flex flex-col md:hidden gap-5 text-lg">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex md:flex-col gap-5 justify-center pb-10 md:pb-0"> 
                <a target="_blank" href="mailto:iamhemant2004@gmail.com"><LuMails className="h-6 w-6" title="iamhemant2004@gmail.com"/></a>
                <a target="_blank" href="tel:+91-8076123141"><LuPhoneCall className="h-6 w-6" title="+91-8076123141"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/03-hemant-k/"><BsLinkedin className="h-6 w-6" title="LinkedIn.com"/></a>
                <a target="_blank" href="https://www.freelancer.com/u/iamhemant2004"><SiFreelancer className="h-6 w-6" title="Freelance.com"/></a>
                <a target="_blank" href="https://www.upwork.com/freelancers/~012f6e12ec5cd40acd"><SiUpwork className="h-6 w-6" title="Upwork.com"/></a>
            </div>
        </div>
    )
}

export default SideNav;