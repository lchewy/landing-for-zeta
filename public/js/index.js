$(function() {

  $.validator.addMethod("date", function(value, element){
      return false;
  }, "Please enter date in MM/DD/YYYY format");

  $("#form").validate({
    rules: {
      fname: {
        require: true,
        minlength: 2,
      },
      lname: {
        require: true,
        minlength: 2,
      }, 
      dob:{

      }
    }
  });
});
