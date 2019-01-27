async function getJSON(url) {
    fetch(url).then((response) => response.text())
    .then(text => {
        var data = JSON.parse(text);
        return data;
      }).catch(() => {
        console.log("error caught!");
      });
}
