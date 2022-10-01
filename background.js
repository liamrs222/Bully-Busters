console.log('from background')

//set of tabs visited
//const visited = new Set()

//when a tab is activated, check if new tab and update script
chrome.tabs.onActivated.addListener(tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['language_censor.js'],
    },() => { 
        console.log('script injected') 
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.status == 'complete') {
        chrome.scripting.executeScript({
            files: ['language_censor.js'],
            target: {tabId: tabId}
        });
    }
})
