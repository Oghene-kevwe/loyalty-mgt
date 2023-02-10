export const Header = () => {
  return (
    <header className=" relative  px-[4vw] pb-28 md:pb-32 md:px-10">
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
        Get ready to revolutionize the way you interact with your customers and
        drive sales with Loyalbaze. Join the waiting list now to be among the
        first to experience the future of customer loyalty.
      </p>
      <Form />
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

const Form = () => {
  return (
    <form className="relative md:text-xl">
      {/* arrow */}
      <img
        src="images/ArrowHeader.png"
        alt="arrow"
        className="absolute hidden lg:block right-[15%] -top-[30%]  "
      />
      <div className=" mb-4 h-[3rem] flex items-center relative  w-4/5 max-w-[27rem] border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
        <img src="images/profilecircle.svg" alt="" />
        <input
          className=" absolute bg-transparent left-11 outline-none placeholder:text-light placeholder:font-thin"
          type="text"
          placeholder="Tell us your name"
        />
      </div>

      <div className=" mb-8 h-[3rem] flex items-center relative  w-4/5 max-w-[27rem]  border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
        <img src="images/mailImg.svg" alt="" />
        <input
          type="text"
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
