$(document).ready(function(){

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

// $('#landingImage').mouseenter(function(e) {
//   let text = "I'm a full stack developer";
//   typeWriter(text, 0);
// });

/*$('#landingImage').mouseout(function(e){
    e.stopImmediatePropagation();
});

$('#landingImage').hover(function(e){
    e.stopImmediatePropagation();
});*/

 /*$('#landingImage').mouseenter(function(){
        $("#landingImage").typed({
            strings: ["I'm a full stack developer.", "Second sentence."],
            typeSpeed: 0
        });
    });*/
  
$('#myForm').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();

  
});

})

//  e.stopImmediatePropagation();


