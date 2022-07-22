export const getArticles = async () => {
    const response = await fetch("/articles/", {
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("response", response);

    const jsonResponse = await response.json();
    console.log("Articles", jsonResponse);
    return jsonResponse;
};
