import PieCharts from "./components/charts/PieCharts.jsx";
import PieChartWithPaddingAngle from "./components/charts/PieChartWithPaddingAngle.jsx";

function App() {
  return (
    <div className="bg-[#ebedf2] min-h-screen flex justify-center items-center p-10">
      <div className="bg-white shadow-md rounded-md mt-10 min-w-11/12">
        <div className="flex flex-row flex-wrap items-right justify-start align-baseline border-b-2 border-gray-200 p-5">
          <h3 className="text-xl text-[#575962] ml-10 mt-5">
            Main operational indicators
          </h3>
          <p className="text-[#575962] ml-10 mt-5">
            Closing figures for the previous period
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-around gap-10 p-10">
          {/* <PieCharts /> */}
          <div>
            <PieChartWithPaddingAngle value1={0} value2={100} />
            <p className="text-center text-[#575962]">
              Answered Customer Questions
            </p>
            <p className="text-center text-3xl text-[#28a745] font-bold">
              100%
            </p>
          </div>
          <div>
            <PieChartWithPaddingAngle value1={56} value2={100} />
            <p className="text-center text-[#575962]">
              Customer service utilization (%)
            </p>
            <p className="text-center text-3xl text-[#28a745] font-bold">56%</p>
          </div>
          <div>
            <PieChartWithPaddingAngle value1={100} value2={5} />
            <p className="text-center text-[#575962]">Unsubscribed customers</p>
            <p className="text-center text-3xl text-[#28a745] font-bold">5%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
