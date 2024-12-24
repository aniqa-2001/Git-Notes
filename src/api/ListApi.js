const token = process.env.REACT_APP_GITHUB_TOKEN;

export const getData = async () => {
  const headers = token ? { Authorization: `token ${token}` } : {};

  try {
    // Step 1: Fetch all gists
    const response = await fetch(" https://api.github.com/gists/public", {
      headers,
    });
    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }
    const gists = await response.json();

    // Step 2: For each gist, fetch the number of stars and forks
    const gistsWithStats = await Promise.all(
      gists.map(async (gist) => {
        // Fetch stars count
        const starsResponse = await fetch(
          `https://api.github.com/gists/starred`,
          { headers }
        );
        const stars = starsResponse.ok ? await starsResponse.json() : [];

        // Fetch forks count
        const forksResponse = await fetch(
          ` https://api.github.com/gists/GIST_ID/forks`,
          { headers }
        );
        const forks = forksResponse.ok ? await forksResponse.json() : [];

        // Add star and fork counts to the gist data
        return {
          ...gist,
          starsCount: stars.length,
          forksCount: forks.length,
        };
      })
    );

    return gistsWithStats; // Return gists with added star and fork counts
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return [];
  }
};
