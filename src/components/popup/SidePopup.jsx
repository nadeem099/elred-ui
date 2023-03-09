import React, { useState, useEffect } from "react";
import ContactPopup from "./ContactPopup";

function SidePopup({ popupData, isOpen, updateCardData, closePopup }) {
  const { id, name } = popupData;
  const [translateClass, setTranslateClass] = useState("translate-x-[100%]");

  useEffect(() => {
    if (isOpen) {
      setTranslateClass("translate-x-[0]");
    } else {
      setTranslateClass("translate-x-[100%]");
    }
  }, [isOpen]);
  return (
    <div
      className={`fixed top-0 overflow-scroll right-0 h-full w-[30%] border ${translateClass} transition duration-1000 bg-white z-10`}
    >
      <div className="p-5 relative">
        <p className="text-3xl font-semibold ml-10">{name}</p>
        {id === "card-contact" && (
          <ContactPopup
            popupData={popupData}
            updateCardData={updateCardData}
            closePopup={closePopup}
          />
        )}
        {id === "card-address" && <div>Address</div>}
      </div>
    </div>
  );
}

export default SidePopup;
