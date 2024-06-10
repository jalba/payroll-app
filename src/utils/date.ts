export const formatDate = (dateString: string | undefined) => {
  if (!dateString) {
    return "";
  }
  const d = new Date(dateString);
  // throw if date string provided is not valid
  if (isNaN(d.getTime())) {
    throw new Error("Date string provided is not valid");
  }
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  const year = d.getFullYear().toString();

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  return [day, month, year].join("-");
};

export const formatPeriod = (period: string | undefined) => {
  return period
    ?.split(" - ")
    .map((d) => formatDate(d))
    .join(" - ");
};
