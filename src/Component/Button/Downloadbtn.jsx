import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";

function Downloadbtn() {
  return (
    <button
      type="submit"
      class="bg-transparent flex hover:bg-[#458FF6] text-[#458FF6] font-semibold hover:text-white py-3 px-9 border border-[#458FF6] hover:border-transparent rounded-full"
    >
      Download
      <div className="mt-[5px] pl-2">
        <HiArrowNarrowDown />
      </div>
    </button>
  );
}

export default Downloadbtn;
