var menuItem = {
    "id":"read",
    "title":"Read-It",
    "contexts":["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "read" && clickData.selectionText){
        chrome.tts.speak(clickData.selectionText); 
    }
})