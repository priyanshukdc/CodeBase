function injectTheScript() {
	document.getElementById('status').textContent="Messages are being queued up";
    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
	var url=new URL(tabs[0].url);
	if(url.hostname=="www.youtube.com"){
       	 	chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"},function(results){
			if(results=="success")
				document.getElementById('status').textContent="Picture in Picture Enabled";	
			else document.getElementById('status').textContent="Some error occured. Try Again!!";	
		});
	}else{
		document.getElementById('status').innerHTML=" Please make sure to visit <a href=\"https://www.youtube.com\" target=\"_blank\">www.youtube.com</a> first"
	}
	});
}

document.getElementById('pip').addEventListener('click', injectTheScript);