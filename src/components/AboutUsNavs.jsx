import React from "react";
import { aboutUsNavs } from "../helpers";

function AboutUsNav() {
  return (
    <div className="py-8">
      <ul className="flex gap-7 border-b border-gray-100 py-4 px-2">
        {aboutUsNavs.map((item) => {
          const { id, name } = item;
          return (
            <li key={id} className="">
              <div className="text-gray-500 text-sm">{name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AboutUsNav;
