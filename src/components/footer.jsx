export const Footer = () => {
  return (
    <footer className=" relative  md:px-10 lg:flex-row flex gap-y-8 justify-between flex-col px-[4vw] py-10">
      <div className="absolute border-t left-[2.5%] top-6 w-[95%] px-10 "></div>
      <div className=" flex gap-x-4 items-center lg:items-start  md:w-[30%]">
        <img src="images/house2.svg" alt="phone" />
        <p>
          2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
          Nigeria.
        </p>
      </div>
      <p className=" font-bold order-1 ">Loyalbaze is almost here.</p>
      <div className=" flex gap-x-4 items-center lg:items-start  lg:order-2">
        <img src="images/phone.svg" alt="phone" />
        <p>+234 903 618 9485</p>
      </div>
    </footer>
  );
};
