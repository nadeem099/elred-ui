import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutUsNavs from "./AboutUsNavs";

function AboutUs() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">About Us</h1>
      <div className="flex items-start gap-4 mt-7">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
            width="40"
            height="40"
          />
          <div className="">
            <p className="text-2xl font-semibold">A.T. Inks</p>
            <p className="text-lg text-gray-500">Digital Inks</p>
          </div>
        </div>
        <div className="relative w-min mt-1">
          <span className="absolute top-[1px] right-[4px]">
            <FontAwesomeIcon icon={["fas", "check"]} size="xs" color="white" />
          </span>
          <FontAwesomeIcon
            icon={["fas", "certificate"]}
            size="lg"
            color="gray"
          />
        </div>
        <div className="pt-1 -ml-2 text-blue-500 underline text-sm">
          Verify Company
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        dignissimos et saepe velit. Minima ducimus adipisci odit aliquam?
        Corporis consequuntur ex est maiores modi consequatur deleniti aut
        necessitatibus omnis debitis.
      </p>
      <AboutUsNavs />
    </div>
  );
}

export default AboutUs;
