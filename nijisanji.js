async function main() {
    url = 'resource/nijisanji.json';
    const result = await getJSON(url);

    
    var screen_name_list = [];
    for (let name of result['names']) {
        screen_name_list.push(result['screen_names'][name]);
    }
    const fragment = get_template_timelines(screen_name_list);
    document.getElementById('container').appendChild(fragment);
}

main();
