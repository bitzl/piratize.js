var Piratize = (function(_) {

	var endOfSentence = /([\w]{4,})(\.)/g;
	var shout = 'Arrhhhh';

	piratizeDocument = function() {
		var childNodes = document.body.childNodes;
		for (index in childNodes) {
			var node = childNodes[index];
			if (node.innerHTML) {
				node.innerHTML = piratize(node.innerHTML);
			};
		};
	};

	function insertShout(match, p1, p2, offset, string) {
		return p1 + ', ' + shout + p2; 
	};
	
	piratize = function(text) {
		return text.replace(endOfSentence, insertShout);
	};
	
	return this;
})(_);
