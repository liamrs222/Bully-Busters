console.log('from background')

//chrome.tabs.onActivated.addListener(tab => {
//    console.log(tab)
//});

chrome.tabs.onActivated.addListener(tab => {
    chrome.scripting.executeScript({
      target: { tabId: tab.Id },
      files: ['language_censor.js']
    });
});