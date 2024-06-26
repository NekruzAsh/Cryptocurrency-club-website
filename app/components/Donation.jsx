import React from "react";

const Donation = () => {
  return (
    <div id="donation" className="w-full md:h-screen flex justify-center">
      <div className="max-w-full items-center text-center">
        <div className="mx-auto px-8 mt-32">
          <div className="mb-12">
            <p className=" text-[#FF204E] text-lg">What's Next?</p>
            <h3 className="text-[#cfcfcf] text-xl">
              Please don't forget to support our members and faculty!
            </h3>
          </div>
          <div className="relative isolate overflow-hidden bg-[#191a1e] px-6 py-24 shadow-xl rounded-2xl">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold text-white sm:text-4xl">
              Donate Today!
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-[#cfcfcf]">
              Contribute to the future of cryptocurrency and blockchain
              technology by donating to our club.
            </p>

            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required=""
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white/20 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="flex-none rounded-md text-white btn bg-[#ff2032]"
              >
                <a href="" className="uppercase">
                  Donate
                </a>
              </button>
            </form>

            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              ></circle>
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#ff2032"></stop>
                  <stop offset="1" stopColor="#ff2032" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
