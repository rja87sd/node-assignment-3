// Credit to ChatGPT for assistance with debugging and code comments.
// Define a question object for the user's preferred framework
const frameworkQuestion = {
  // Specify the type of question (list) for the user to choose from
  type: "list",
  // Assign a name to identify the question's response in the survey results
  name: "preferredFramework",
  // Set the message displayed to the user when prompted for their preferred framework
  message: "What is your preferred framework?",
  // Provide a list of choices for the user to select from
  choices: ["React", "Vue", "Angular", "Svelte"],
};

// Export the question object to make it accessible to other parts of the application
export default frameworkQuestion;
