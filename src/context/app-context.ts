import { EmployeeRecord } from "api";
import { createContext } from "react";

export const AppContext = createContext({ payroll: [] as EmployeeRecord[] });
