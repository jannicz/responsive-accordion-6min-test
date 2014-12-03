'use strict';
(function(){
  var options = document.getElementsByClassName('tab');

	function clickHandler(tabNum) {
		console.log('clicked tab', tabNum);
		for (var i = 1; i <= options.length; i++) {
			var currentTab = document.getElementById('tab' + i);
			if (i === tabNum) {
				console.log('active tab', i);
				currentTab.style.display = 'block';
			} else {
				currentTab.style.display = 'none';
			}
		}
	}
	
	// use function factory because of loop
	function clickHandlerCallback(tabNum) {
		return function () {
			clickHandler(tabNum);
		}
	}

	for (var i = 0; i < options.length; i++) {
		var tabNum = options[i].getAttribute("data-group");
		options[i].onclick = clickHandlerCallback(Number(tabNum));
	}
}());
