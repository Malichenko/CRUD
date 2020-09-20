// Config
import { root } from "./config";

export const api = Object.freeze({
  users: {
    getProfile: (seed) => {
      const encode = encodeURIComponent(seed);
      return fetch(`${root}?seed=${encode}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    getContacts: (num) => {
      return fetch(`${root}?seed=test&results=${num}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
});
