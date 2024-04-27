// Credit to ChatGPT for assistance with debugging and code comments.
import inquirer from "inquirer";
import languageQuestion from "./questions/favoriteLanguage.js";
import frameworkQuestion from "./questions/preferredFramework.js";

async function main() {
  try {
    // Prompt the user with questions
    const answers = await inquirer.prompt([
      languageQuestion,
      frameworkQuestion,
    ]);

    // Extract answers
    const { favoriteLanguage, preferredFramework } = answers;

    // Log summary message
    console.log(`Thank you for completing the survey!\n`);
    console.log(`Your favorite programming language is: ${favoriteLanguage}`);
    console.log(`Your preferred framework is: ${preferredFramework}`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the main function to start the survey
main();
