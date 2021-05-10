numOfMsgs = 15;
for(i=1;i<=numOfMsgs;i++){
	msgBox = document.querySelectorAll("[contenteditable='true']")[1];
    	msg = Math.random().toString(36).substring(2, Math.max(8,15-i%3+48/i)); 
    	msgBox.innerHTML=msg;
    	event = new UIEvent("input",{    
				    	bubbles : true,
				    	cancelable : true,
				    	view : window,
			       	    	detail : 1   
			             }); 
        msgBox.dispatchEvent(event);
        document.querySelectorAll("[data-icon='send']")[0].click();
}
