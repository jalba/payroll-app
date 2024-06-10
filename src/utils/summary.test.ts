import { EmployeeRecord } from "api";
import { calculateTotals } from "./summary";

const generatePayroll = (
  length: number,
  baseUnit: number
): EmployeeRecord[] => {
  return Array.from({ length: 3 }, (_, idx) => {
    return {
      "Payroll Period": "2022-01-01 - 2022-01-31",
      "Pay Date": "2022-01-28",
      "Employee ID": `employee${idx}`,
      "Employee Name": `test ${idx}`,
      Departments: "test",
      currency: "GBP",
      "Hours Worked": 160,
      "Base Salary": baseUnit,
      Bonus: baseUnit,
      "Student Loan Repayment": baseUnit,
      "Income Tax": baseUnit,
      "Employee Pension": baseUnit,
      "Employer Pension": baseUnit,
      "Net Pay": baseUnit,
    };
  });
};

describe("calculateTotals", () => {
  it("should calculate the sum of all salaries, bonus, etc in the payroll", () => {
    const length = 3;
    const baseUnit = 100;
    const payroll = generatePayroll(length, baseUnit);
    const totals = calculateTotals(payroll);
    expect(totals.baseSalary).toEqual(baseUnit * length);
    expect(totals.bonus).toEqual(baseUnit * length);
    expect(totals.currency).toEqual("GBP");
    expect(totals.employerPension).toEqual(baseUnit * length);
    expect(totals.total).toEqual(baseUnit * length * 3);
  });

  it("should return an object with zero values if the array is empty", () => {
    const totals = calculateTotals([]);
    const expectedResults = [0, ""];
    Object.values(totals).forEach((value) => {
      expect(expectedResults).toContain(value);
    });
  });
});
