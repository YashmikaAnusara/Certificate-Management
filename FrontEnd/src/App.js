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
import RequestForm from "./Pages/Requsetpage";
import SelectTemplatale from "./Pages/SelectTemplate";
import CertificateRejectMessage from "./Pages/CertificateRejectMessage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route 
            path="/dashboard" 
            element={<AdminHome />} 
          />
          <Route 
            path="/recent/request" 
            element={<RecentRequest />} 
          />
          <Route 
            path="/pending/request" 
            element={<PendingRequest />} 
          />
          <Route 
            path="/issue/request" 
            element={<IssuedCertificate />} 
          />
          <Route 
            path="/reject/request" 
            element={<RejectedRequest />} 
          />
          <Route 
            path="/requests/details" 
            element={<RequestDetails />} 
          />
          <Route
            path="/issued/certificate/details"
            element={<IssuedCertificateDetails />}
          />
          <Route
            path="/rejected/certificate/details"
            element={<RejectCertificateDetails />}
          />
          <Route
            path="/certificate/templates"
            element={<CertificateTemplates />}
          />
          <Route
            path="/certificate/details/confirm/:id"
            element={<Certificateview />}
          />
          <Route 
            path="/requestform" 
            element={<RequestForm />} 
          />
          <Route 
            path="/select/certificate" 
            element={<SelectTemplatale />} 
          />
          <Route 
            path="/request/certificate/reject" 
            element={<CertificateRejectMessage />} 
          />

        </Routes>
      </Router>
    </div>
  );
}
export default App;
