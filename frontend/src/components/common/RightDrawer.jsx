import { useState, useEffect } from "react";
import { FaInfo } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
const RightDrawer = () => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsLarge(window.innerWidth >= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (isLarge) {
    return (
      <div className="flex items-center gap-2 px-10">
        <a className="whitespace-nowrap flex-shrink-0 text-sm pr-3 hover:text-[#20c997]">
          <FaCoins className="inline mr-2" />
          $115 037
        </a>
        <a className="whitespace-nowrap flex-shrink-0 text-sm pr-3 hover:text-[#20c997]">
          <FaCalendarAlt className="inline mr-2" />
          Period: 3/12
        </a>
        <button className="btn btn-neutral ml-4 flex-shrink-0">
          Go To Save
        </button>
      </div>
    );
  }

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
          <FaInfo />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li className="mt-10">
            <a className="whitespace-nowrap flex-shrink-0 text-lg pr-3 hover:text-[#20c997]">
              <FaCoins className="inline mr-2" />
              Cash: $115 037
            </a>
          </li>
          <li className="mt-5">
            <a className="whitespace-nowrap flex-shrink-0 text-lg pr-3 hover:text-[#20c997]">
              <FaCalendarAlt className="inline mr-2" />
              Period: 3/12
            </a>
          </li>
          <li>
            <>
              {" "}
              <button className="btn btn-neutral mt-5">Go To Save</button>
            </>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightDrawer;
