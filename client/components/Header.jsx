import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center mx-10 px-6 py-5 border-b-2">
        <img src="/static/images/logo.png" alt="Logo" className="w-40 " />
        <div className="flex space-x-10 items-center text-[gray] ">
          <h3>How it works?</h3>
          <h3>Features</h3>
          <h3>About us</h3>
          <button className="btn">Login </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
