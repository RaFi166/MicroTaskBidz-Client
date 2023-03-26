import React from "react";
import ironman from "../images/ironman.jpg";
import venom from "../images/venom.jpg";
import thor from "../images/thor.jpg";
import superman from "../images/superman.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bid = () => {
  const notify = () =>
    toast.success(
      "Thanks for the bidding, will notify you soon",
      {
        icon: "🚀",
        theme: "dark",
      },
      {}
    );
  return (
    <>
      <div className="flex justify-center font-bold	text-4xl mt-12 mb-6">
        <h1>Bid Auction</h1>
      </div>
      <div className="grid grid-cols-2">
        <div class="flex justify-center">
          <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <img
              class="rounded-t-lg"
              src={ironman}
              style={{ width: "220px", height: "340px" }}
              alt=""
            />

            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Iron-Man Comic Book
              </h5>
              <h6 class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                $1.2M
              </h6>
              <button
                type="submit"
                onClick={notify}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Place Bid
              </button>{" "}
              <ToastContainer />
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <img
              class="rounded-t-lg"
              style={{ width: "220px", height: "340px" }}
              src={venom}
              alt=""
            />

            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Venom Comic Book
              </h5>
              <h6 class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                $1.4M
              </h6>
              <button
                onClick={notify}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Place Bid
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <img
              class="rounded-t-lg"
              style={{ width: "220px", height: "340px" }}
              src={thor}
              alt=""
            />

            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Thor Comic Book
              </h5>
              <h6 class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                $2M
              </h6>
              <button
                onClick={notify}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Place Bid
              </button>{" "}
              <ToastContainer />
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <img
              class="rounded-t-lg"
              style={{ width: "220px", height: "340px" }}
              src={superman}
              alt=""
            />

            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Super-Man Comic Book
              </h5>
              <h6 class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                $2.5M
              </h6>
              <button
                onClick={notify}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Place Bid
              </button>{" "}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bid;
