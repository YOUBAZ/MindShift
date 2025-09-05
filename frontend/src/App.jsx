import { BrowserRouter, Routes, Route } from "react-router-dom";
import Statistics from "./pages/Statistics";
import MarketingBudget from "./pages/MarketingBudget";
function App() {
  return (
    <div className="bg-[#ebedf2] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Statistics />} />
          <Route path="/marketing-budget" element={<MarketingBudget />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
