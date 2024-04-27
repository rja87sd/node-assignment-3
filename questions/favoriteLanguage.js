// Credit to ChatGPT for assistance with debugging and code comments.
// Define a question object for the user's favorite programming language
const languageQuestion = {
  // Specify the type of question (list) for the user to choose from
  type: "list",
  // Assign a name to identify the question's response in the survey results
  name: "favoriteLanguage",
  // Set the message displayed to the user when prompted for their favorite language
  message: "What is your favorite programming language?",
  // Provide a list of choices for the user to select from
  choices: ["JavaScript", "Python", "Java", "C++", "Ruby", "Other"],
};

// Export the question object to make it accessible to other parts of the application
export default languageQuestion;
