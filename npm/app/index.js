import { countNumbers, countSpecialChars } from "@common/validator";
import { input, closeReadline } from "@common/read-input";

const main = async () => {
  console.info("🔒 Password Validator 🔒");

  try {
    const pass = await input("New password: ");

    const pass2 = await input("Retype new password: ");

    if (pass !== pass2) {
      throw new Error("❌ Passwords do not match.");
    }

    if (pass.length < 7) {
      throw new Error("❌ Password must be at least 7 characters long.");
    }

    const spChars = countSpecialChars(pass);

    if (spChars < 2) {
      throw new Error(
        "❌ Password must contain at least 2 special characters."
      );
    }

    const numbers = countNumbers(pass);

    if (numbers < 2) {
      throw new Error("❌ Password must contain at least 2 numbers.");
    }

    console.info("✅ Password is valid.");
  } catch (error) {
    console.error(error.message);
  } finally {
    closeReadline();
  }
};

main();
