/* Copyright (C) Priyanshu Kumar Chaudhary- All Rights Reserved
 * You may use, distribute and modify this code
 * if you keep this comments in file as it is and
 * mention below lines in visible part of your content & description
 * Title: “YoutubeVideoAnywhereWithPictureInPicture”
 * Creator: “Priyanshu Kumar Chaudhary"
 * Source: “Github :— https://github.com/priyanshukdc/CodeBase/.
 * Follow @thecodeattorney on Instagram for more such stuff. 
 */
document.getElementsByClassName('ytp-left-controls')[0].remove();
document.getElementsByClassName('ytp-right-controls')[0].remove();

var vid=document.getElementsByTagName('video')[0];
document.getElementsByClassName('ytp-progress-bar-padding')[0].remove();
document.getElementsByClassName('ytp-progress-list')[0].remove();
document.getElementsByClassName('ytp-chrome-controls')[0].remove();
document.getElementsByClassName('ytp-chrome-bottom')[0].remove();
document.getElementsByClassName('ytp-storyboard-framepreview')[0].remove();
document.getElementsByClassName('ytp-player-content')[0].remove();
var vidPlayer=document.getElementsByClassName('html5-video-player')[0];
vidPlayer.click();
document.getElementsByClassName('ytp-bezel-text-hide')[0].remove();
vidPlayer.onmouseover=function(){vid.setAttribute("controls","controls");}
