export function Popup() {
  return (
    <div className=" absolute -top-40 left-[50%] -translate-x-[50%] z-50 bg-[#15141B] h-[27rem] rounded-2xl grid place-items-center py-16 px-10 gap-y-8 w-[90%] max-w-[27rem]">
      <div>
        <img src="images/checkmark.png" alt="checkmark" />
      </div>
      <div className="text-center">
        <h4 className=" font-bold text-lg ">Congratulations</h4>
        <p className=" mt-2 font-thin">
          Great move! You're one step closer to getting your hands on the
          product. Please check your mail for more information.
        </p>
      </div>
    </div>
  );
}
