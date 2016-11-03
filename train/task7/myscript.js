$(document).ready(function(){
var count =1;

function addVal(){
  var data = $('#addText').val();
  $('#addNewItem').append('<li class = "checkbox list-group-item list-group-item-success" ><input type="checkbox" name="mycheck" id="ch' + count + '"><span class = "datastyle">'+ data  + '</span><button type="button" class ="btn btn-info btn-sm"id="rm' + count + '" >Remove' + '</li>');

  $('#ch'+count).click(function(){

    var $this = $(this);
    if (this.checked) {
      
        $this.parent().addClass('completed','list-group-item-danger');
    } else {
        $this.parent().removeClass('completed');
    }
  });



  $('#rm' + count).click(function(){
    //Only remove when checkbox checked.
    $(".checkbox input:checked").parent().remove();
    // $(this).parent().remove();
  });
  count ++;
};



$(function(){
  $('#butt').on('click',addVal);
});
});




// $('#rm' + count).click(function(){
//   $(this).parent().remove();
// });
