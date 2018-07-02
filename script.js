

$('#mySearch').keyup(function(){
  var valThis = $(this).val().toLowerCase();
   if(valThis == ""){
       $('#carList > li').show();
   } else {
       $('#carList > li').each(function(){
           var text = $(this).text().toLowerCase();
           (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
       });
  };
});














/*$(document).ready(function(){
  $("#mySearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tableBody h5").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});*/