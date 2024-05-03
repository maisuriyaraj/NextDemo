"use client";

import { useEffect } from "react";

export default function Camera() {

    const openCamera = async() => {
        const video = document.getElementById('myCamera');
        const stream = await navigator.mediaDevices.getUserMedia({video:true});
        if(video !== null){
            video.srcObject = stream;
        }
    }
    
  return (
    <div>
        <div style={{width:400,height:400,border:'1px solid black',margin:'30px'}}>
            <video id="myCamera" autoPlay></video>
        </div>
        <button className="bg-indigo-600 text-white p-2 m-2 rounded-md " onClick={openCamera}>Open Camera</button>
    </div>
  )
}
