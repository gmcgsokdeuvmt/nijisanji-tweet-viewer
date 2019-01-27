var myJSON = new XMLHttpRequest();
myJSON.onreadystatechange = function() {
    if ((myJSON.readyState === 4) && (myJSON.status === 200)) {
        var data = JSON.parse(myJSON.responseText);
        console.log(data);
        alert(data.param);
    }
}
myJSON.open("GET","resource/nijisanji.json", true);
myJSON.send(null);
