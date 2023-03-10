import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/Home/HomeScreen";
import HistoryScreen from "./screens/History/HistoryScreen";
import StepScreen from "./screens/Step/StepScreen";
import MerchantScreen from "./screens/Merchant/MerchantScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/history/:id" element={<HistoryScreen />} />
            <Route path="/step/:stepId" element={<StepScreen />} />
            <Route path="/merchant/:id" element={<MerchantScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
