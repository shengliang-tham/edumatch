import Footer from "../components/Footer";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className="bg-gray-100 flex flex-col h-screen justify-between">
      <div className="flex gap-4 justify-center">
        <div className="w-96">
          <div className="text-primary mt-10 underline text-center">
            <Link href="/">
              <a>EduMatch</a>
            </Link>
          </div>
          <div className="bg-white p-4 flex flex-col justify-center justify-items-center gap-2 mt-10">
            <label className="text-gray-500 text-xs text-center">Sign In</label>
            <label className="text-black text-center">Join Our Community</label>
            <div className="flex flex-col gap-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="flex rounded-md shadow-sm">
                  <input
                    type="email"
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
                <p className="text-xs text-red-600">{errors.email?.message}</p>
                <div className="flex rounded-md shadow-sm">
                  <input
                    type="password"
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
                  className="justify-center inline-flex items-center rounded border border-transparent bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm"
                  type="submit"
                >
                  Sign In
                </button>
              </form>

              <div className="text-center text-gray-500 text-sm mx-4">
                or continue with
              </div>

              <div className="flex flex-col gap-2">
                <button className="border border-black rounded flex p-2 gap-4">
                  <img
                    src="./assets/images/facebook-icon.png"
                    width="24"
                    height="24"
                  />
                  <div className="text-gray-600"> Sign In with Facebook</div>
                </button>
                <button className="border border-black rounded flex p-2 gap-4">
                  <img
                    src="./assets/images/google-icon.png"
                    width="24"
                    height="24"
                  />
                  <div className="text-gray-600"> Sign In with Google</div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-1 mt-5 justify-center">
            <div className="text-primary underline">Police privacy</div> and
            <div className="text-primary underline">Terms of use</div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
