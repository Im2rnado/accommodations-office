import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Apply from "./Apply";
import Login from './Login.js';
import AdminDashboard from './AdminDashboard.js';
import AdminStudents from './AdminStudents.js';
import AdminLearningPlan from './AdminLearningPlan.js';
import AdminApproved from './AdminApproved.js';
import AdminPending from './AdminPending.js';
import AdminApplied from './AdminApplied.js';
import AdminAnnoucements from './AdminAnnouncements.js';
import StudentSettings from './StudentSettings';
import StudentForm from './StudentForm';
import StudentPlan from './StudentPlan';
import StudentRequests from './StudentRequests';
import StudentPDF from './StudentPDF';
import AccessabilityTutorialTest from './AccessibilityTutorial';
import MissionVision from './MissionVision.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="StudentSettings" element={<StudentSettings />} />
        <Route path="StudentForm" element={<StudentForm />} />
        <Route path="StudentPlan" element={<StudentPlan />} />
        <Route path="StudentPDF" element={<StudentPDF/>}/>
        <Route path="StudentRequests" element={<StudentRequests />} />
        <Route path="apply" element={<Apply />} />
        <Route path="login" element={<Login />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="admin-students" element={<AdminStudents />} />
        <Route path="admin-learning-plan/:id" element={<AdminLearningPlan />} />
        <Route path="admin-approved" element={<AdminApproved />} />
        <Route path="admin-pending" element={<AdminPending />} />
        <Route path="admin-applied" element={<AdminApplied />} />
        <Route path="admin-announcements" element={<AdminAnnoucements />} />
        <Route path="accessability-tutorial-test" element={<AccessabilityTutorialTest />} />
        <Route path="Mission-Vision" element={<MissionVision />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;