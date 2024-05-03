"use client";
import Head from "next/head";
import { deleteRequest, getRequest, postRequest, putRequest } from "../utils/data-service";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

async function fetchData() {
    let response = await getRequest("http://localhost:3000/api/hello");
    return response.data.data;

}

export default async function page() {

    const userList = await fetchData();

    const handleDelete = async(id) => {
      
        try {
            debugger
            console.log(id)
            const payload = {
                id:id
            }
            let response = await deleteRequest(`http://localhost:3000/api/hello/${id}`,payload);
            enqueueSnackbar(response.data.message,{variant:'success'})

        } catch (error) {
            enqueueSnackbar(error,{variant:'error'})
            
        }
    }

    const handleUpdate = async(id) => {
        const payload = {
            id:id,
            fname:"UPDATE",
            lname:"UPDATE"
        }
        try {
            let response = await putRequest("http://localhost:3000/api/hello",payload);
            enqueueSnackbar(response.data.message,{variant:'success'})
        } catch (error) {
            enqueueSnackbar(error,{variant:'error'})
        }
    }
    return (
        <div>
                  <SnackbarProvider />

            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Client / Invoice
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Amount
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList.map((x) => (

                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img
                                                            className="w-full h-full rounded-full"
                                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {x.fname + ' ' + x.lname}
                                                        </p>
                                                        <p className="text-gray-600 whitespace-no-wrap">000004</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                                                <p className="text-gray-600 whitespace-no-wrap">USD</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                                <button
                                                    type="button"
                                                    className="inline-block text-white mx-1 bg-indigo-600 p-1 rounded"
                                                    onClick={() => handleUpdate(x._id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-block text-white mx-1 bg-red-600 p-1 rounded"
                                                    onClick={() => handleDelete(x._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
