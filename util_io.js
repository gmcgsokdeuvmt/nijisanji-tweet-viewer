async function getJSON(url) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {
            var text = request.responseText;
            var data = JSON.parse(text);
            console.log(data);
            return data;
        }
    }
    request.open("GET",url, true);
    request.send(null);
}
