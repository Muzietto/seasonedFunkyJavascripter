/* a few implementations from the Seasoned Schemer
*/
// chapter 11
function scramble(aTup) {  // tuple = list of numbers
	function scramble_b(tup, revpre) {
		if (isEmpty(tup)) return EMPTY;
		else return cons(
			pick(car(tup),cons(car(tup),revpre)),
			scramble_b(cdr(tup), cons(car(tup),revpre))
		);
	}
	return scramble_b(aTup,EMPTY);
}
// chapter 12
// union plus letrec === innerfunction

// chapter 13
function intersectallUsingLetrec (l_set){
	function A(l_set){
		if (isEmpty(cdr(l_set))) return car(l_set);
		else return intersection(car(l_set),A(cdr(l_set)));
	}
	if (isEmpty(l_set)) return EMPTY;
	else return A(l_set);
}

// from http://matt.might.net/articles/by-example-continuation-passing-style/
// (define call/cc (lambda (f cc) (f (lambda (x k) (cc x)) cc)))
function callcc (f,cc) { 
  return f(function(x,k) { return cc(x); },cc);
}

// intersectall + callcc  - not using letcc!!
function intersectallCc(l_set){
	return callcc(
		function (hop){
			function A(set){
				if (isEmpty(set)) return hop(EMPTY); 
				else if (isEmpty(cdr(set))) return car(set);
				else return intersection(car(set), A(cdr(set)));
			}
			return A(l_set)
		},
		function(x){return x;}
	);
}

// chapter 14
// leftmost (first version)
function leftmostFirstVersion(sexp){
	if (isEmpty(sexp)) return EMPTY;
	else if (isAtom(car(sexp))) return car(sexp);
	else {
		var lmcar = leftmostFirstVersion(car(sexp));
		if (!isEmpty(lmcar)) return lmcar;
		else return leftmostFirstVersion(cdr(sexp));
	}
}

// depth + let


// leftmost + callcc  - not using letcc!!
function leftmostCc(list){
	return callcc(
		function(hop) {
			function lm(sexp){
				if (isEmpty(sexp)) return EMPTY;
				else if (isAtom(car(sexp))) return hop('CCC'+car(sexp));
				else {
					var lmcar = lm(car(sexp));
					if (!isEmpty(lmcar)) return lmcar;
					else return lm(cdr(sexp));
				}
			}
			return lm(list);
		},
		function(x) {return x;}
	);
}

// rember1 (pag. 67)
function rember1Star(a, list){
	if (isEmpty(list)) return EMPTY
	else if (isAtom(car(list))) {
		if (car(list)===a) return rember1Star(a,cdr(list))
		else return cons(car(list),rember1Star(a,cdr(list)))
	}
	else {
		var rema = rember1Star(a,car(list))
		if (eqlist(rema,car(list))) return cons(car(list),rember1Star(a,cdr(list)))
		else return cons(rema,cdr(list))
	}
}













