"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { object, string, email, min, max, ref } from 'yup';
import { postRequest } from "../utils/data-service";
import { useRouter } from "next/navigation";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
export default function Page() {

  const route = useRouter();
  const initialValues = {
    fname: "",
    lname: "",
  }

  const validationSchema = object({
    fname: string().required("FIrst Name is Required !"),
    lname: string().required("Last Name is Required !")
  });

  const handleSubmit = async (data) =>{
    console.log(data);
    const payload = {
      fname:data.fname,
      lname:data.lname
    }
    
    let response = await postRequest("http://localhost:3000/api/carts",payload)
    enqueueSnackbar(response.data.fname,{variant:'success'})
    
  }
  return (
    <>
      <div className="flex items-center min-h-screen p-4 bg-indigo-100 lg:justify-center">
      <SnackbarProvider />
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-indigo-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">Add User</a>
            </div>
            <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
              With the power of K-WD, you can now focus only on functionaries for your
              digital products, while leaving the UI design on us!
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Don't have an account?</span>
              <a href="#" className="underline">
                Get Started!
              </a>
            </p>
            <p className="mt-6 text-sm text-center text-gray-300">
              Read our{" "}
              <a href="#" className="underline">
                terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                conditions
              </a>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Login
            </h3>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(e) => handleSubmit(e)} >
              <Form action="#" className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="fname"
                    className="text-sm font-semibold text-gray-500"
                  >
                    First Name
                  </label>
                  <Field
                    type="text"
                    id="fname"
                    name="fname"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                  <ErrorMessage component={'div'} name="fname" className="text-red-600" />
                </div>
                <div className="flex flex-col relative space-y-1">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="lname"
                      className="text-sm font-semibold text-gray-500"
                    >
                     Last Name
                    </label>
                  </div>
                  <Field
                    type="text"
                    id="lname"
                    name="lname"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                  <ErrorMessage component={'div'} name="lname" className="text-red-600" />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-500 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-indigo-200 focus:ring-4"
                  >
                    Add User
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>

    </>
  )
}
