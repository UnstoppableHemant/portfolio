
import { useNavigate } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";

const Header = ({toggleSideNav}) => {
    const navigate = useNavigate();
    return (
        <div className="flex mx-auto w-full px-6 md:px-10 py-4 items-center bg-yellow-300 justify-between z-10 drop-shadow-lg">
            <div className="flex gap-6">
                <CgMenuLeft className="w-8 h-8 block md:hidden" onClick={toggleSideNav}/>
                <h3 onClick={() => {navigate("/"); toggleSideNav();}} className="text-3xl font-bold">Portfolio</h3>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-5 text-lg">
                    <li className='font-semibold' onClick={() => navigate("/about")}>About</li>
                    <li className='font-semibold' onClick={() => navigate("/projects")}>Projects</li>
                    <li className='font-semibold' onClick={() => navigate("/services")}>Services</li>
                    {/* <li>About</li>
                    <li>About</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;