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
}
instaDp.onclick = function () {
					setTimeout(liveDown,2500);
					
			};instaDp.click();