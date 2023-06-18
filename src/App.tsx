import { Route, Routes } from "react-router-dom";

import HomePage from "./app/pages/home-page";
import PrivacyPolicy from "./app/pages/privacy-policy";
import TermsConditions from "./app/pages/terms-and-conditions";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="privacy-policy/" element={<PrivacyPolicy />} />
      <Route path="terms-and-conditions/" element={<TermsConditions />} />
    </Routes>
  );
};

export default App;
