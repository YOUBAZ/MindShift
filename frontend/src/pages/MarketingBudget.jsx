import { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import FullProgressMonth from "../components/common/FullProgressMonth";
import Alert from "../components/common/Alert";
import ForwardButton from "../components/common/ForwardButton";
import BackwardButton from "../components/common/BackwardButton";
import { FiLayers } from "react-icons/fi";
import AlertWithoutSpans from "../components/common/AlertWithoutSpans";
const MarketingBudget = () => {
  const [isLarge, setIsLarge] = useState(false);
  const [budget, setBudget] = useState("");
  const [reach, setReach] = useState(0);

  useEffect(() => {
    const checkSize = () => setIsLarge(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const handleBudgetChange = (e) => {
    const value = e.target.value;
    setBudget(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setReach(((numValue * 143) / 1000000).toFixed(2));
    } else {
      setReach(0);
    }
  };

  return (
    <div className={`${isLarge ? "ml-60" : ""}`}>
      <Navbar />
      <div className="py-5 flex flex-col justify-center items-center">
        <FullProgressMonth />
        <Alert />
        <div className="flex justify-between align-baseline min-w-11/12 pt-4">
          <BackwardButton decision={"Market Research"} />
          <ForwardButton decision={"Month Summary"} />
        </div>
        <div className="pt-10 flex justify-center">
          <div className="bg-white shadow-md rounded-md max-w-11/12">
            <div className="flex flex-row flex-wrap items-right justify-start align-baseline border-b-2 border-gray-200 p-5">
              <h3 className="text-lg text-[#575962]">
                <FiLayers className="inline text-lg mr-3" /> Social Media
                Marketing Budget
              </h3>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <div>
                <AlertWithoutSpans
                  content={
                    "At this stage, we will make decisions about the direct advertisement of the product. You can modify these decisions every month.This is the content of the Alert"
                  }
                />
              </div>
              <div>
                <p className="font-bold mb-2">Full campaign budget*</p>
                <label className="input border-dotted border-2 border-green-600 focus-within:outline-none">
                  <input
                    type="text"
                    placeholder="Marketing Budget"
                    onChange={handleBudgetChange}
                    value={budget}
                    className="focus:outline-none"
                  />
                  <span className="label">$ / month</span>
                </label>
                <p className="text-[2px]">Latest budget: $30 000</p>
                <p className="text-[2px]">
                  You can reach maximum {reach} million people with this budget.
                </p>
              </div>
              <div>
                {" "}
                <AlertWithoutSpans
                  content={"Campaign budget cannot exceed your cash amount."}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingBudget;
