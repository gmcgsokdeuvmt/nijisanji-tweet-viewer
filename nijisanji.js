async function main() {
    url = 'resource/nijisanji.json';
    const result = await getJSON(url);
    console.log(result);
}

window.onload = main;
