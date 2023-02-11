export const NavBar = () => {
  return (
    <nav className="p-4 md:p-10 mb-20 md:mb-32 flex justify-between items-center ">
      <div className=" w-24 md:w-36">
        <img src="images/Loyaltylogo.svg" alt="site-logo" />
      </div>

    <div className=" p-[1.5px] rounded-full bg-gradient-to-r from-[#5404FF] to-[#BD3BD2F0]">
        <button className=" bg-primary rounded-full px-4 py-1 md:px-6 md:py-2 ">
        Get Priority Access
        </button>
      </div>
    </nav>
  );
};
