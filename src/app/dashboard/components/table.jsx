"use client";

import { useRouter } from "next/navigation";

export default function Table({ userList }) {
    const route = useRouter();
    const viewDetails = (data) => {
        route.push(`/dashboard/${data.id}`);
    }
    return (
        <div>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Client
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            User Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Phone
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100" />
                    </tr>
                </thead>
                <tbody>
                    {userList.map((x,i) => (
                        <tr key={i}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex">
                                    <div className="flex-shrink-0 w-10 h-10">
                                        {x.id}
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {x.firstName + " " + x.lastName}
                                        </p>
                                        <p className="text-gray-600 whitespace-no-wrap">{x.ein}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{x.email}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {x.username}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{x.phone}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                <button
                                    type="button"
                                    className="bg-indigo-600 p-2  text-white rounded-lg hover:bg-indigo-700"
                                    onClick={() => viewDetails(x)}
                                >
                                    view
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
