var x = 0;
var count = " ";
var html_cont = "";
  function addcard(){      
      x += 1;
    html_cont = "<div class=\"card\" id=\"" + x +"\" style=\"width: 12rem;\"> <div class=\"card-body\"> <h5 class=\"card-title\">User" + x + " </h5> <a href=\"#\" class=\"btn btn-primary btn-sm show\" >Show</a> <b class=\"btn btn-danger btn-sm\" id=\"del\">del</b> </div> </div>";

   debugger
      count += html_cont;
    $(".main_div").html(count);

  }
  // debugger
  $(function(){
      debugger
      $(".main_div").on("click", "#del", function(){
          // alert("are you sure?");
          debugger
          var content = $(this).parent().parent().html();
          count = count.replace(content, "");   
          $(this).parent().hide();  
             
      });

       $(".main_div").on("click", ".show", function(){
          let which_user = $(this).parent().find(".card-title").text();
          alert("you have clicked " + which_user );
       });
  });