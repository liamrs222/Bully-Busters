chrome.action.onClicked.addListener(function(tab) {
    chrome.windows.create({
      url: chrome.runtime.getURL("warning.html"),
      type: "popup"
    });
});