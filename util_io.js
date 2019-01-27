async function getJSON(url) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if ((myJSON.readyState === 4) && (myJSON.status === 200)) {
            var text = request.responseText;
            var data = JSON.parse(text);
            return data;
        }
    }
    request.open("GET",url, true);
    request.send(null);
}
