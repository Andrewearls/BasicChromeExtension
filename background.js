'use strict';

chrome.runtime.onInstalled.addListener(function() {
    console.log('Installed!');
    chrome.identity.getAuthToken(function() {
      console.log('here');
    });
});

chrome.tabs.onUpdated.addListener(function(changeInfo, tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
  });
    
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
  // console.log(activeInfo.tabId);
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
  });
});