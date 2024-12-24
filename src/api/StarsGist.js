const token = process.env.REACT_APP_GITHUB_TOKEN;
const headers = token ? { Authorization: `token ${token}` } : {};

// Function to Star a Gist
export const starGist = async (gistId) => {
  try {
    const response = await fetch(`https://api.github.com/gists/GIST_ID/star`, {
      method: "POST",
      headers,
    });
    if (response.ok) {
      return true; // Gist starred successfully
    } else {
      throw new Error("Failed to star the gist.");
    }
  } catch (error) {
    console.error("Error starring gist:", error);
    return false;
  }
};
