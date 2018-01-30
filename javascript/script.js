$(document).ready(function(){

function typeWriter(text, i) {
 if (i < (text.length)) {
    $('.landingText').html(text.substring(0, i+1));
    i++;
    setTimeout(function(){
        typeWriter(text, i)
    }, 500);
    
}

}

$('#landingImage').mouseover(function(e) {
  e.stopPropagation();

  let text = "I'm a full stack developer";
  typeWriter(text, 0);
  
});

})

