
var urlEntry = "https://wind-bow.glitch.me/twitch-api/"; // need urlEntry/streams/streamName, urlEntry/channels/channelName, urlEntry/users/userName
var urlStream = "streams/";
var urlChannel = "channels/";
var streamChannelList = ["summit1g","shroud","freecodecamp", "ESL_CSGO", "KayPikeFashion", "overwatchcontenders", "ELEAGUETV", "beyondthesummit", "yoda"]//["fakechannelnameftw", "leveluplive", "freecodecamp", "Kolento","fakeChannelzfe", "TSM_Dyrus"]; //userName

// ex: urlEntry/streams/hsdogdog, urlEntry/channels/hsdogdog, urlEntry/users/hsdogdog
// main one will be: https://wind-bow.glitch.me/twitch-api/streams/  
// might use bio from: https://wind-bow.glitch.me/twitch-api/users/

document.getElementById('btn-all').addEventListener("click", showAllChannels, false);
document.getElementById('btn-online').addEventListener("click", showOnlineChannels, false);
document.getElementById('btn-offline').addEventListener("click", showOfflineChannels, false);

//makes the button change after being clicked...
$(".button-group").on("click", function(){
    $("#btn-online").removeClass("btn_on");
    $("#btn-offline").removeClass("btn_on");
    $("#btn-all").removeClass("btn_on");
    $(this).addClass("btn_on");
});



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
    $("#btn-all").addClass("btn_on");
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
                    
                    channelGame = "...Offline...";
                    channelLogo = "https://cdn.compliancesigns.com/media/ansi-safety/300/ANSI-Elevator-Sign-ANE-28682_300.gif";
                    channelName = "...Offline...";
                    channelStatus = "...Out of Order...";
                    channelUrl = "https://www.twitch.tv/";
                } else {
                    channelGame = channels_data.game;
                    channelLogo = channels_data.logo;
                    channelName = channels_data.name;
                    channelStatus = channels_data.status;
                    channelUrl = channels_data.url;
                }
                
                $("ul").append(
                "<li class='box-shadow " + currentChannelState + "'>" + // don't remove space in front of box-shadow, you need it.
                "<div class='row channel-title'>" +
                "<div class='col-md-2 col-sm-2 tv'></div>" +
                "<div class='col-md-10 col-sm-10  text-border'><a href=" + channelUrl + " target='_blank' rel='noopener noreferrer'>" + 
                channelName + " |</a>" +
                channelGame + "</div>" + 

                "</div>" +
                "<div class='row'>" +
                "<div class='col-md-4 col-sm-5 text-border channel-content'>" +
                "<img class='content-img-size' src=" + channelLogo + " alt='Stream Logo'> " +
                "<img class='content-img-size' src=" + channelPreview + " alt='Stream Preview'> " +
                "</div>" +
                "<div class='col-md-8 col-sm-7 channel-status text-border'>" +
                " <p>Viewer Count: " + 
                channelViewerCount + "</p>" + 
                channelStatus +
                "</div></div>" +
                
                "</li>");
            });
            
        }); 
            
    });

}

/* 

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/Myvqmo/.

*/