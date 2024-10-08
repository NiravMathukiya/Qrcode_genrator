import React, { useState, useRef } from 'react';
import QRCode from "react-qr-code";

const Qrcode = () => {
    const [link, setlink] = useState("");
    const inputref = useRef(null); // initialize ref as null

    const genrateQr = () => {
        setlink(inputref.current.value); // Get the input's value from the ref
    }

    return (
        <div className='flex flex-col w-screen mt-6 gap-6 justify-center items-center '>
            <h1 className='text-xl capitalize'>Paste link in the text box to generate a QR code</h1>
            <div className="flex justify-center items-center text-center gap-4 w-1/2">
                <input 
                    type="text" 
                    name="input" 
                    id="input" 
                    className='h-10 border-black border-2 w-full rounded-xl' 
                    ref={inputref} // set the ref to this input
                />
                <button 
                    className='bg-blue-600 py-2 px-4 text-md rounded-md' 
                    onClick={genrateQr} // Call function on click
                >
                    Submit
                </button>
            </div>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
                {/* Render QR Code if there is a link */}
                {link && (
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={link}
                        viewBox={`0 0 256 256`}
                    />
                )}
            </div>
        </div>
    )
}

export default Qrcode;
