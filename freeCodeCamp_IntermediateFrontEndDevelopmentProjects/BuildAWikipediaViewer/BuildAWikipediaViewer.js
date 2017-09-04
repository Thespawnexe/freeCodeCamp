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
       
        var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&search=" + searchTerm +  "&callback=?";
        
        if ( searchTerm.length === 0) {

            $("#wiki-search-title").html("<p style='font-size: 32px'>No search results found. Please type in a search term to continue.</p>");
            $("ul").empty();
        
        } else {
            
            $("ul").hide("fade", "fast");    
            
            $.getJSON( wikiUrl, function(data) {
            
                var title = data[0];
                var topic = data[1];
                var topicDescription = data[2];
                var topicUrl = data[3];
                
                if (topicDescription.length < 1) {
                
                    $("#wiki-search-title").html("<p style='font-size: 32px'>No search results found. Please try another search.</p>");   
                
                } else {
                  
                    $("#wiki-search-title").html(title.toUpperCase());
                    
                    for(var i=0; i < topic.length; i++) {
                         
                        $("ul").append(
                        "<li class='box-shadow'><div class='topic-title'>" + topic[i] + "</div><div class='topic-description'>" + topicDescription[i] + "</div><div><a href="+ topicUrl[i] + " target='_blank' id='topic-url'>Find out more...</a></div></li>" 
                        );    
                    }
                    
                    $("ul").show("fade", "fast");
                }
            });
        }
    }        
});