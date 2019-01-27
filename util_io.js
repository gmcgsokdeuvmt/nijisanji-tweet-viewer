async function getJSON(url) {
    fetch(url).then((response) => {
        var text = response.text();
        console.log(text);
        var data = JSON.parse(text);
        console.log(data);
        return data;
      }).catch(() => {
        console.log("error caught!");
      });
}
