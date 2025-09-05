const Alert = () => {
  return (
    <div className="max-w-11/12 pt-5">
      <div role="alert" className="alert alert-success bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current bg-green-600"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-[#2ecd71]">
          You have reached the end of the seed period! Look through the
          company's results, and visit the articles and videos of the{" "}
          <span className="font-bold">Knowledge base</span> menu to deepen your
          knowledge. You can also start the simulation again by clicking the{" "}
          <span className="font-bold">Module homepage</span> menu and the{" "}
          <span className="font-bold">New simulation</span>
          button.
        </span>
      </div>
    </div>
  );
};

export default Alert;
