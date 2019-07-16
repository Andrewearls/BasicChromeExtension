'use strict';

chrome.runtime.onInstalled.addListener(function() {
    console.log('Installed!');
});

chrome.tabs.onUpdated.addListener(function(changeInfo, tab) {
    console.log('looking for url');
    console.log(changeInfo.url);
    console.log(tab);
});
