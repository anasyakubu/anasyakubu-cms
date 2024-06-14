import Nav from "../../components/Nav";
import React from "react";
import Image from "next/image";
import HeroImage from "../../Assets/Banner-1.png";
import Link from "next/link";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <Nav />
      <div className="py-16 p-32">
        <div className="bg-[#f8f8f8] text-black p-10 rounded-lg shadow-lg">
          <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/* mobile-display */}
            <div className="md flex justify-center text-center">
              <div className="">
                <Image className="w-56 img" src={HeroImage} alt="" />
              </div>
            </div>
            {/*  */}
            <div className="py-5">
              <h2 className="text-3xl font-bold">
                The all-in-one platform for projects 🔨
              </h2>
              <p className="mt-5 text-sm">
                PPM brings teams closer together with connected workflows, docs,
                real-time dashboards and more—helping everyone move faster, work
                smarter, and save time.
              </p>

              <ul className="list mt-5 text-sm">
                <li>All-in-one knowledge and work management</li>
                <li>Increase efficiency with automation and reporting</li>
                <li>Standardize and scale project management best practices</li>
              </ul>

              <div className="mt-6 button">
                <Link
                  href="/sign-in"
                  className="btn p-2 text-sm bg-black text-white pr-5 pl-5 outline-none border border-black rounded-lg shadow-lg"
                >
                  Manage Your Projects
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="image flex justify-center text-center">
              <div className="">
                <Image className="w-64" src={HeroImage} alt="" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <p>
              Build by{" "}
              <Link
                className="text-sm underline"
                href="https://github.com/anasyakubu"
                target="_blank"
              >
                Anas Yakubu
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
