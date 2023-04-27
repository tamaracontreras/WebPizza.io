
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function(){
  $(".enviarcorreo").click(function(){
    alert("El correo fue enviado correctamente");
  });
});
$('.e1').click(function() {
  if($(this).css('color', '#0000')) {
        $(this).css('color', '#FF0000');
  }
 else {
       $(this).css('color', '#0000');
  }
});

//$(document).ready(function(){
//  $(".rojo").on({
    
     
//    dblclick: function(){
//      $(this).css("background-color", "#9f0d1c");
 //   }  
 // });
//});



$(document).ready(function(){
  $("h4").click(function(){
    $(".contenido").toggle();
  });
});
