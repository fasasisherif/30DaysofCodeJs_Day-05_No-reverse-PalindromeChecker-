//A program to check whether a string is palindrome or not.
//By Fasasi Sherif


/*Program begins*/
you = "Sherif"

/*I declared a function*/

function myfunc(word){
    var check = [you];
    var a = check.length-1;
    var b = you.length;
    
    console.log("We are checking "+ you + " which is a "+ b + " letter word if it is palindrome or not" )
    var b = you.length-1;

    c = [check[a][b]];
    b--;
    d = [check[a][b]];
    b--;
    e = [check[a][b]];
    b--;
    f = [check[a][b]];
    b--;
    g = [check[a][b]];
    b--;
    h = [check[a][b]];

    var x = c.concat(d,e,f,g,h);
    var y = x.join('')
    console.log(y);

    if (y == you ){
        console.log("This is a palindrome word")
    }
    if (y != you ){
        console.log("This not a palindrome word")
    }
}
/*The function ends here*/

myfunc(you)

/*Program ends*/






