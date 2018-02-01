# NicholaWolfe.com 

## Testing Suite

### Overview of Testing
The Javascript used in this site was not suitable for automated testing using, for example, Jasmine. 
For that reason I have carried out manual tests, which I have documented here. 

### What Did I Test?

1. Typewriter Function
2. Submit Function

### Typewriter function
The typewriter function was written to print a sentence across the landing image `.landingImage` of the site. The typeWriter function should print each character of the sentence individually until completed. 
The sentence was contained in the script.js file: `let text = "I'm a full stack developer"`.

Originally, I wrote a function so that the text would begin printing when a user `mouseover` the landing image. The text should have printed once and then remained fixed to the landing image statically. 

I first tested changing the content of the text. `let text = 1 2 3 4 5 6`, which produced the same result. 

In both of these instances the desired text did print across the landing image, as expected.

I then tested  mousing over the landing image several times in the same session and noticed that the text was glitchy. 
Originally my function was written like so:


~~~~function typeWriter(text, i) {
 if (i < (text.length)) {
    $('.landingText').html(text.substring(0, i+1));
    i++;
    setTimeout(function(){
        typeWriter(text, i)
    }, 300);
    
}

}

$('#landingImage').mouseover(function(e) {
  e.stopPropagation();

  let text = "I'm a full stack developer";
  typeWriter(text, 0);
})
~~~~

This meant that if a user moused over the image several times in the same session that the text would flicker and jump across the page. I changed this function to; 

~~~~$(document).ready(function(){

function typeWriter(text, i) {
 if (i < (text.length)) {
    $('.landingText').html(text.substring(0, i+1));
    i++;
    setTimeout(function(){
        typeWriter(text, i);
    }, 300);
}
}

typeWriter("I am a full stack developer", 0);
~~~~

The updated function resulted in the desired effect and this is now functioning as expected. 

### Submit Function

