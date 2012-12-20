/* a few implementations from the Seasoned Schemer
*/
// chapter 11
function scramble(aTup) {  // tuple = list of numbers
	function scramble_b(tup, revpre) {
		if (isEmpty(tup)) return EMPTY;
		else return cons(
			pick(car(tup),cons(car(tup),revpre)),
			scramble_b(cdr(tup), cons(car(tup),revpre))
		)
	}
	return scramble_b(aTup,EMPTY)
}
// chapter 12
// union con letrec === innerfunction


// chapter 14
// leftmost (first version)
function leftmostFirstVersion(sexp){
	if (isEmpty(sexp)) return EMPTY
	else if (isAtom(car(sexp))) return car(sexp)
	else {
		if (!isEmpty(leftmostFirstVersion(car(sexp)))) 
			return leftmostFirstVersion(car(sexp))
		else return leftmostFirstVersion(cdr(sexp))
	}
}

// depth + let


// leftmost + letcc





















