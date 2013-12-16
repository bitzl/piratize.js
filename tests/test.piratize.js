describe('Piratize a string', function() {
	describe('Omit sentences with last words shorter than four letters', function() {
		it('should be the same', function() {
			var phrase = 'You could e.g.'; 
			Piratize.piratize(phrase).should.equal(phrase);
		});
		it('should be somehow different', function() {
			var phrase = 'You could do something.'; 
			Piratize.piratize(phrase).should.not.equal(phrase);
		});
	});
});