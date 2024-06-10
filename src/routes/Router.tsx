import { Routes, Route } from "react-router-dom";

import { PayrollList } from "pages";
import { Routes as RoutesEnum } from "./types";
import { NotFound } from "pages/not-found";
import { PayrollSummary } from "pages/payroll-summary";
import { EmployeeSummary } from "pages/employee-summary";

export const Router = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.PayrollList} element={<PayrollList />} />
      <Route path={RoutesEnum.PayrollSummary} element={<PayrollSummary />} />
      <Route path={RoutesEnum.EmployeeSummary} element={<EmployeeSummary />} />
      <Route path={RoutesEnum.NotFound} element={<NotFound />} />
    </Routes>
  );
};
