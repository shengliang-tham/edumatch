import Footer from "../components/Footer";
import Link from "next/link";

import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex flex-col md:grid md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="grid grid-cols-12 mt-10">
            <div className="col-start-2 col-span-10">
              <div className="flex justify-between">
                <div className="text-primary underline text-center">
                  <Link href="/">
                    <a>EduMatch</a>
                  </Link>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-primary bg-white px-2.5 py-1.5 text-xs font-medium text-primary shadow-sm"
                >
                  <Link href="/login">
                    <a>Sign In</a>
                  </Link>
                </button>
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <div className="text-gray-500">Sign Up</div>
                <div className="text-lg">Create an account</div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-2"
                >
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="block w-full rounded border p-2 border-gray-300 text-gray-700 shadow-sm"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "Please enter your first name",
                      })}
                    />

                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="block w-full rounded border p-2 border-gray-300 text-gray-700 shadow-sm"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Please enter your last name",
                      })}
                    />
                  </div>
                  <p className="text-xs text-red-600">
                    {errors.firstName?.message}
                  </p>
                  <p className="text-xs text-red-600">
                    {errors.lastName?.message}
                  </p>
                  <div className="flex rounded-md shadow-sm">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full min-w-0 flex-1 border border-gray-300 px-3 py-2"
                      placeholder="name@email.com"
                      {...register("email", {
                        required: "Please enter your email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <span className="inline-flex items-center rounded-r border border-gray-300 bg-gray-200 px-3 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xs text-red-600">
                    {errors.email?.message}
                  </p>
                  <div className="flex rounded-md shadow-sm">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full min-w-0 flex-1 border border-gray-300 px-3 py-2"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Please enter your password",
                      })}
                    />
                    <span className="inline-flex items-center rounded-r border border-gray-300 bg-gray-200 px-3 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xs text-red-600">
                    {errors.password?.message}
                  </p>
                  <button
                    type="submit"
                    className="justify-center inline-flex items-center rounded border border-transparent bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm"
                  >
                    Sign Up
                  </button>
                </form>

                <div className="flex gap-1">
                  <div className="text-primary underline">Police privacy</div>{" "}
                  and
                  <div className="text-primary underline">Terms of use</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6">
          <img
            src="./assets/images/register-icon.webp"
            className="hidden md:flex object-cover w-full h-screen"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
