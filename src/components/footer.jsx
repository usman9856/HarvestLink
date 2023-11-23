import React from "react";
import '../assets/styles/footer.css'
import facebook from "../assets/icons/facebook.png"
import github from "../assets/icons/github-logo.png"
import twitter from "../assets/icons/twitter.png"
import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <div className="bg-black text-white grid grid-cols-3 gap-4 h-screen" style={{ height: "50vh" }}>
                <div className="flex text-center flex-col justify-center">
                    <ul>
                        <li className="m-10">History</li>
                        <li className="m-10">Motivation</li>
                        <li className="m-10">Contributor</li>
                    </ul>
                </div>
                <div className="flex text-center flex-col justify-center">
                    <ul>
                        <li className="m-10">Join our Team</li>
                        <li className="m-10">Join our Network</li>
                        <li className="m-10">Login to Portal</li>
                    </ul>
                </div>
                <div className="flex text-center flex-col justify-center">
                    <ul>
                        <li className="m-10">Milestone</li>
                        <li className="m-10">Vision</li>
                        <li className="m-10">Aims</li>
                    </ul>
                </div>
                <div></div>
                <div className=" flex text-center flex-col justify-center">
                    <ul className="flex space-x-4 items-center justify-around">
                        <li className="">
                            <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Harvest Link Facebook" className="w-12 h-12 object-contain bg-white  rounded-full" /></Link>
                        </li>
                        <li className="">
                            <Link to="https://github.com/usman9856/HarvestLink" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="Harvest Link Github" className="w-12 h-12 object-contain  bg-white  rounded-full" /></Link>
                        </li>
                        <li className="">
                            <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Harvest Link Twitter" className="w-12 h-12 object-contain  bg-white  rounded-full" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;