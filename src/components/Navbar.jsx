import ButtonToggle from "./ButtonToggle";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full  top-0 p-2 sticky bg-white/90 flex-row dark:bg-soft_dark/90 backdrop-blur-sm">
        <div className="flex w-full justify-start items-center">
          <span>
            <i class="fa-solid fa-chevron-left"></i>
          </span>
        </div>
        <div className="flex w-full justify-end space-x-10">
          <div className="flex w-full justify-end items-baseline">
            <span>
              <input
                type="text"
                className="w-full dark:bg-soft_dark p-1 border-2 rounded-lg"
                placeholder="Search..."
              />
            </span>
          </div>
          <div className="flex justify-end">
            <ButtonToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
