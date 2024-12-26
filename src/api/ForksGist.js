// const token = process.env.REACT_APP_GITHUB_TOKEN;
// const headers = token ? { Authorization: `token ${token}` } : {};
// // Function to Fork a Gist
// export const forkGist = async (gistId) => {
//   try {
//     const response = await fetch(
//       `https://api.github.com/gists/${gistId}/forks`,
//       {
//         method: "POST",
//         headers,
//       }
//     );
//     if (response.ok) {
//       return true; // Gist forked successfully
//     } else {
//       throw new Error("Failed to fork the gist.");
//     }
//   } catch (error) {
//     console.error("Error forking gist:", error);
//     return false;
//   }
// };

const gistId = "3ae45c78a45550eafa0d8eca25dedc9a"; // Your Gist ID

const token = "ghp_qrUWwAuNNwZ2jJBAaCbccRFiOSLNJF2Imlj"; // Replace with your GitHub token
// Function to fork the gist
const forkGist = async () => {
  const response = await fetch(`https://api.github.com/gists/${gistId}/forks`, {
    method: "POST",
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (response.ok) {
    console.log("Successfully forked the Gist.");
  } else {
    console.error("Failed to fork the Gist.", response.statusText);
  }
};
forkGist();
