console.log('from background')

//when a tab is activated, update script
chrome.tabs.onActivated.addListener(tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.tabId},
        files: ['language_censor.js'],
    },() => { 
        console.log('script injected') 
    });
});

//when a tab is refreshed, update script
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab, change) {
    if(changeInfo.status == 'complete') {
        chrome.scripting.executeScript({
            files: ['language_censor.js'],
            target: {tabId: tabId}
        });
    }
});