const token = process.env.REACT_APP_GITHUB_TOKEN;
export const getData = async () => {
  const headers = token ? { Authorization: `token ${token}` } : {};

  try {
    const response = await fetch("https://api.github.com/gists", { headers });
    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return [];
  }
};
