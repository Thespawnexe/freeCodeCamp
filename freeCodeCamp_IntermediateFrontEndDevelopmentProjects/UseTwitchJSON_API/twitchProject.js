/* 

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/Myvqmo/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.

User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.

Hint: See an example call to Twitch.tv's JSONP API at http://forum.freecodecamp.org/t/use-the-twitchtv-json-api/19541.

Hint: The relevant documentation about this API call is here: https://dev.twitch.tv/docs/v5/reference/streams/#get-stream-by-user.

Hint: Here's an array of the Twitch.tv usernames of people who regularly stream: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

UPDATE: Due to a change in conditions on API usage explained here Twitch.tv now requires an API key, but we've built a workaround. Use https://wind-bow.gomix.me/twitch-api instead of twitch's API base URL (i.e. https://api.twitch.tv/kraken ) and you'll still be able to get account information, without needing to sign up for an API key.


*/
var urlEntry = "https://wind-bow.glitch.me/twitch-api/"; // need urlEntry/streams/streamName, urlEntry/channels/channelName, urlEntry/users/userName
var urlStream = "streams/";
var urlChannel = "channels/";
var streamChannelList = ["freecodecamp", "Warcraft"]//["TestChannel", "leveluplive", "freecodecamp", "Kolento","fakeChannelzfe", "TSM_Dyrus"]; //userName

// ex: urlEntry/streams/hsdogdog, urlEntry/channels/hsdogdog, urlEntry/users/hsdogdog
// main one will be: https://wind-bow.glitch.me/twitch-api/streams/  
// might use bio from: https://wind-bow.glitch.me/twitch-api/users/

document.getElementById('btn-all').addEventListener("click", displayAllChannels, false);
document.getElementById('btn-online').addEventListener("click", displayOnlineChannels, false);
document.getElementById('btn-offline').addEventListener("click", displayOfflineChannels, false);

function displayAllChannels () {
    // show online channels
    displayOnlineChannels();
    // show offline channels
    displayOfflineChannels();
    // show defunct channels
    
    getChannelInfo(urlEntry, urlStream, urlChannel, streamChannelList);
    $("ul").append("<li>All Channels: ON</li>");
};

function displayOnlineChannels() {
    $("ul").append("<li>ONLINE: Channels</li>");
};
function displayOfflineChannels() {

    $("ul").append("<li>OFFLINE: channels</li>");
};

$(document).ready(function(){
    displayAllChannels();
});

function getChannelInfo (urlEntry, urlStream, urlChannel, streamChannelList) {
    
    streamChannelList.forEach(function(stream){
        var channelViewerCount, channelPreview, channelStatus, 
        channelName, channelGame, channelLogo, channelUrl;

        var currentChannelState = "online"; 

        $.getJSON(urlEntry + urlStream + stream, function(streams_data) {
            
            if(streams_data.stream === null) {
                channelViewerCount = "Offline";
                currentChannelState = "offline";
            
            } else {
                channelViewerCount = streams_data.stream.viewers;
            }
               
            $.getJSON(urlEntry + urlChannel + stream, function(channels_data) {
                channelGame = channels_data.game;
                $("ul").append("<li class=" + currentChannelState + ">[Streams]viewer Count: " + channelViewerCount +" [channels] Game: " + channelGame + "</li>");

            });
            
        }); 
            
    });

}
    
    
    
    /*
    for (var i=0; i< streamChannelList.length; i++) {
        
        $.getJSON(urlEntry + urlStream + streamChannelList[i], function(data) {
            var channelViewerCount, channelPreview; 

            if(data.stream === null) {
                channelViewerCount = "Channel is currently offline";
                channelPreview = "#";

            } else {
                channelViewerCount = data.stream.viewers;
                channelPreview = data.stream.preview.medium;

            }
            
            $.getJSON(urlEntry + urlChannel + streamChannelList[i], function(data) {
                
                var channelStatus = data.status;
                var channelName = data.display_name;
                var channelGame = data.game;
                var channelLogo = data.logo;
                var channelUrl = data.url;
            
                    $("ul").append(
                        "<a href=" + channelUrl + " target='_blank' rel='noopener noreferrer'><li>" +
                        "<img src=" + channelLogo + " alt='Stream Logo' height='100px'> " +
                        "<img src=" + channelPreview + " alt='Stream Preview' height='100px'> " +
                        " Game: " + channelGame +
                        " Viewers: " + channelViewerCount +
                        " Channel: " + channelName + 
                        " Status: " + channelStatus +
                        "</li></a>");    
                    
                });
            
        });

        /*
        
    }
}



            
            
            /*            
            if (data.error === "Not Found") {
                $("ul").append("<li class='box-shadow'>Channel No Longer Exists</li>");
            } else {
                */
                    /*
                    if (data.stream === null) {
                      
                        $("ul").append(
                            "<a href=" + channelUrl + " target='_blank' rel='noopener noreferrer'><li class='box-shadow'>" +
                            "<img src=" + channelLogo + " alt='Stream Logo' height='100px'> " +
                            /*"<img src=" + channelPreview + " alt='Stream Preview' height='100px'> " + 
                            " Game: " + channelGame +
                            /*" Viewers: " + channelViewerCount + 
                            " Channel: " + channelName + 
                            " Status: " + channelStatus +
                            "</li></a>");                                        
                    } else {
                        */ 