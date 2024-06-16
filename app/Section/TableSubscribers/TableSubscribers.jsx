"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import User from "../../Assets/user-1.jpg";
import "./TableSubscribers.scss";

const TableSubscribers = () => {
  const [loading, setLoading] = useState(false);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://anasyakubu-cms-api.onrender.com/subscribersList")
      .then((result) => {
        const fetchSubscribers = result.data.map((subscriber) => {
          // Convert createdAt string to a Date object
          const createdAtDate = new Date(subscriber.createdAt);

          // Options for formatting the date
          const options = {
            weekday: "long", // Full name of the day of the week
            day: "2-digit", // Two-digit day of the month
            month: "long", // Full name of the month
            year: "numeric", // Full year
          };

          // Format the date using Intl.DateTimeFormat
          const formattedDate = new Intl.DateTimeFormat(
            "en-US",
            options
          ).format(createdAtDate);

          // Return the subscriber object with formatted createdAt
          return {
            ...subscriber,
            createdAt: formattedDate,
          };
        });
        // Reverse the order of testimonys after formatting
        const getSubscribers = fetchSubscribers;

        // Set the state with formatted and reversed testimonys
        setSubscribers(getSubscribers);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  // Add empty dependency array to ensure useEffect runs only once

  return (
    <div className="TableSubscribers">
      <div className="p-24">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
            <div></div>
            <label for="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search for users"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <div className="">Loading....</div>
              ) : (
                <tr className="">
                  {subscribers.map((subscriber) => (
                    <tr
                      key={subscriber._id}
                      className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-100 text-black"
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                          />
                          <label
                            for="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={User}
                          alt="Jese image"
                        />
                        <div className="ps-3">
                          <div className="text-base text-black font-semibold">
                            {subscriber.email}
                          </div>
                        </div>
                      </th>

                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                          Active
                        </div>
                      </td>
                    </tr>
                  ))}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSubscribers;
