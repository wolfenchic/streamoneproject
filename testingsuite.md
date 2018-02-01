# NicholaWolfe.com 

## Testing Suite

### Overview of Testing
The Javascript used in this site was not suitable for automated testing using, for example, Jasmine. 
For that reason I have carried out manual tests, which I have documented here. 

### What Did I Test?

1. Typewriter Function
2. Submit Function
3. jQuery Events

### Typewriter function
The typewriter function was written to print a sentence across the landing image `.landingImage` of the site. The typeWriter function should print each character of the sentence individually until completed. 
The sentence was contained in the script.js file within the typeWriter function: `let text = "I'm a full stack developer"`.

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

The submit function was written to produce a modal after a succesful form submission.
Succcessful form submission should occur when the user clicks the `<button type="submit"` after entering the required fields of the form. 

The email field of the contact form is required and the user should not be able to submit the form if this field is empty. 

I tested submitting the form without a valid input in the email field and the modal did not appear, instead an error message appears. This functions as expected. 

When a valid email is submitted the modal is called and performs as expected. 

The modal has one dismiss button which worked as expected in all instances of testing. 

### jQuery animate method

1. The first element that I applied a jQuery call to was: `<a>` .I intended to change the color of all link elements when the mouse passed over them. 
This is working as intended using the mouseover selector. When the mouse leaves the link the color reverts back to the original color outlined in the css file. This is as expected. 

2. The second element attached to a jQuery call is the `.card` class. I intended to change the opacity of the individual cards while the user's mouse was on them. There are 3 cards in this container and during testing I ensured only the individual card selected changed opacity. 
Using the mouseover handler this performs as expected. Adding a mouseout handler the opacity reverts to its standard opacity when the mouse leaves. 
During testing I changed the relative value of the opacity and the speed. In each instance the function performed as expected. 

3. The third element attached to a jQuery call is the `.portfolioImage` image class. Using the hover function I intended for the image to change to a new image. During testing this call was not functioning as expected. I changed my function to target the `.imageContainer` instead of the img class. This produced the desired effect. The second part of this function changes the image back to the original image when the hover event ends. This is as intended. 









