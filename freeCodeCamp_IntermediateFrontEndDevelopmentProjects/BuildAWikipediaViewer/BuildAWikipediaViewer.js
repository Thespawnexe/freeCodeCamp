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
        var searchTerm = document.getElementById("wiki-search").value;
       // var printSearchResult = document.getElementById("wiki-section");
        var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&search=" + searchTerm +  "&callback=?"; //this works

        if ( searchTerm.length === 0) {
            $("ul").html("<li>No search results found. Please try another search.</li>");
        } else {
            $.getJSON( wikiUrl, function(data) {
                var title = data[0];
                var topic = data[1];
                var topicDescription = data[2];
                var topicUrl = data[3];
                
                if (topic.length === 0) {
                    $("ul").html("<li>No search results found. Please try another search.</li>");    
                } else {
                    $("ul").empty();
                    $("#wiki-search-title").html(title.toUpperCase());
                    for(var i=0; i < topic.length; i++) { 
                        $("ul").append(
                        "<li><div class='topic-title'>" + topic[i] + "</div><div class='topic-description'>" + topicDescription[i] + "</div><div><a href="+ topicUrl[i] + " target='_blank' class='text-right'>Find out more...</a></div></li>" 
                        );
                    }
                }
            });
        }
    }    
    
});