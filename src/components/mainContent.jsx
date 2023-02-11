export const Content = () => {
  return (
    <section className=" relative py-28 md:py-32 px-[4vw]  lg:flex justify-between items-center">
      {/* decoration */}

      {/* ellipse */}
      <img
        src="images/EllipseHeader.png"
        alt="ellispe"
        className="absolute hidden lg:block  w-20 left-[8%] top-[5%] "
      />
      {/* vector */}
      <img
        src="images/VectorRight.png"
        alt="vector"
        className="absolute hidden lg:block  right-[10%] top-[-2%] "
      />
      <img
        src="images/VectorRight.png"
        alt="vector"
        className="absolute hidden lg:block  left-[38%] top-[8%] "
      />
      {/* star */}
      <img
        src="images/StarHeader.png"
        alt="star"
        className="absolute w-6 left-[20%] top-[5%] lg:left-[25%] lg:top-[18%] "
      />
      {/*end of  decoration */}

      <div className=" pt-8 mb-20  lg:mb-40 lg:w-[40%]">
        <h1 className=" relative w-fit font-extrabold text-4xl lg:text-5xl mb-1 lg:mb-20">
        Priority Access
          <img
            src="images/Line6.png"
            alt="line"
            className="absolute hidden lg:block top-[118%] left-[15%]"
          />
        </h1>
        <p className=" relative font-medium md:text-xl">
        Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available. Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!
          <img
            src="images/StarHeader.png"
            alt="star"
            className="absolute hidden  lg:block  right-[5%] -bottom-[20%] "
          />
        </p>
      </div>

      <article className=" lg:w-[55%]">
        <form
          action=""
          className="relative bg-[#1D2939] rounded-2xl p-8 md:p-16"
        >
          <h3 className=" text-xl font-extrabold mb-8">
            Book a Consultation with us
          </h3>
          <InputComponent text={"Enter your full name"} />
          <InputComponent text={"Enter your work email"} />
          <InputComponent text={"Mobile number"} />
          <InputComponent text={"Company Name"} />
          <div className=" mb-8 h-[3rem] relative  items-center   border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
            <select className=" w-full bg-[#1D2939]">
              <option value="" selected>
                Select Country
              </option>
            </select>
          </div>
          <div className=" mb-8 relative  items-center   border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
            <textarea
              placeholder="Drop a message....."
              className=" block w-full min-h-[5rem] bg-[#1D2939] placeholder:text-light placeholder:font-thin resize-none"
            ></textarea>
          </div>
          <button className=" mb-4 w-full bg-gradient-to-r from-[#5404FF] to-[#BD3BD2F0] rounded-full h-12 mr-auto ml-auto block ">
            Send Request
          </button>
          {/* decoration */}
          <img
            src="images/StarHeader.png"
            alt="star"
            className="absolute hidden lg:block  right-[5%] -bottom-[7%] "
          />
        </form>
      </article>
    </section>
  );
};

const InputComponent = ({ text }) => {
  return (
    <div className=" mb-8 h-[3rem] relative  items-center   border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
      <input
        type="text"
        placeholder={text}
        className=" absolute bg-transparent left-4 outline-none  placeholder:text-light placeholder:font-thin"
      />
    </div>
  );
};
