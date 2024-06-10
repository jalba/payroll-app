import { useState, useEffect } from "react";

import { EmployeeRecord, getPayroll } from "api";

export const usePayroll = (): [EmployeeRecord[], boolean, Error | null] => {
  const [payroll, setPayroll] = useState([] as EmployeeRecord[]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getPayroll()
      .then((data: { payroll: EmployeeRecord[] }) => {
        setPayroll(data.payroll);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return [payroll, isLoading, error];
};
