import { useState } from "react";
import { Popup } from "./popup";

export const Header = () => {
  const [showPopup, setshowPopup] = useState(false);

  function removePopup() {
    if (showPopup) {
      setshowPopup(false);
    }
  }

  return (
    <header
      onClick={removePopup}
      className="relative px-[4vw] pb-28 md:pb-32 md:px-10"
    >
      {/* decorations */}
      {/* ellipse */}
      <img
        src="images/EllipseHeader.png"
        alt="ellispe"
        className="absolute hidden lg:block  right-[20%]  -top-[25%] w-20 "
      />

      <img
        src="images/EllipseHeader.png"
        alt="ellispe"
        className="absolute hidden lg:block  w-32 left-0 -top-[8%] "
      />

      <img
        src="images/EllipseRight.png"
        alt="ellispe"
        className="absolute hidden lg:block w-36 right-0 bottom-[45%] "
      />

      {/* star */}
      <img
        src="images/StarHeader.png"
        alt="star"
        className="absolute left-[15%] md:left-[25%] -top-12  "
      />
      <img
        src="images/StarHeader.png"
        alt="star"
        className="absolute hidden lg:block right-[12%] top-12  "
      />
      <img
        src="images/StarHeader.png"
        alt="star"
        className="absolute hidden lg:block right-[5%] bottom-[40%]  "
      />
      <img
        src="images/StarHeader.png"
        alt="star"
        className="absolute right-24 md:left-[10%] bottom-[10%]  "
      />

      {/* end of decorations */}
      <h1 className=" w-4/5 mr-auto ml-auto  text-4xl text-center md:text-5xl font-extrabold mb-2 ">
        Turn your best customers into{" "}
        <span className=" text-[#A75FD2]">Loyal fans</span>
      </h1>
      <p className=" mb-10 text-center md:text-xl w-[80%] mr-auto ml-auto">
       Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.
      </p>
      <Form setshowPopup={setshowPopup} showPopup={showPopup} />
      {/* avatars */}
      <div className=" flex justify-between items-center w-[80%] max-w-[13rem] mr-auto ml-auto ">
        <div>
          <button className=" w-[32px] h-[32px] relative  rounded-full bg-[#175CE1]">
            G
          </button>
          <button className=" w-[32px] h-[32px]  relative -z-30 -ml-2 rounded-full bg-[#A75FD2]">
            O
          </button>
          <button className=" w-[32px] h-[32px] relative -z-40 -ml-2 rounded-full bg-[#175CE1]">
            U
          </button>
          <button className=" w-[32px] h-[32px] relative -z-50 -ml-2 rounded-full bg-[#A75FD2]">
            M
          </button>
        </div>
        <p>+57 Joined</p>
      </div>
    </header>
  );
};

const Form = ({ setshowPopup, showPopup }) => {
  function handleSubmit(e) {
    e.preventDefault();
    setshowPopup(true);
  }

  return (
    <form onSubmit={handleSubmit} className="relative md:text-xl">
      {showPopup && <Popup />}
      {/* arrow */}
      <img
        src="images/ArrowHeader.png"
        alt="arrow"
        className="absolute hidden lg:block right-[15%] -top-[20%]  "
      />
      <div className=" mb-4 h-[3rem] flex items-center relative  w-4/5 max-w-[27rem] border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
        <img src="images/profilecircle.svg" alt="" />
        <input
          className=" absolute bg-transparent left-11 outline-none placeholder:text-light placeholder:font-thin"
          type="text"
          required
          placeholder="Tell us your name"
        />
      </div>

      <div className=" mb-8 h-[3rem] flex items-center relative  w-4/5 max-w-[27rem]  border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
        <img src="images/mailImg.svg" alt="" />
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className=" absolute bg-transparent left-11 outline-none placeholder:text-light placeholder:font-thin"
        />
      </div>
      <button className=" mb-4 w-4/5 max-w-[27rem] bg-gradient-to-r from-[#5404FF] to-[#BD3BD2F0] rounded-full h-12 mr-auto ml-auto block ">
        Get early access
      </button>
    </form>
  );
};
