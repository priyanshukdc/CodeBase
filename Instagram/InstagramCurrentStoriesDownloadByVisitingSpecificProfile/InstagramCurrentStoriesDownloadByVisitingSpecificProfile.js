/* Copyright (C) Priyanshu Kumar Chaudhary- All Rights Reserved
 * You may use, distribute and modify this code
 * if you keep this comments in file as it is and
 * mention below lines in visible part of your content & description
 * Title: “InstagramCurrentStoriesDownloadByVisitingSpecificProfile”
 * Creator: “Priyanshu Kumar Chaudhary"
 * Source: “Github :— https://github.com/priyanshukdc/CodeBase/.
 * Follow @thecodeattorney on Instagram for more such stuff. 
 */
pause=false;
function liveDown() { 
	liveStory=null;
	fileName=window.location.href.split("/")[5];
	liveStory = document.querySelector("source");  
	if(liveStory!==null) pause=false;
	if(liveStory==null) liveStory = document.querySelector("[decoding='sync']");  
	if(liveStory==null) return;
	liveStoryLink = liveStory.getAttribute('src'); if(liveStoryLink==null) return;
	if(pause===false){document.getElementsByClassName('wpO6b')[0].click(); pause=true;}
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob';
	xhr.onload = function () {
		var hiddenAnchor = document.createElement('a');
		hiddenAnchor.href = window.URL.createObjectURL(xhr.response);
		hiddenAnchor.download = fileNameColl+fileName;
		hiddenAnchor.style.display = 'none';
		document.body.appendChild(hiddenAnchor);
		hiddenAnchor.click();
		hiddenAnchor.remove();
		document.getElementsByClassName('coreSpriteRightChevron')[0].click(); setTimeout(liveDown,2500);
	};
	xhr.open('GET', liveStoryLink);
	xhr.send();   
}


var fileNameColl = window.location.href.split("/")[3];
instaDp = document.querySelector("img[alt='Change Profile Photo']");
if (instaDp == null)
	instaDp = document.querySelector("img[alt='Profile photo']");
if (instaDp == null)
	instaDp = document.querySelector("img[alt$=' profile picture']");
if (instaDp == null) {
	window.alert("Some error occured. Try again.");
}else{
	instaDp.onclick = function () {
					setTimeout(liveDown,2500);
			      	      };
	instaDp.click();
}
