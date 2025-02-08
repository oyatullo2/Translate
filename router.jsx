import { Routes, Route } from "react-router-dom";
import { Login } from "@/Pages/Login";
import { MainProvider } from "@/mainProvider";
import { Dashboard } from "@/Pages/Dashboard";
import { Layout } from "@/Layout";
import { SubSections } from "@/Pages/Subsections";
import { Words } from "@/Pages/Words";
import { AddAdmin } from "@/Pages/AddAmin";
import { NotFound } from "@/Pages/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<MainProvider />}>
        <Route element={<Layout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="subsections" element={<SubSections />} />
          <Route path="words" element={<Words />} />
          <Route path="addAdmin" element={<AddAdmin />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
