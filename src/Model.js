var wikiTransform = function(input) {
	return enparagraphinate(linkify(input));
}

var linkify = function(input) {
	return input.replace(/\[\[(\w+)\]\]/g, '<a onClick="openPage(\'$1\')">$1</a>');
};

var enparagraphinate = function(input) {
	return "<p>" + input.replace(/\n\s*\n/g,'</p>\n<p>') + "</p>";
}



