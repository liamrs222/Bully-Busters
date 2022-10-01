console.log('from background')

//set of tabs visited
//const visited = new Set()

//when a tab is activated, check if new tab and update script
chrome.tabs.onActivated.addListener(tab => {
    //if(!visited.has(tab.tabId)) {
        chrome.scripting.executeScript({
            target: {tabId: tab.tabId},
            files: ['language_censor.js'],
        },() => { 
            console.log('script injected')
            //visited.add(tab.tabID) 
        });
    //}
});
