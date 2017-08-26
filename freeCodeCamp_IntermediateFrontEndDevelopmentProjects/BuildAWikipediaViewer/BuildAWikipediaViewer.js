/*
useful links to use for project.
-  a URL you can use to get a random Wikipedia article: https://en.wikipedia.org/wiki/Special:Random
-  Here's an entry on using Wikipedia's API: https://www.mediawiki.org/wiki/API:Main_page
-  Use this link to experiment with Wikipedia's API: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm
- help video: https://youtu.be/_7zRKUz-G3s?t=464
*/

 

$(document).ready(function(){
    var getSearchTerm = document.getElementById("search-button"); 
   
    $("#wiki-search").keydown(function (event) {
        if(event.keyCode == 13) {
            $(getSearchTerm).click();
            return false;
        }
    });

    getSearchTerm.addEventListener("click", findWikiPage, false);

    function findWikiPage() {
        var searchTerm = "doppler";//document.getElementById("wiki-search").value;
        var printSearchResult = document.getElementById("wiki-section");
        var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm +  "&callback=?"; //this works

        $.getJSON( wikiUrl, function(data) {
            var title = data[0];
            var topic = data[1];
            var topicDescription = data[2];
            var topicUrl = data[3];
            $("#wiki-search-title").html(title.toUpperCase());
            
            $("ul").html(
                "<li>" + topic[9] + "<a href="+ topicUrl[9] + " target='_blank'>link</a> " + topicDescription[9] + "</li>" + 
                "<li>" + topic[8] + "<a href="+ topicUrl[8] + " target='_blank'>link</a> " + topicDescription[8] + "</li>"
            
            );
            
            //$(printSearchResult).html(result);
        });

    }    
    
});