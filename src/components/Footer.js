import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { IconContext } from 'react-icons';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

export default function App() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: "25" }}>
            <div className="bg-purple-500 h-96 text-center text-white">
                <Parallax pages={2}>
                    <ParallaxLayer
                        offset={0}
                        speed={2.5}
                        style={{
                            backgroundColor: "#f53d3d",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "568px"
                        }}
                    />
                    <ParallaxLayer
                        offset={1}
                        speed={2}
                        style={{
                            backgroundColor: "#be3df5",
                            position: "relative",
                        }}
                    />
                    <ParallaxLayer
                        offset={1}
                        speed={1}
                        style={{
                            backgroundColor: "#000",
                            color: "white",
                        }}

                    >
                        <div className="w-full flex my-4">
                            <div className="w-1/4 mx-10">
                                <img src="gdu" alt="gdu logo" className="w-44 h-44 mx-auto py-4 my-10 bg-white text-black" />
                                <h1 className="text-xl">Contact me</h1>
                            </div>
                            <div className="grid grid-cols-2 w-2/3 py-16 grid-rows-5 gap-y-1.5 justify-items-center gap-x-0 mx-20 text-left">
                                <div className="w-2/4 text-lg h-auto my-0">Lets Talk</div>
                                <div className="w-2/4 text-lg h-auto my-0">About Us</div>
                                <div className="w-2/4 text-lg h-auto my-0">Achievements</div>
                                <div className="w-2/4 text-lg h-auto my-0">Join Us</div>
                                <div className="w-2/4 text-lg h-auto my-0">Projects</div>
                                <div className="w-2/4 text-lg h-auto my-0">Support Us</div>
                                <div className="w-2/4 text-lg h-auto my-0">Teams</div>
                                <div className="w-2/4 text-lg h-auto my-0">Become Our Partner</div>
                                <div className="w-2/4 text-lg h-auto my-0">Privacy Policy</div>
                                <div className="w-2/4 text-lg h-auto my-0">Copyrights and Patents</div>
                            </div>
                        </div>
                        <div classname="fixed ">
                            <div className="fixed left-36 text-center">
                                <h1 className="text-base">All Rights Reserved</h1>
                            </div>
                            <div className="mx-3 inline-block p-1 rounded-md ">
                                <FaFacebookF /> {/*facebook logo*/}
                            </div>
                            <div className="mx-3 inline-block p-1 rounded-md">
                                <FaInstagram /> {/*instagram  logo*/}
                            </div>
                            <div className="mx-3 inline-block p-1">
                                <FaXTwitter /> {/*Twitter-X logo*/}
                            </div>
                            <div className="mx-3 inline-block p-1">
                                <FaLinkedinIn /> {/*Linked In logo*/}
                            </div>
                            <div className="mx-3 inline-block p-1">
                                <FaThreads /> {/*threads logo*/}
                            </div>
                        </div>


                    </ParallaxLayer>
                </Parallax>
            </div>
        </IconContext.Provider>
    );
}