import { DateTime } from "luxon";
import getInterval from "./getInterval";

it("Shows one day when there's one day remaining", () => {
  const result = getInterval(
    DateTime.fromFormat("15/11/2019 10:20", "dd/MM/yyyy HH:mm")
  );
  expect(result.months).toBe(0);
  expect(Math.round(result.days)).toBe(1);
});

it("Shows zero days or months on the day", () => {
  const result = getInterval(
    DateTime.fromFormat("16/11/2019 10:20", "dd/MM/yyyy HH:mm")
  );
  expect(result.months).toBe(0);
  expect(Math.round(result.days)).toBe(0);
});

it("Handles negative days?", () => {
  const result = getInterval(
    DateTime.fromFormat("17/11/2019 10:20", "dd/MM/yyyy HH:mm")
  );
  expect(result.months).toBe(0);
  expect(Math.round(result.days)).toBe(-1);
});
