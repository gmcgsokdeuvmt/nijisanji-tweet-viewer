function template_timeline(screen_name){
    return '\
        <a class="twitter-timeline" href="https://twitter.com/'+screen_name+'" data-width="300" data-height="300"></a>\
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\
';
} 

function get_template_timelines(screen_name_list){
    var fragment = document.createDocumentFragment();
    for(let screen_name of screen_name_list){
        var newLi = document.createElement('li');
        newLi.className = 'wrapper';
        newLi.innerHTML = template_timeline(screen_name); //call the function here..
        fragment.appendChild(newLi);
    }
    return fragment;
}