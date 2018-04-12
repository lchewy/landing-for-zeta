$(function() {

  var form2 = $("#form2");

  $(form2).validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      city: {
        required: true
      },
      state: {
        required: true
      },
      income: {
        required: true
      }
    }
  });
});
