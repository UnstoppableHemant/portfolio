import { FaUser } from "react-icons/fa6";
import Skills from "../components/aboutPageComp/skills";
import userImage from "../assets/img/usrImage.png";
import Education from "../components/aboutPageComp/education";


const About = () => {
    return (
        <>
            <div className="w-full md:p-5 overflow-y-auto scroll-smooth h-full">
                <section className="m-1" >
                    <div className="flex gap-5 items-center justify-center">
                        <FaUser className="text-2xl md:text-4xl font-bold" />
                        <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
                    </div>
                    <div className="md:py-5 flex flex-col md:flex-row">
                        <div className='p-5 w-full md:w-2/5'>
                            <img className='rounded-xl' src={userImage} alt="user Image" />
                        </div>
                        <div className='p-5 w-full md:w-3/5'>
                            <h2 className="text-2xl font-bold">I'm Hemant</h2>
                            <p className='font-semibold'>SharePoint Online | Power Apps | Power Automate Developer
                                <br />
                                <br />
                                I have developed a wide range of Enterprise Applications
                                in SharePoint Online and PowerApps.
                                I believe in delivering quality work on time to meet client expectations & requirements.
                                I am currently pursuing a BCA at Chandigarh University.
                                I am working as a freelancer from January 2023 until now.
                            </p>
                            <br />
                            <div className="my-1 font-semibold">
                                <button className="px-4 py-2 m-1 act-btn"><a target="_blank" href="tel:+91-8076123141">Contact : &nbsp; +91 - 8076123141</a></button>
                                <button className="px-4 py-2 m-1 act-btn"><a target="_blank" href="mailto:iamhemant2004@gmail.com">Email : &nbsp; iamhemant2004@gmail.com</a></button>
                                <button className="px-4 py-2 m-1 act-btn">Place : &nbsp; Delhi, India - 110053</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="m-1 mt-5" >
                    <Skills/>
                </section>
                <section className="m-1 mt-5" >
                    <Education/>
                </section>
            </div>
        </>
    )
}

export default About;