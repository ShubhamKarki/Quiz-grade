import React from "react";

import { AiFillCaretDown } from "react-icons/ai";

const LandingPage = () => {
  return (
    <section className="relative pb-32">
      <div className="m-auto w-[75%]  flex justify-between ">
        <div className="flex flex-col space-y-14 py-28">
          <h1 className="font-semibold text-5xl">
            Learn
            <br /> new concepts <br />
            for each question
          </h1>
          <p className="border-l-2 border-black px-5 py-2 text-[gray] ">
            We help you prepare for exams and quizes
          </p>
          <div className="flex items-center space-x-10">
            <button className="btn btn-primary shadow-lg ">
              Start solving
            </button>
            <button className="flex items-center space-x-2">
              <AiFillCaretDown />
              <h4>Know more</h4>
            </button>
          </div>
        </div>
        <img
          src="/static/images/welcome.png"
          alt="welcome"
          className="w-[50%]  object-contain"
        />
      </div>
      <img
        src="/static/images/vector_curve.png"
        alt="welcome"
        className=" w-96   absolute bottom-0"
      />
    </section>
  );
};

export default LandingPage;
