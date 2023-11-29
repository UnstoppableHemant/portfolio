
import { useNavigate } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";

const Header = ({toggleSideNav}) => {
    const navigate = useNavigate();
    return (
        <div className="flex mx-auto w-full px-6 md:px-10 py-4 items-center justify-between fixed z-10">
            <div className="flex gap-6">
                <CgMenuLeft className="w-8 h-8 block md:hidden" onClick={toggleSideNav}/>
                <h3 onClick={() => {navigate("/"); toggleSideNav();}} className="text-2xl font-bold">Portfolio</h3>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-5 text-lg">
                    <li onClick={() => navigate("/about")}>About</li>
                    <li onClick={() => navigate("/projects")}>Projects</li>
                    <li onClick={() => navigate("/contact")}>Contact</li>
                    {/* <li>About</li>
                    <li>About</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;