// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Section1 from "./section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Health from "./Pages/Insurance/health";
import Group from "./Pages/Insurance/Group";
import Contractor from "./Pages/Insurance/Contractor";
import Motor from "./Pages/Insurance/motor";
import Property from "./Pages/Insurance/property";
import Pension from "./Pages/Insurance/Pension";
import Sign from "./Pages/Insurance/Sign";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </>
        } />
        <Route path="insurance/health" element={<Health />} />
        <Route path="insurance/group" element={<Group />} />
        <Route path="insurance/Contractor" element={<Contractor />} />
        <Route path="insurance/motor" element={<Motor />} />
        <Route path="insurance/property" element={<Property />} />
        <Route path="insurance/Pension&Annuities" element={<Pension />} />
        <Route path="nalico/nafico/log-in/sign-up" element={<Sign />} />
        <Route path="*" element={<h1 style={{ color: "white" }}>Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
