async function getJSON(url) {
    fetch(url).then((response) => {
        console.log(response);
      }).catch(() => {
        console.log("error caught!");
      });
}
