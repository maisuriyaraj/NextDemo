"use client";
import Quill from 'quill';
import "quill/dist/quill.snow.css";
import { useEffect, useState } from 'react';
import { postRequest } from '../utils/data-service';

// function Editor(){
//    useEffect(()=>{
//     const container = document.getElementById('editor-container');
//     const quill = new Quill(container, {
//         theme: 'snow' // 'snow' is the default theme, you can change it to 'bubble' for a bubble theme
//     });
//    },[])
//     return <div style={{width:'100%'}} id="editor-container"></div>
// }

export default function Generate() {
    const [content,setContent] = useState("");
    const handleSubmit = () => {
        console.log(content)
        postRequest("http://localhost:1000/generate",content)
        .then(response => {
            // if (!response.ok) {
            //     throw new Error('Failed to generate PDF');
            // }
            return response.data; // Read response body as Blob
        })
        .then(blob => {
            console.log("-------------->",blob);
            // Create a Blob URL for the PDF Blob
            const blob_data = new Blob([blob], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob_data);
            
            // Create an anchor element
            const a = document.createElement('a');
            
            // Set the href attribute to the Blob URL
            a.href = url;
            
            // Set the download attribute to specify the filename
            a.download = 'document.pdf';
            
            // Append the anchor element to the body
            document.body.appendChild(a);
            
            // Trigger a click event to initiate the download
            a.click();
            
            // Cleanup: Remove the anchor element and revoke the Blob URL
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        })
        // .then((response) => {
        //     if (response.data && response.data.data) {
        //         let pdfDataList = response.data.data;
        //         // const blob = new Blob([pdfDataList], { type: 'application/pdf' });
        //         // const url = URL.createObjectURL(blob);
        //         // const a = document.createElement('a');
        //         // a.href = url;
        //         // a.download = 'generated_document.pdf'; // Specify the filename here
        //         // document.body.appendChild(a);
        //         // a.click();
        //         // document.body.removeChild(a);
        //         // URL.revokeObjectURL(url);


        //         const responseData = JSON.stringify(response.data.data);
        //         console.log("-->",responseData);
        //         const responseDataLM =responseData.data;
        //         const blob = new Blob([responseDataLM], { type: "application/pdf" });
        //         const url = URL.createObjectURL(blob);
        //         const link = document.createElement("a");
        //         link.href = url;
        //         link.download = 'generated_document.pdf'; // Specify the filename here
        //         document.body.appendChild(link);
        //         link.click();
        //         URL.revokeObjectURL(url);
        //         document.body.removeChild(link);

        //     } else {
        //         console.error("Invalid response received");
        //     }
        // })
        .catch(err => {
            console.log(err)
        })
    }

    function downloadPDF(pdfBuffer) {
        console.log(pdfBuffer)
        // Convert the buffer to a Blob
        var blob = new Blob(pdfBuffer,{type:'application/pdf'});
        // Create a URL for the Blob
        var url = URL.createObjectURL(blob);
        
        // // Create an anchor element
        var a = document.createElement('a');
        
        // // Set the href attribute to the Blob URL
        a.href = url;
        
        // // Set the download attribute to specify the filename
        a.download = 'document.pdf'; // You can specify any filename here
        
        // // Append the anchor element to the body
        document.body.appendChild(a);
        
        // // Trigger a click event to initiate the download
        a.click();
        
        // // Cleanup: Remove the anchor element and revoke the URL
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }    

    return (
        <div className='px-11'>
            <label>Enter HTML Content : </label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} className='px-4 w-full py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200' rows={10}> </textarea>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-500 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-indigo-200 focus:ring-4"
                  >
                    Submit
                  </button>
        </div>
    )
}
