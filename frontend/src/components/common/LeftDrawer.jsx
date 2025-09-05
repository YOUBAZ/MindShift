import { useState, useEffect } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { TbAlignRight } from "react-icons/tb";
import { PiTextAlignJustifyBold } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { IoPieChartOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { FaQuestion } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
const LeftDrawer = () => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsLarge(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (isLarge) {
    return (
      <>
        <div className="fixed top-0 left-0 h-full w-60 z-40 p-2 bg-[#313131]">
          <div className="mb-4">
            <a className="text-sm text-[#efefef]" href="/">
              MindShift X eduardo
            </a>
          </div>
          <div className="mb-4">
            <p className="text-sm text-[#efefef]">MENA region - Easy</p>
          </div>
          <div className="mb-4 border-b-2 border-gray-300 pb-2">
            <a className="text-xl text-[#efefef]">HealthCare Image</a>
          </div>
          <ul className="menu text-base-content min-h-full">
            {/* Sidebar content here */}
            <li>
              <a className="mb-2 text-[#efefef]">
                <AiOutlineHome className="inline mr-2 text-lg text-[#efefef]" />
                Module Selection
              </a>
            </li>
            <li className="border-b-2 border-gray-300 pb-2 text-[#efefef]">
              <a>
                {" "}
                <TbAlignRight className="inline mr-2 text-lg text-[#efefef]" />
                Module Home Page
              </a>
            </li>
            <li className="pt-5 bg-[#232323]">
              <a className="text-[#efefef]">
                {" "}
                <PiTextAlignJustifyBold className="inline mr-2 text-lg text-[#efefef]" />
                Dashboard
              </a>
            </li>
            <li className="pl-3 bg-[#232323]">
              <a className="text-[#efefef] hover:text-[#20c997]">
                {" "}
                <FaRegCircle className="inline mr-2 text-lg text-[#efefef]" />
                Statistics
              </a>
            </li>
            <li className="pl-3 bg-[#232323]">
              <a className="text-[#efefef] hover:text-[#20c997]">
                {" "}
                <FaRegCircle className="inline mr-2 text-lg text-[#efefef]" />
                Development
              </a>
            </li>
            <li className="pl-3 bg-[#232323]">
              <a className="text-[#efefef] hover:text-[#20c997]">
                {" "}
                <FaRegCircle className="inline mr-2 text-lg text-[#efefef]" />
                HR
              </a>
            </li>
            <li className="pl-3 bg-[#232323]">
              <a className="text-[#efefef] hover:text-[#20c997]">
                {" "}
                <FaRegCircle className="inline mr-2 text-lg text-[#efefef]" />
                Market Research
              </a>
            </li>
            <li className="pl-3 bg-[#232323]">
              <a className="text-[#efefef] hover:text-[#20c997]">
                {" "}
                <FaRegCircle className="inline mr-2 text-lg text-[#efefef]" />
                Marketing Budget
              </a>
            </li>
            <li className="pb-3 pl-3 bg-[#232323] ">
              <a className="text-[#ffb822] text-sm hover:text-[#20c997]">
                {" "}
                <FaSave className="inline mr-2 text-lg text-[#ffb822]" />
                Month 13 Summary
              </a>
            </li>
            <li>
              <a className="text-[#efefef]">
                {" "}
                <FaChartBar className="inline mr-2 text-lg text-[#efefef]" />
                Financial Reports
              </a>
            </li>
            <li>
              <a className="text-[#efefef]">
                {" "}
                <FaChartBar className="inline mr-2 text-lg text-[#efefef]" />
                Annual Reports
              </a>
            </li>
            <li>
              <a className="text-[#efefef]">
                {" "}
                <IoPieChartOutline className="inline mr-2 text-lg text-[#efefef]" />
                Advertisement Statement
              </a>
            </li>
            <li>
              <a className="text-[#efefef]">
                {" "}
                <MdNotificationsNone className="inline mr-2 text-lg text-[#efefef]" />
                Notifications
              </a>
            </li>
            <li className="border-b-2 border-gray-300 pb-2">
              <a className="text-[#efefef]">
                {" "}
                <HiOutlineTrophy className="inline mr-2 text-lg text-[#efefef]" />
                Evaluations
              </a>
            </li>
            <li className="pt-2">
              <a className="text-[#efefef]">
                {" "}
                <FaQuestion className="inline mr-2 text-lg text-white" />
                FAQ
              </a>
            </li>
            <li>
              <a className="text-[#efefef]">
                {" "}
                <AiFillSetting className="inline mr-2 text-lg text-white" />
                Trainers
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-80">{/* Page content here */}</div>
      </>
    );
  }

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <FaAlignJustify />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu text-base-content min-h-full w-60 p-2 bg-[#313131]">
          {/* Sidebar content here */}
          <div className="mb-4">
            <a className="text-sm text-[#efefef]" href="/">
              MindShift X eduardo
            </a>
          </div>
          <div className="mb-4">
            <p className="text-sm text-[#efefef]">MENA region - Easy</p>
          </div>
          <div className="mb-4 border-b-2 border-gray-300 pb-2">
            <a className="text-xl text-[#efefef]">HealthCare Image</a>
          </div>
          <li>
            <a className="mb-2 text-[#efefef]">
              <AiOutlineHome className="inline mr-2 text-lg text-[#efefef]" />
              Module Selection
            </a>
          </li>
          <li className="border-b-2 border-gray-300 pb-2 text-[#efefef]">
            <a>
              {" "}
              <TbAlignRight className="inline mr-2 text-lg text-[#efefef]" />
              Module Home Page
            </a>
          </li>
          <li className="pt-5 bg-[#232323]">
            <a className="text-[#efefef] hover:text-[#20c997]">
              {" "}
              <PiTextAlignJustifyBold className="inline mr-2 text-lg text-[#efefef]" />
              Dashboard
            </a>
          </li>
          <li className="pl-3 bg-[#232323]">
            <a className="text-[#efefef] hover:text-[#20c997]">
              {" "}
              <FaRegCircle className="inline mr-2 text-lg text-[#efefef]" />
              Statistics
            </a>
          </li>
          <li className="pl-3 bg-[#232323]">
            <a className="text-[#efefef] hover:text-[#20c997]">
              {" "}
              <FaRegCircle className="inline mr-2 text-lg text-[#efefef]" />
              Development
            </a>
          </li>
          <li className="pl-3 bg-[#232323]">
            <a className="text-[#efefef] hover:text-[#20c997]">
              {" "}
              <FaRegCircle className="inline mr-2 text-lg text-[#efefef]" />
              HR
            </a>
          </li>
          <li className="pl-3 bg-[#232323]">
            <a className="text-[#efefef] hover:text-[#20c997]">
              {" "}
              <FaRegCircle className="inline mr-2 text-lg text-[#efefef]" />
              Market Research
            </a>
          </li>
          <li className="pl-3 bg-[#232323]">
            <a className="text-[#efefef] hover:text-[#20c997]">
              {" "}
              <FaRegCircle className="inline mr-2 text-lg text-[#efefef]" />
              Marketing Budget
            </a>
          </li>
          <li className="pb-3 pl-3 bg-[#232323] ">
            <a className="text-[#ffb822] hover:text-[#20c997]">
              {" "}
              <FaSave className="inline mr-2 text-lg text-[#ffb822]" />
              Month 13 Summary
            </a>
          </li>
          <li className="mt-2">
            <a className="text-[#efefef] mt-2">
              {" "}
              <FaChartBar className="inline mr-2 text-lg text-[#efefef]" />
              Financial Reports
            </a>
          </li>
          <li>
            <a className="text-[#efefef]">
              {" "}
              <FaChartBar className="inline mr-2 text-lg text-[#efefef]" />
              Annual Reports
            </a>
          </li>
          <li>
            <a className="text-[#efefef]">
              {" "}
              <IoPieChartOutline className="inline mr-2 text-lg text-[#efefef]" />
              Advertisement Statement
            </a>
          </li>
          <li>
            <a className="text-[#efefef]">
              {" "}
              <MdNotificationsNone className="inline mr-2 text-lg text-[#efefef]" />
              Notifications
            </a>
          </li>
          <li className="border-b-2 border-gray-300 pb-2">
            <a className="text-[#efefef]">
              {" "}
              <HiOutlineTrophy className="inline mr-2 text-lg text-[#efefef]" />
              Evaluations
            </a>
          </li>
          <li className="pt-2">
            <a className="text-[#efefef]">
              {" "}
              <FaQuestion className="inline mr-2 text-lg text-white" />
              FAQ
            </a>
          </li>
          <li>
            <a className="text-[#efefef]">
              {" "}
              <AiFillSetting className="inline mr-2 text-lg text-white" />
              Trainers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftDrawer;
