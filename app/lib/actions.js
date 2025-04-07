"use server";

import { getAbahPin, getMoversPin } from "./data";

export async function abahAuth(week, state, formData) {
  const { pin } = Object.fromEntries(formData.entries());

  const weekPin = await getAbahPin(week);

  try {
    if (pin === weekPin.pin) {
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

export async function moversAuth(week, state, formData) {
  const { pin } = Object.fromEntries(formData.entries());

  const weekPin = await getMoversPin(week);

  try {
    if (pin === weekPin.pin) {
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
