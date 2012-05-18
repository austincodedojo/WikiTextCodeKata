describe("A wikitext engine transformer", function() {
	//global variables here

	describe("Testing the linkifier", function() {
		it("Test that Hello gives us back Hello", function() {
			var result = linkify("Hello");
			var expected = "Hello";
			expect(result).toEqual(expected);
		});
		it("Test that Goodbye gives us back Goodbye", function() {
			var result = linkify("Goodbye");
			var expected = "Goodbye";
			expect(result).toEqual(expected);
		});
		it("Test that HelloWorld gives us a linkified HelloWorld", function() {
			var result = linkify("[[HelloWorld]]");
			var expected = '<a onClick="openPage(\'HelloWorld\')">HelloWorld</a>';
			expect(result).toEqual(expected);
		});
		it("Test that GoodbyeWorld gives us back a linkified GoodbyeWorld", function() {
			var result = linkify("[[GoodbyeWorld]]");
			var expected = '<a onClick="openPage(\'GoodbyeWorld\')">GoodbyeWorld</a>';
			expect(result).toEqual(expected);
		});
		it("Test that something complex gives us back the right thing.", function() {
			var result = linkify("You say [[HelloWorld]], I say [[GoodbyeWorld]]");
			var expected = 'You say ' +
				'<a onClick="openPage(\'HelloWorld\')">HelloWorld</a>' +
				', I say ' +
				'<a onClick="openPage(\'GoodbyeWorld\')">GoodbyeWorld</a>';
			expect(result).toEqual(expected);
		});
		it("Test that something complex on multiple lines gives us back the right thing.", function() {
			var result = linkify("You say\n[[HelloWorld]],\nI say\n[[GoodbyeWorld]]");
			var expected = 'You say\n' +
				'<a onClick="openPage(\'HelloWorld\')">HelloWorld</a>,\n' +
				'I say\n' +
				'<a onClick="openPage(\'GoodbyeWorld\')">GoodbyeWorld</a>';
			expect(result).toEqual(expected);
		});
		it("Test that wierd characters dont link", function() {
			var result = linkify("[[Go!dbye]]");
			var expected = "[[Go!dbye]]";
			expect(result).toEqual(expected);
		});
	});
	describe("Testing the enparagraphinator", function() {
		it("Should surround the text in a paragraph", function() {
			var input = "Some text";
			var expected = "<p>Some text</p>";

			expect(enparagraphinate(input)).toEqual(expected);
		});
		it("Two consecutive newlines closes the current paragraph and opens a new one", function() {
			var input = "Some text\n\nwith newlines";
			var expected ="<p>Some text</p>\n<p>with newlines</p>";

			expect(enparagraphinate(input)).toEqual(expected);
		});
		it("Blank line with spaces in it.", function() {
			var input = "Some text\n   \nwith blank line";
			var expected ="<p>Some text</p>\n<p>with blank line</p>";

			expect(enparagraphinate(input)).toEqual(expected);
		});
	})
});