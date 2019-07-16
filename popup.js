let get_url = document.getElementById('get_url');



get_url.onclick = function(element) {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	  	var url = tabs[0].url;	  	
	});
    console.log(url);
};