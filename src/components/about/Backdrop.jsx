import React from "react";

function Backdrop({ hideBackDropAndModal }) {
  return (
    <div
      onClick={hideBackDropAndModal}
      className="fixed top-0 left-0 w-[100%] h-[100%] bg-[#00000080] z-[8]"
    />
  );
}

export default Backdrop;
