/* a few implementations from the Seasoned Schemer
*/

YAHOO.namespace('SFJ.test');

var Assert = YAHOO.util.Assert;

// chapter 1
YAHOO.SFJ.test.oTestScramble = new YAHOO.tool.TestCase({
	name : "TestScramble",
	testScramble : function() {
		var input = ArrayToList([1,1,2,2,3,2])
		Assert.isTrue(eqlist(ArrayToList([1,1,1,2,2,3]),scramble(input)))
	}
});


YAHOO.util.Event
		.onDOMReady(function() {
		
			if (!YAHOO.SFJ.test.SFJ_TestSuite) 
				YAHOO.SFJ.test.SFJ_TestSuite = new YAHOO.tool.TestSuite("YUI Test Suite for Seasoned Funky Javascripter");
		
			YAHOO.SFJ.test.SFJ_TestSuite
					.add(YAHOO.SFJ.test.oTestScramble);

			var logger = new YAHOO.tool.TestLogger("testLogger_SFJ");
			logger.hideCategory("info");

			YAHOO.tool.TestRunner
					.add(YAHOO.SFJ.test.SFJ_TestSuite);

			YAHOO.tool.TestRunner.run();
		});

