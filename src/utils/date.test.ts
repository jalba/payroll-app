import { formatDate, formatPeriod } from "./date";

describe("formatDate", () => {
  it("should return the date in the correct format", () => {
    const input = "2022-02-01";
    const result = formatDate(input);
    const flippedDate = input.split("-").reverse().join("-");
    expect(result).toEqual(flippedDate);
  });

  it("should return an empty string when the date is undefined", () => {
    const result = formatDate(undefined);
    expect(result).toEqual("");
  });

  it("should throw an error if the date string provided is invalid", () => {
    expect(() => {
      formatDate("not-date");
    }).toThrowError();
  });
});

describe("formatPeriod", () => {
  it("shoud return a string formated dd-mm-yyyy - dd-mm-yyyy", () => {
    const input = "2022-02-01 - 2022-03-01";
    const expected = "01-02-2022 - 01-03-2022";
    const result = formatPeriod(input);

    expect(result).toEqual(expected);
  });

  it("shoud return a result even if only one date is provided", () => {
    const input1 = "2022-02-01";
    const input2 = "2022-02-01 - ";
    const input3 = " - 2022-02-01";
    const expected = "01-02-2022";
    const result1 = formatPeriod(input1);
    const result2 = formatPeriod(input2);
    const result3 = formatPeriod(input3);

    [result1, result2, result3].forEach((result) => {
      expect(result).toContain(expected);
    });
  });
});
