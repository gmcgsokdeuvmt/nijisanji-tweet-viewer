async function getJSON(url) {
    fetch(url).then((response) => {
        var text = response.text();
        var data = JSON.parse(text);
        return data;
      }).catch(() => {
        console.log("error caught!");
      });
}
