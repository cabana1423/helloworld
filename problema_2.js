function reverseParentheses(s){
    if(s.includes('(')){
        return reverseParentheses(reverseRecur(s));
    }
    return s;
}
function reverseRecur(s){
    var regexp= /\(([^()]*)\)/i;
    var subStr = regexp.exec(s)[1];
    subStr=subStr.split("").reverse().join("");
    return s.replace(regexp, subStr);
}
inputString = "(bar)";
inputString1 = "foo(bar)baz";
inputString2 = "foo(bar)baz(blim)";
inputString3 = "foo(bar(baz))blim";
console.log(reverseParentheses(inputString));
console.log(reverseParentheses(inputString1));
console.log(reverseParentheses(inputString2));
/*"foo (bar (baz)) blim" se convierte en "foo (barzab) blim" y luego
"foobazrabblim" por que primero empieza a invertir las palabras que estan encerradas entre "()" 
y estan contenidas dentro de otras palabras tambien encerradas */
console.log(reverseParentheses(inputString3));