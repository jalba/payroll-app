import { EmployeeRecord } from "api";

export const calculateTotals = (payroll: EmployeeRecord[]) => {
  const totals = {
    bonus: 0,
    employerPension: 0,
    total: 0,
    baseSalary: 0,
    currency: "",
    period: "",
  };

  return payroll.reduce((currentTotals, record) => {
    const bonus = record["Bonus"] || 0;
    const employerPension = record["Employer Pension"] || 0;
    const baseSalary = record["Base Salary"] || 0;
    currentTotals.currency = record["currency"];
    currentTotals.period = record["Payroll Period"] || "";
    currentTotals.bonus = currentTotals.bonus + bonus;
    currentTotals.employerPension =
      currentTotals.employerPension + employerPension;
    currentTotals.baseSalary = currentTotals.baseSalary + baseSalary;
    currentTotals.total =
      currentTotals.total + bonus + employerPension + baseSalary;
    return currentTotals;
  }, totals);
};

export const formatAmmount = (currency: string, ammount: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency }).format(
    ammount
  );
