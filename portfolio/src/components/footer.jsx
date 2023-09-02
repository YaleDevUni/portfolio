//Make footer components with tailwindcss put email and phone number in footer
import React from "react";

function Footer() {
    return (
        <div className="flex flex-col justify-center bg-zinc-900 text-white mx-[20%]">
            <div className="flex flex-col mb-4 justify-center text-center my-6">
                <div className="opacity-60  ">Contact</div>
                {/* <div className="flex flex-row items-center justify-center"> */}
                <div className="opacity-60">Email: rhrnak4403@gmail.com</div>
                <div className="opacity-60">Phone Number: 1-604-307-3961</div> 
                {/* </div> */}
            </div>
        </div>
    );
}
export default Footer;