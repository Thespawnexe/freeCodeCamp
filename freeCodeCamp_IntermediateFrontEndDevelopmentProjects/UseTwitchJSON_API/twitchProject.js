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
var urlEntry = "https://wind-bow.glitch.me/twitch-api/streams/"; // need urlEntry/streams/streamName, urlEntry/channels/channelName, urlEntry/users/userName
// ex: urlEntry/streams/hsdogdog, urlEntry/channels/hsdogdog, urlEntry/users/hsdogdog
// main one will be: https://wind-bow.glitch.me/twitch-api/streams/  
// might use bio from: https://wind-bow.glitch.me/twitch-api/users/
var streamChannel = ["leveluplive", "freecodecamp", "Kolento","fakeChannelzfe", "TSM_Dyrus", "brialeigh"]; //userName

document.getElementById('btn-all').addEventListener("click", displayAllChannels, false);
document.getElementById('btn-online').addEventListener("click", displayOnlineChannels, false);
document.getElementById('btn-offline').addEventListener("click", displayOfflineChannels, false);

function displayAllChannels () {
    getChannelInfo(urlEntry, streamChannel);
    $("ul").html("<li>All Channels: ON</li>");
};

function displayOnlineChannels() {
    $("ul").html("<li>ONLINE Channels</li>");
};
function displayOfflineChannels() {
    $("ul").html("<li>OFFLINE channels</li>");
};

$(document).ready(function(){
    displayAllChannels();
    

});
function getChannelInfo (urlEntry, streamChannel) {
    for (var i=0; i< streamChannel.length; i++) {
        $.getJSON(urlEntry + streamChannel[i], function(data) {
            if (data.stream === null) {
                $("ul").append("<li> channel is offline</li>");
            } 
            else {
                $("ul").append(
                    "<a href=" + data.stream.channel.url + " target='_blank' rel='noopener noreferrer'><li>" +
                    "<img src=" + data.stream.channel.logo + " alt='Stream Logo' height='100px'> " +
                    "<img src=" + data.stream.preview.medium + " alt='Stream Preview' height='100px'> " +
                    " Game: " + data.stream.game +
                    " Viewers: " + data.stream.viewers +
                    " Channel: " + data.stream.channel.display_name + 
                    " Status: " + data.stream.channel.status +
                    "</li></a>");
            }
        });
    }
}