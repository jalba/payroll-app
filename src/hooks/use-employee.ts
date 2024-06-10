import { useContext } from "react";
import { useParams } from "react-router-dom";

import { AppContext } from "context";

export const useEmployee = () => {
  const { employeeId } = useParams();
  const { payroll } = useContext(AppContext);

  return payroll.find((employee) => employee["Employee ID"] === employeeId);
};
