import { Routes } from "routes";
import { matchToRoute } from "./url";

describe("matchToRoute", () => {
  it("should match to the payroll summary route", () => {
    const result = matchToRoute("/summary");
    expect(result).toEqual(Routes.PayrollSummary);
  });

  it("should match to the payroll list route", () => {
    const result = matchToRoute("/");
    expect(result).toEqual(Routes.PayrollList);
  });

  it("should match to the employee summary route", () => {
    const result = matchToRoute("/employee/testid");
    expect(result).toEqual(Routes.EmployeeSummary);
  });

  it("should match any other route to the Not Found route", () => {
    const result1 = matchToRoute("/somewhere-else");
    const result2 = matchToRoute("/non-existing-route");
    const result3 = matchToRoute("/employee/nested/route");
    const resultArr = [result1, result2, result3];
    const expectedArr = Array.from({ length: 3 }, () => Routes.NotFound);
    expect(resultArr).toMatchObject(expectedArr);
  });
});
