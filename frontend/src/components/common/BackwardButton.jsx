import { FaArrowCircleLeft } from "react-icons/fa";

const BackwardButton = ({ decision }) => {
  return (
    <button
      className=" text-white px-4 py-2 bg-black hover:bg-gray-800 transition-colors duration-300 rounded-lg flex items-center gap-3 shadow-md border-none cursor-pointer"
      aria-label="Go to previous decision"
      title="Go to previous decision"
    >
      <FaArrowCircleLeft className="text-[12px] text-white flex-shrink-0" />
      <span className="whitespace-nowrap text-[12px]">
        Previous Decision: {decision}
      </span>
    </button>
  );
};

export default BackwardButton;
