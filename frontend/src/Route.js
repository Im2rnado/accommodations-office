import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from "./App.js"
import Dashboard from "./Dashboard";
import Apply from "./Apply";
import AdminDashboard from './AdminDashboard.js';
import AdminStudents from './AdminStudents.js';
import AdminLearningPlan from './AdminLearningPlan.js';
import AdminApproved from './AdminApproved.js';
import AdminPending from './AdminPending.js';
import AdminApplied from './AdminApplied.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="apply" element={<Apply />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="admin-students" element={<AdminStudents />} />
        <Route path="admin-learning-plan/:id" element={<AdminLearningPlan />} />
        <Route path="admin-approved" element={<AdminApproved />} />
        <Route path="admin-pending" element={<AdminPending />} />
        <Route path="admin-applied" element={<AdminApplied />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;