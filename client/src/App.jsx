import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import ProjectDetails from "./pages/ProjectDetails";
import TaskDetails from "./pages/TaskDetails";
import { SignUp } from "@clerk/react";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="team" element={<Team />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projectsDetail" element={<ProjectDetails />} />
          <Route path="taskDetails" element={<TaskDetails />} />
        </Route>
        <Route
          path="/sign-up"
          element={
            <div className="flex items-center justify-center h-screen bg-white dark:bg-zinc-950">
              <SignUp routing="path" path="/sign-up" signInUrl="/" />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
