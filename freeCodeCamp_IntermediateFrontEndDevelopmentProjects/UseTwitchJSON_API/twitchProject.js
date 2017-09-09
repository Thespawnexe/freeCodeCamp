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
var streamChannelList = ["shroud","freecodecamp", "fakechannelnameftw", "Warcrafts", , "Warcraft"]//["fakechannelnameftw", "leveluplive", "freecodecamp", "Kolento","fakeChannelzfe", "TSM_Dyrus"]; //userName

// ex: urlEntry/streams/hsdogdog, urlEntry/channels/hsdogdog, urlEntry/users/hsdogdog
// main one will be: https://wind-bow.glitch.me/twitch-api/streams/  
// might use bio from: https://wind-bow.glitch.me/twitch-api/users/

document.getElementById('btn-all').addEventListener("click", showAllChannels, false);
document.getElementById('btn-online').addEventListener("click", showOnlineChannels, false);
document.getElementById('btn-offline').addEventListener("click", showOfflineChannels, false);

function showAllChannels () {
    
    $(".online").show();
    $(".offline").show();
    $(".defunct").show();

};

function showOnlineChannels() {
    $(".online").show();
    $(".offline").hide();
    $(".defunct").hide();
};
function showOfflineChannels() {
    $(".online").hide();
    $(".offline").show();
    $(".defunct").show();
};

$(document).ready(function(){
    displayChannels(urlEntry, urlStream, urlChannel, streamChannelList);
});

function displayChannels(urlEntry, urlStream, urlChannel, streamChannelList) {
    
    streamChannelList.forEach(function(stream){
        var channelViewerCount, channelPreview, channelStatus, 
        channelName, channelGame, channelLogo, channelUrl;

        var currentChannelState = "online"; 

        $.getJSON(urlEntry + urlStream + stream, function(streams_data) {
            
            // if(streams_data.stream === null) streams_data can't show channelViewerCount or channelPreview
            if (streams_data.stream === null) {
                channelViewerCount = "Offline";
                currentChannelState = "offline";
                channelPreview = "https://i1.wp.com/static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg?resize=320%2C180";
            } else {
                channelViewerCount = streams_data.stream.viewers;
                channelPreview = streams_data.stream.preview.medium;
            }
               
            $.getJSON(urlEntry + urlChannel + stream, function(channels_data) {
                

                // if(channels_data.error === "Not Found") channels_data has nothing to display
                if (channels_data.error !== undefined) {
                    currentChannelState = "defunct";
                    channelGame = "Channel No Longer Exists";
                    channelLogo = "https://cdn.compliancesigns.com/media/ansi-safety/300/ANSI-Elevator-Sign-ANE-28682_300.gif";
                    channelName = "Channel No Longer Exists";
                    channelStatus = "...Out of Order...";
                    channelUrl = "#";
                } else {
                    channelGame = channels_data.game;
                    channelLogo = channels_data.logo;
                    channelName = channels_data.name;
                    channelStatus = channels_data.status;
                    channelUrl = channels_data.url;
                }
                
                $("ul").append(
                "<li class=" + "box-shadow "  + currentChannelState + ">" +
                "<a href=" + channelUrl + " target='_blank' rel='noopener noreferrer'>Channel: " + channelName + "</a>" +
                "<img src=" + channelLogo + " alt='Stream Logo' height='100px'> " +
                "<img src=" + channelPreview + " alt='Stream Preview' height='100px'> " +
                "[Streams]viewer Count: " + 
                channelViewerCount + " [channels] Game: " + 
                channelGame + 
                " Status: " + channelStatus +
                "</li>");
            });
            
        }); 
            
    });

}