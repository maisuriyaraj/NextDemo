// "use client";
// import { useEffect, useState } from "react"
import { isLoggedIn } from "../utils/auth";
import Table from "./components/table";
// import { useRouter } from "next/navigation";
// import { getRequest } from "../utils/data-service";


async function getUserData() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function Dashboard() {
  // const route = useRouter();
  // const [userList, setList] = useState([]);
  const userList = await getUserData();
  // let isAuth = isLoggedIn();
  // if (!isAuth) {
  //   route.push('/');
  // }
  // useEffect(() => {
  //   let isAuth = isLoggedIn();
  //   if (!isAuth) {
  //     route.push('/');
  //   }
  //   getUserList();
  // }, []);

  const getUserList = () => {
    // getRequest("https://dummyjson.com/users").then((response) => {
    //   if (response.data?.users) {
    //     setList(response.data?.users)
    //   }
    // }).catch(err => {
    //   console.log(err)
    // })
    fetch("https://dummyjson.com/users").then((response) => {
      console.log(response)
    })
  }
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Clients</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            {/* <table className="min-w-full leading-normal">
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
                {userList.map((x) => (
                  <tr>
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
                        className="inline-block text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          className="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table> */}
            <Table userList={userList} />
          </div>
        </div>
      </div>
    </div>

  )
}
// Generate Dynamic 
export function generateMetadata({ params }) {
  return {
    title: "Dashboard"
  }
}
