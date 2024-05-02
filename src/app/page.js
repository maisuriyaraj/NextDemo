"use client";
import Image from "next/image";
import devs from "../../public/devs.jpg";
import next from "../../public/next.svg";
import react from "../../public/react.svg";
import angular from "../../public/angular.svg";
import Link from "next/link";



export default function Home() {

  function Toggle() {
    let toggleBtn = document.querySelector("#navbar-toggle");
    let collapse = document.querySelector("#navbar-collapse");
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
  }
  return (
    <main className="flex min-h-screen">
      <div className="header-2 w-full">
        <nav className="bg-white w-full py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <a href="#" className="font-bold text-xl text-indigo-600">
                RJ
              </a>
              <button
                className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
                onClick={Toggle}
              >
                <i className="fas fa-bars" />
              </button>
            </div>
            <div
              className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
              >
                Home
              </a>
              {/* <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Contact
              </a> */}
              <Link
                href={'/login'}
                className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                href={'/signup'}
                className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Signup
              </Link>
            </div>
          </div>
        </nav>
        <div className="bg-indigo-100 py-6 md:py-12">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-2xl mx-auto">

              <div className="typewriter">
                <h1 className="text-3xl md:text-4xl font-medium mb-2">
                  Hi , I am Raj Maisuriya....
                </h1>
              </div>

              <button className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">
                Get Started
              </button>
              <div className="mt-4">
                <Image
                  src={devs}
                  alt="mockup"
                  className="d-block max-w-full rounded shadow-md"
                />
              </div>
            </div>
            <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
              <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                <div className="w-100 flex  justify-center align-middle">
                  <Image src={react} width={80} alt="ReactJS" />
                </div>
                <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
                {/* <h5 className="text-xl font-medium uppercase mb-4">React JS</h5> */}
                <p className="text-gray-600">
                  In React.js, components represent reusable UI elements encapsulating both UI and logic. They foster a modular and declarative approach, enhancing code organization and maintainability in web development projects.
                </p>
              </div>
              <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                <div className="w-100 flex  justify-center">
                  <Image src={next} width={150} alt="NextJS" />
                </div>
                <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
                {/* <h5 className="text-xl font-medium uppercase mb-4">Next Js</h5> */}
                <p className="text-gray-600" style={{ marginTop: '54px' }}>
                  Next.js is a React framework facilitating server-side rendering and simpler React application development. It streamlines features like routing and API routes, enhancing performance and developer productivity.
                </p>
              </div>
              <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                <div className="w-100 flex  justify-center">
                  <Image src={angular} width={150} alt="Angular" />
                </div>
                <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
                {/* <h5 className="text-xl font-medium uppercase mb-4">Angular 17</h5> */}
                <p className="text-gray-600" style={{ marginTop: '48px' }}>
                Angular is a TypeScript-based web application framework that simplifies building dynamic single-page applications. It offers a comprehensive ecosystem with powerful features like two-way data binding and dependency injection, enabling rapid development and robust architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
