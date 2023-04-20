import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import qs from "qs";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const darkMode = theme.state.darkMode;
  const [statusError, setStatusError] = useState("");
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);

  // const submitHandler=()=>{
  const onSubmit = async (event) => {
    event.preventDefault();
    setStatusError("");

    if (sending) return;

    try {
      setSending(true);
      const res = await fetch(
        "/1",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "Access-control-allow-origin": "*",
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            // "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      ) 
      .then (response => console.log("REST",response))
      // .then((response)=>console.log("data",response));

      // const res = await fetch('/api/sendgrid')
      // , {
      //   body: qs.stringify({
      //     email: email,
      //     fullname: email,
      //     message: message,
      //   }),
      //   mode: "no-cors",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "access-control-allow-origin": "*",
      //   },
      //   method: "POST",
      // });
      // const { data } = await res.json();
      console.log("RES", res);
      const { error } = await res.json();

      const statusError = getStatusError({
        status: res?.status,
        errorMessage: error,
        fallback: "There was a problem sending your message",
      });

      if (statusError) throw new Error(statusError);

      setComplete(true);
      setSending(false);
    } catch (error) {
      // console.log("ERR");
      setSending(false);
      setStatusError(error.message || error);
    }
  };
  // }
  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form onSubmit={onSubmit}>
              {/* <div class="my-6">
                <label
                  for="name"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div> */}
              <div className="mb-4">
                <label
                  for="email"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  for="message"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  class="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex justify-between ">
                {/* <div className="underline">
                  <a href="mailto:atharva@techstuff.cloud"> 
                    Send me email directly
                  </a>
                </div> */}
                {/* <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"> */}
                {/* <a href="mailto:atharva@techstuff.cloud">Submit</a> */}
                <button>Submit</button>
                {/* </button> */}
              </div>
            </form>
          </div>
          ERR:_ {statusError}
          SENDING:_ {sending}
          COMPLETE:-{complete}
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            {/* <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              +91 8285631499
            </a> */}
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              aakash.sh858791@gmail.com
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <a
              href="hello"
              className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase"
            >
              Jhilmil Colony, Delhi
              <br />
              India
            </a>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Aakash Sharma
      </div>
    </div>
  );
};
function getStatusError({
  status,
  errorMessage,
  fallback = "There was a problem with your request",
}) {
  if (status === 200) return false;

  const statuses = {
    500: "There was a problem with the server, try again later",
    404: "There was a problem connecting to the server. Make sure you are connected to the internet",
  };

  if (errorMessage) {
    return errorMessage;
  }

  return statuses[status] || fallback;
}
export default Contact;
