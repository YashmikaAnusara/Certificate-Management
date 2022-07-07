import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHome from "./Pages/AdminHome";
import RecentRequest from "./Pages/RecentRequest";
import PendingRequest from "./Pages/PendingRequest";
import IssuedCertificate from "./Pages/IssuedCertificate";
import RejectedRequest from "./Pages/RejectedRequest";
import RequestDetails from "./Components/RequestDetails";
import IssuedCertificateDetails from "./Components/IssusedCertificateDetails";
import RejectCertificateDetails from "./Components/RejectCertificateDetails";
import CertificateTemplates from "./Pages/CertificateTemplates";
import Certificateview from "./Pages/Certificateview";
import SelectTemplatale from "./Pages/SelectTemplate";
import CertificateRejectMessage from "./Pages/CertificateRejectMessage";
import RequestForm from "./Pages/Requsetform";
import LoginPage from "./Pages/Loginpage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<AdminHome />} />
          <Route path="/recent/request" element={<RecentRequest />} />
          <Route path="/pending/request" element={<PendingRequest />} />
          <Route path="/issue/request" element={<IssuedCertificate />} />
          <Route path="/reject/request" element={<RejectedRequest />} />
          <Route
            path="/requests/detail/:id/:nic"
            element={<RequestDetails />}
          />
          <Route
            path="/issue/request/:id/:nic"
            element={<IssuedCertificateDetails />}
          />
          <Route
            path="/reject/request/:id/:nic"
            element={<RejectCertificateDetails />}
          />
          <Route
            path="/certificate/templates"
            element={<CertificateTemplates />}
          />
          <Route
            path="/requests/detail/:id/:nic/certificate/:tempid"
            element={<Certificateview />}
          />
          <Route 
            path="/requestform" 
            element={<RequestForm />} 
          />
          <Route
            path="/requests/detail/:id/:nic/certificate"
            element={<SelectTemplatale />}
          />
          <Route
            path="/requests/detail/:id/:nic/reject"
            element={<CertificateRejectMessage />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
