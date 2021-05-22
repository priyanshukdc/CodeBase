/* Copyright (C) Priyanshu Kumar Chaudhary- All Rights Reserved
 * You may use, distribute and modify this code
 * if you keep this comments in file as it is and
 * mention below lines in visible part of your content & description
 * Title: “BotMessagesToSelectedWhatsAppContact”
 * Creator: “Priyanshu Kumar Chaudhary"
 * Source: “Github :— https://github.com/priyanshukdc/CodeBase/.
 * Follow @thecodeattorney on Instagram for more such stuff. 
 */
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
        document.querySelector("[data-icon='send']").click();
}
