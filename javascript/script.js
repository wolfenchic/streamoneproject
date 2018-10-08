$(document).ready(function(){

function typeWriter(text, i) {
 if (i < (text.length)) {
    $('.landingText').html(text.substring(0, i+1));
    i++;
    setTimeout(function(){
        typeWriter(text, i);
    }, 100);
}
}

typeWriter("Hi, my name is Nichola.<br> I'm a full stack developer.", 0);

  
$('#myForm').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();

 });
  
$('a').mouseenter(function() {
 	$(this).css("color", "#5EC5C4");
 });

$('a').mouseleave(function(){
    $(this).css("color", "#4a4a4f");
});

$(".skillCard").mouseenter(function(){
    $(this).animate({opacity: '1.0'}, "slow");
});

$(".skillCard").mouseleave(function(){
    $(this).animate({opacity: '0.6'}, "slow");
});



$(".fa-linkedin, .fa-github, .fa-file").mouseenter(function(){
    $(this).css("color", "#4a4a4f");
});

$(".fa-linkedin, .fa-github, .fa-file").mouseleave(function(){
    $(this).css("color", "#5EC5C4");
});

$(".contactButton").mouseenter(function(){
    $(this).css("background-color", "#5EC5C4");
});

$(".contactButton").mouseleave(function(){
    $(this).css("background-color", "#5EC5C4");
});



});




