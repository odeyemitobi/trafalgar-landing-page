import React from "react";
import Navbar from "../Component/Navbar/Navbar";

function Mainlayout({ children }) {
  return (
      <section className="">
          <Navbar/>
          <div className="w-full">
              {children}
          </div>
    </section>
  );
}

export default Mainlayout;
