import React from "react";

function SidePopup({ popUpData, isOpen }) {
  const { id } = popUpData;
  const translateClass = isOpen ? "translate-x-[0]" : "translate-x-[100%]";
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[30%] border ${translateClass} transition duration-1000 bg-white z-10`}
    >
      <div className="p-5">
        <p className="text-3xl font-semibold">Contact</p>
        {id === "card-contact" && <div>Contact</div>}
        {id === "card-address" && <div>Address</div>}
        {/* Create two types of containers one which can handle multiple content one can handle single */}
      </div>
    </div>
  );
}

export default SidePopup;
