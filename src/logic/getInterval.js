import { DateTime } from "luxon";

export const HALF_MARATHON_DATE = DateTime.fromFormat(
  "16/11/2019 8:00",
  "dd/MM/yyyy H:mm"
);

export default fromDate =>
  HALF_MARATHON_DATE.diff(fromDate || DateTime.local(), [
    "weeks",
    "days",
    "hours"
  ]);
