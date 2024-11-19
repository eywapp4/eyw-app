"use server";

import bcrypt from "bcrypt";

const passLookUp = new Map([
  ["week-1", "$2b$10$MVIonNE8Wc5dUckYk3Ju0.nxhklKee.0FgPQbEJ3YlVs8leu2NEfm"],
  ["week-2", "$2b$10$Hqq1G1lAXZbiXQBsgfGaue5G9p.YMgdDxtTiY3Q1OXevcDURqEeia"],
  ["week-3", "$2b$10$zuZwNuIRsYTzQPmlXEL/Pud9lrlqpnfjVlMVnJ6ZlMSXbBcMG6qtS"],
  ["week-4", "$2b$10$UJ/ss708Xb8lppO/q5SfAuy5QZj6v6STgnagoJ70mHFk8Zc4hptiG"],
  ["week-5", "$2b$10$/qxX62a6xbf8u5k/fPk1munz4Ktw5EdwJj3aj938X0d7BvLQ9gVry"],
  ["week-6", "$2b$10$BtAXti7kfQWqANrRIhIZPO8auTOXphdqgxkwN2QXbnfomJY8N1aB6"],
]);

export async function abahAuth(week, state, formData) {
  const { pin } = Object.fromEntries(formData.entries());

  try {
    const psswdMatch = await bcrypt.compare(pin, passLookUp.get(week));
    if (psswdMatch) {
      return {
        isError: false,
        response: "Success!",
      };
    } else {
      return {
        isError: true,
        response: "Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      isError: true,
      response: "Please try again",
    };
  }
}
