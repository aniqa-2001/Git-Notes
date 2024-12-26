// const token = process.env.REACT_APP_GITHUB_TOKEN;
// const headers = token ? { Authorization: `token ${token}` } : {};

// // Function to Star a Gist
// export const starGist = async (gistId) => {
//   try {
//     const response = await fetch(`https://api.github.com/${gistId}/star`, {
//       method: "POST",
//       headers,
//     });
//     if (response.ok) {
//       return true; // Gist starred successfully
//     } else {
//       throw new Error("Failed to star the gist.");
//     }
//   } catch (error) {
//     console.error("Error starring gist:", error);
//     return false;
//   }
// };

const gistId = "3ae45c78a45550eafa0d8eca25dedc9a"; // Your Gist ID

const token = "ghp_qrUWwAuNNwZ2jJBAaCbccRFiOSLNJF2Imlj"; // Replace with your GitHub token

// Function to star the gist
const starGist = async () => {
  const response = await fetch(`https://api.github.com/gists/${gistId}/star`, {
    method: "POST",
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (response.ok) {
    console.log("Successfully starred the Gist.");
  } else {
    console.error("Failed to star the Gist.", response.statusText);
  }
};
starGist();
