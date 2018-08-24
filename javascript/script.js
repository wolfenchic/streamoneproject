$(document).ready(function(){

function typeWriter(text, i) {
 if (i < (text.length)) {
    $('.landingText').html(text.substring(0, i+1));
    i++;
    setTimeout(function(){
        typeWriter(text, i);
    }, 200);
}
}

typeWriter("Hi, my name is Nichola. I'm a full stack developer", 0);

  
$('#myForm').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();

 });
  
$('a').mouseenter(function() {
 	$(this).css("color", "#C3AEAF");
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


$(".portfolioCard7, .portfolioCard6, .portfolioCard5, .portfolioCard4, .portfolioCard3, .portfolioCard2, .portfolioCard1").mouseenter(function(){
    $(this).css("box-shadow", "10px 10px 5px grey");
    
});

$(".portfolioCard7, .portfolioCard6, .portfolioCard5, .portfolioCard4, .portfolioCard3, .portfolioCard2, .portfolioCard1").mouseleave(function(){
     $(this).css("box-shadow", "none");
   
});

$(".fa-linkedin, .fa-github, .fa-file").mouseenter(function(){
    $(this).css("color", "#4a4a4f");
});

$(".fa-linkedin, .fa-github, .fa-file").mouseleave(function(){
    $(this).css("color", "#C3AEAF");
});

$(".contactButton").mouseenter(function(){
    $(this).css("background-color", "#EA615B");
});

$(".contactButton").mouseleave(function(){
    $(this).css("background-color", "#EA615B");
});



});




