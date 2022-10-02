var isToggled = false;

// when toggled, update script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'yo the button turned on') {
        chrome.storage.local.get("enabled", function (result) {
            isToggled = result.enabled;
            console.log ("message received baby");
            console.log (isToggled);

            if (isToggled) {
                chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
                    console.log(tabs[0].url);
                    my_tabid=tabs[0].id;

                    chrome.scripting.executeScript({
                        files: ['language_censor.js'],
                        target: {tabId: my_tabid}
                    });
                  });
            }
            else {
                chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
                    chrome.tabs.reload(arrayOfTabs[0].id);
                });
            }
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