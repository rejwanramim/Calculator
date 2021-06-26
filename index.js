


function inputNum(num){

   var exNum = $("#result").val()
   $("#result").val(exNum + num)
}

function clearDisplay(){
    $("#result").val('')
}

function calculate(){

  var equal = eval($("#result").val()) 
  $("#result").val(equal)
}

function delNum(){

    var currentvalue = $("#result").val()

      if(currentvalue != ''){
        $("#result").val(currentvalue.slice(0,-1));
      }
}