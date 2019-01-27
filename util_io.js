async function getJSON(url) {
    fetch(url).then((response) => response.text())
    .then(text => {
        console.log(text);
        var data = JSON.parse(text);
        console.log(data);
        return data;
      }).catch(() => {
        console.log("error caught!");
      });
}
