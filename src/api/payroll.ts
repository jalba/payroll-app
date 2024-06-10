import { EmployeeRecord } from "./types";

const payroll: EmployeeRecord[] = [
  {
    "Payroll Period": "2021-08-01 - 2021-08-31",
    "Pay Date": "2021-08-28",
    "Employee ID": "s2",
    "Employee Name": "Ande Smith",
    Departments: "Marketing",
    currency: "GBP",
    "Hours Worked": 168,
    "Base Salary": 3000,
    Bonus: 0,
    "Student Loan Repayment": 0,
    "Income Tax": 391.4,
    "Employee Pension": 500,
    "Employer Pension": 600,
    "Net Pay": 2108.6,
  },
  {
    "Payroll Period": "2021-08-01 - 2021-08-31",
    "Pay Date": "2021-08-28",
    "Employee ID": "s5",
    "Employee Name": "Jane Doe",
    Departments: "Engineering",
    currency: "GBP",
    "Hours Worked": 168,
    "Base Salary": 3000,
    Bonus: 1070,
    "Student Loan Repayment": 0,
    "Income Tax": 958.08,
    "Employee Pension": 500,
    "Employer Pension": 600,
    "Net Pay": 2611.92,
  },
  {
    "Payroll Period": "2021-08-01 - 2021-08-31",
    "Pay Date": "2021-08-28",
    "Employee ID": "s1",
    "Employee Name": "Cathrine Bluth",
    Departments: "Sales",
    currency: "GBP",
    "Hours Worked": 188,
    "Base Salary": 4000,
    Bonus: 0,
    "Student Loan Repayment": 218,
    "Income Tax": 591.4,
    "Employee Pension": 500,
    "Employer Pension": 600,
    "Net Pay": 2690.6,
  },
  {
    "Payroll Period": "2021-08-01 - 2021-08-31",
    "Pay Date": "2021-08-28",
    "Employee ID": "s0",
    "Employee Name": "Joe Mandelin",
    Departments: "Marketing",
    currency: "GBP",
    "Hours Worked": 168,
    "Base Salary": 3000,
    Bonus: 972,
    "Student Loan Repayment": 0,
    "Income Tax": 957.8,
    "Employee Pension": 500,
    "Employer Pension": 600,
    "Net Pay": 2514.2,
  },
];

export const getPayroll = async (): Promise<{ payroll: EmployeeRecord[] }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ payroll });
    }, 600);
  });
};
