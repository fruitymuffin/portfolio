function updateContent()
{
    var hash = window.location.hash.substring(1) + ".html";
    $( "#content" ).load(hash);
}

function defaultContent()
{
    window.location.hash = "#about";
    updateContent();
}