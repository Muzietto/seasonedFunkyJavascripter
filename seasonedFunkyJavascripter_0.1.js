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

// chapter 14
// leftmost (first version)
function leftmostFirstVersion(sexp){
	if (isEmpty(sexp)) return EMPTY
	else if (isAtom(car(sexp))) return car(sexp)
	else {
		var lmcar = leftmostFirstVersion(car(sexp))
		if (!isEmpty(lmcar)) 
			return lmcar
		else return leftmostFirstVersion(cdr(sexp))
	}
}

// depth + let


// leftmost + letcc
function leftmostContinuation(list){
	var continuation = function(x) {return x}
	var leftmost = function(sexp, cc) {
		if (isEmpty(sexp)) return EMPTY
		else if (isAtom(car(sexp))) cc('ccc'+car(sexp))
		else {
			var lmcar = leftmost(car(sexp),cc)
			if (!isEmpty(lmcar)) 
				leftmost(lmcar,cc)
			else leftmost(cdr(sexp),cc)
		}
	}
	return leftmost(list, function(x) {return x})
}

// rember1 (pag. 67)
function rember1(a, list){
	if (isEmpty(list)) return EMPTY
	else if (isAtom(car(list))) {
		if (car(list)===a) return rember1(a,cdr(list))
		else return cons(car(list),rember1(a,cdr(list)))
	}
	else {
		var rema = rember1(a,car(list))
		if (eqlist(rema,car(list))) return cons(car(list),rember1(a,cdr(list)))
		else return cons(rema,cdr(list))
	}
}

// rember1 + continuation
function rember1cc(a, list){
	var cc = function(x) {return x}
	
	if (isEmpty(list)) return continuation('no')
	else if (isAtom(car(list))) {
		if (car(list)===a) return rember1cc(a,cdr(list))
		else return cons(car(list),rember1cc(a,cdr(list)))
	}
	else {
		var rema = rember1cc(a,car(list))
		if (isAtom(rema)) return cons(car(list),rember1cc(a,cdr(list)))
		else return cons(rema,cdr(list))
	}
}

function callcc (f,cc) { 
  /* senza return!?!? */ f(function(x,k) { cc(x) },cc)
}

function skip(x){return 'CCC'+x}

function leftmostXX(l) {return callcc(lm(l,skip),skip)}

function lm(list, out){
	if (isEmpty(list)) return EMPTY
	else if (isAtom(car(list))) out(car(list))
	else {
		var lma = lm(car(list),out)
		if (lma!==undefined) lm(cdr(list),out)
	}
}

/*

(define leftmost
	(lambda(l)
		(letcc skip (lm l skip)
	)	
)

(define lm
	(lambda(l out)
		(cond
			((null? l)(quote()))
			((atom? (car l))(out (car l)))
			(else
				(cond
					((atom? (lm (car l) out)) (lm (car l) out))
					(else (lm (cdr l) out))
				)
			)
		)
		
	)
)
*/














