const token = process.env.REACT_APP_GITHUB_TOKEN;
const headers = token ? { Authorization: `token ${token}` } : {};
// Function to Fork a Gist
export const forkGist = async (gistId) => {
  try {
    const response = await fetch(
      `  https://api.github.com/gists/GIST_ID/forks`,
      {
        method: "POST",
        headers,
      }
    );
    if (response.ok) {
      return true; // Gist forked successfully
    } else {
      throw new Error("Failed to fork the gist.");
    }
  } catch (error) {
    console.error("Error forking gist:", error);
    return false;
  }
};
