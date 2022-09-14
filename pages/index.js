import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const notificationMethods = [
    { id: "support", title: "Support" },
    { id: "sales", title: "Sales" },
  ];

  return (
    <>
      <Navbar />
      {/* Body */}
      <div className="flex flex-col p-4 md:grid md:grid-cols-12 md:gap-20">
        <div className="md:col-start-2 md:col-span-5">
          <img
            src="/assets/images/landing-page.jpeg"
            className="w-full h-96 object-fill md:h-screen"
          />
        </div>

        <div className="md:col-span-6">
          <span className="my-5 inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-white">
            Lorem ipsum
          </span>
          <h2 className="font-bold text-2xl">Key Features</h2>
          <div className="flex my-10 gap-2 w-full md:w-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-24 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <div className="flex flex-col">
              <div className="font-semibold">Easy to customize</div>
              <div className="text-xs leading-loose">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis expedita animi.
              </div>
            </div>
          </div>
          <div className="flex my-10 gap-2 w-full md:w-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-24 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
              />
            </svg>

            <div className="flex flex-col">
              <div className="font-semibold">Flexible software</div>
              <div className="text-xs leading-loose">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis expedita animi.
              </div>
            </div>
          </div>
          <div className="flex my-10 gap-2 w-full md:w-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-24 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>

            <div className="flex flex-col">
              <div className="font-semibold">
                Best access for all of the resources
              </div>
              <div className="text-xs leading-loose">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis expedita animi.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-12 md:gap-5">
        <div className="md:col-start-2 md:col-span-5">
          <h2 className="font-bold text-2xl">Contact Us</h2>
          <div className="my-10">We will be glad to hear from you!</div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="font-semibold text-gray-500">Phone</div>
              <div>+ 65 6544-3030</div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold text-gray-500">Email</div>
              <div>info@example.com</div>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-gray-500">Address</div>
              <div>
                3 Shenton Way <br /> Singapore, 068805
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="flex items-center">
            <label className="text-base font-medium text-gray-900 mr-4">
              Department:
            </label>
            <fieldset>
              <div className="flex items-center gap-2">
                {notificationMethods.map((notificationMethod, index) => (
                  <div
                    key={notificationMethod.id}
                    className="flex items-center"
                  >
                    <input
                      id={notificationMethod.id}
                      name="notification-method"
                      type="radio"
                      defaultChecked={index === 0}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={notificationMethod.id}
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      {notificationMethod.title}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <div className="border-primary focus-within:border-primary">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full border-0 p-2 border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                placeholder="Subject"
              />
            </div>
            <div className="border-primary focus-within:border-primary">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full border-0 p-2 border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div className="border-primary focus-within:border-primary">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full border-0 p-2 border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                placeholder="name@example.com"
              />
            </div>
            <div className="border-primary focus-within:border-primary">
              <textarea
                type="text"
                name="name"
                id="name"
                className="block w-full border-0 p-2 border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                placeholder="Message..."
              />
            </div>
            <div className="flex rounded-md shadow-sm">
              <label className="inline-flex items-center border-r-2 border-black bg-gray-200 px-3 text-gray-500">
                Choose file
              </label>
              <label
                type="text"
                name="company-website"
                id="company-website"
                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md bg-gray-50 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                No file Chosen
              </label>
              <button className="inline-flex items-center bg-gray-500 rounded-r-md px-3 text-white">
                Browse
              </button>
            </div>
            <div className="flex items-center gap-4">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="agree" className="text-xs">
                I agree to terms and conditions.
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
