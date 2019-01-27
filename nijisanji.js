var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if ((myJSON.readyState === 4) && (myJSON.status === 200)) {
        var text = myJSON.responseText;
        var data = JSON.parse(text);
        console.log(data);
    }
}
request.open("GET","resource/nijisanji.json", true);
request.send(null);
