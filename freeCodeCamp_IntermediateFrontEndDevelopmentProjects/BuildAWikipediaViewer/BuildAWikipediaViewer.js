/*
useful links to use for project.
-  a URL you can use to get a random Wikipedia article: https://en.wikipedia.org/wiki/Special:Random
-  Here's an entry on using Wikipedia's API: https://www.mediawiki.org/wiki/API:Main_page
-  Use this link to experiment with Wikipedia's API: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm
*/

 

$(document).ready(function(){
    var getSearchTerm = document.getElementById("search-button"); 

    getSearchTerm.addEventListener("click", findWikiPage, false);

    function findWikiPage() {
        var searchTerm = document.getElementById("wiki-search").value;
        var print = document.getElementById("wiki-section");
        $(print).html(searchTerm);
    }    
    
});