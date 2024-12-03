import { createInterface } from "node:readline";
import process from "node:process";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompts the user with a message and returns their input.
 *
 * @param {string} msg - The message to display to the user.
 * @returns {Promise<string>} A promise that resolves with the user's input.
 */
export const input = (msg = "") =>
  new Promise((resolve) => {
    readline.question(msg, resolve);
  });

/**
 * Closes the readline interface.
 */
export const closeReadline = () => {
  readline.close();
};
