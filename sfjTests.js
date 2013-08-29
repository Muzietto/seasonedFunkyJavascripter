/*
	SeasonedFunkyJavascripter - a few implementations from the Seasoned Schemer
	Author: Marco Faustinelli (contacts@faustinelli.net)
	Web: http://faustinelli.net/
	     http://faustinelli.wordpress.com/
	Version: 1.0

	The MIT License - Copyright (c) 2013 SeasonedFunkyJavascripter Project
*/

(function(ts){
// chapter 11
ts.add(new YAHOO.tool.TestCase({
	name : "TestScramble",
	testScramble : function() {
		var input = ArrayToList([1,1,2,2,3,2])
		Assert.isTrue(eqlist(ArrayToList([1,1,1,2,2,3]),scramble(input)))
	}
}));

// chapter 13
ts.add(new YAHOO.tool.TestCase({
	name : "TestIntersectallUsingLetrec",
	testIntersectallUsingLetrec : function() {
		Assert.isTrue(eqlist(EMPTY,intersectallUsingLetrec(EMPTY)),'empty set')
		var input = ArrayToList([['a','b','c'],['c','a','d','e'],['e','f','g','h','a','b']]);		
		Assert.isTrue(eqlist(ArrayToList(['a']),intersectallUsingLetrec(input)),'input')
		var input2 = ArrayToList([[6,'pears','and'],[3,'peaches','and',6,'peppers'],[8,'pears','and',6,'plums'],['and',6,'prunes','with','some','apples']]);		
		Assert.isTrue(eqlist(ArrayToList([6,'and']),intersectallUsingLetrec(input2)),'input2')
	}
}));

ts.add(new YAHOO.tool.TestCase({
	name : "TestIntersectallCc",
	testIntersectallCc : function() {
		Assert.isTrue(eqlist(EMPTY,intersectallCc(EMPTY)),'empty set');
		var input = ArrayToList([['a','b','c'],['c','a','d','e'],['e','f','g','h','a','b']]);		
		Assert.isTrue(eqlist(ArrayToList(['a']),intersectallCc(input)),'input');
		var input2 = ArrayToList([[6,'pears','and'],[3,'peaches','and',6,'peppers'],[8,'pears','and',6,'plums'],['and',6,'prunes','with','some','apples']]);
		Assert.isTrue(eqlist(ArrayToList([6,'and']),intersectallCc(input2)),'oneIsEmpty');
	}
}));

// chapter 14
ts.add(new YAHOO.tool.TestCase({
	name : "TestLeftmostFirst",
	testLeftmostFirst : function() {
		//var input = ArrayToList([[[[[[[[[[[[[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[],1]]]]]]]]]]],[[],[1,2]],2,3,2]);
		var input = ArrayToList([[[],1],[[],[1,2]],2,3,2]);
		Assert.areEqual(1,leftmostFirstVersion(input));
	}
}));

ts.add(new YAHOO.tool.TestCase({
	name : "TestLeftmostCc",
	testLeftmostCc : function() {
		//var input = ArrayToList([[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],1],[[],[1,2]],2,3,2]);
		var input = ArrayToList([[[],1],[[],[1,2]],2,3,2]);
		Assert.areEqual('CCC1',leftmostCc(input));
	}
}));

ts.add(new YAHOO.tool.TestCase({
	name : "TestLeftmostTryCatch",
	testLeftmostTryCatch : function() {
		//var input = ArrayToList([[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],[[],[],[],[],[]],[[],[]],[]],[[],1],[[],[1,2]],2,3,2]);
		var input = ArrayToList([[[],1],[[],[1,2]],2,3,2]);
		Assert.areEqual(1,leftmostTryCatch(input));
	}
}));

ts.add(new YAHOO.tool.TestCase({
	name : "TestRember1Star",
	testRember1Star : function() {
		var input = ArrayToList([1,[1,2,[0,1,1,[],2]],1,[2,[1,2,0,2],3,2],3,2]);
		var expected = ArrayToList([1,[1,2,[0,1,1,[],2]],1,[2,[1,2,0,2],2],3,2]);
		Assert.isTrue(eqlist(expected,rember1Star(3,input)));
	}
}));
/*
ts.add(new YAHOO.tool.TestCase({
	name : "TestRember1Cc",
	testRember1Cc : function() {
		var input = ArrayToList([1,[1,2,[0,1,1,[],2]],1,[2,[1,2,0,2],3,2],3,2]);
		var actual = rember1cc(3,input);
		var expected = ArrayToList([1,[1,2,[0,1,1,[],2]],1,[2,[1,2,0,2],2],3,2]);
		Assert.isTrue(eqlist(expected,actual));
	}
}));
*/


}(YAHOO.SFJ.test.SFJ_TestSuite));