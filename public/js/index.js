$(function() {
  $.validator.addMethod(
    "date",
    function(value, element) {
      if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value)) {
        return value;
      }
      return false;
    },
    "Please enter date in MM/DD/YYYY format"
  );

  $.validator.addMethod(
    "fiveNum",
    function(value, element) {
      var match = value.match(/\b\d{5}\b/g);
      if (match) {
        return value;
      }
      return false;
    },
    "Please enter a 5 digit Zip Code"
  );

  $.validator.addMethod("validPhone", function(value, element) {
    if (/^\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/.test(value)) {
      return value.match(/([0-9])/g).join("");
    }
    return false;
  }, "Please enter a nine digit phone number");

  $("#form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 2
      },
      lname: {
        required: true,
        minlength: 2
      },
      dob: {
        required: true,
        date: true
      },
      zip: {
        required: true,
        fiveNum: true
      },
      phone: {
        required: true,
        validPhone: true
      }
    }
  });
});
