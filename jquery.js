$(document).ready(function(){

  var $mouth = $("#wichtig");
  var $food = $('#food');

(function toggleWichtig(){
    $mouth.toggle();
    setTimeout(function(){
        toggleWichtig();
    },3*200);
})();

(function toggleFood(){
    $food.toggle();
    setTimeout(function(){
        toggleFood();
    },3*200);
})();


})
