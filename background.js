var isToggled = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'yo the button turned on') {
        chrome.storage.local.get("enabled", function (result) {
            isToggled = result.enabled;
            console.log ("message received baby");
            console.log (isToggled);
        })
    }
});


//when a tab is activated, update script
chrome.tabs.onActivated.addListener(tab => {
    if (isToggled) {
        chrome.scripting.executeScript({
            target: {tabId: tab.tabId},
            files: ['language_censor.js'],
        },() => { 
            console.log('script injected') 
        });
    }
});

//when a tab is refreshed, update script
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.status == 'complete' && isToggled) {
        chrome.scripting.executeScript({
            files: ['language_censor.js'],
            target: {tabId: tabId}
        });
    }
});