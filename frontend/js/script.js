

// $('.myButton').pickadate()
// $(function (){ 
//     $('.myButton').pickadate();
// })
// $('.myButton').pickatime()
setTimeout(() => {
    var input = $('.datepicker').pickadate();
    var picker = input.pickadate('picker');
    picker.on('open', function() {
      console.log('Opened.. and here I am!');
    })
    $('button').on('click', function(event) {
      event.stopPropagation();
      picker.open();
    });
    $('.timepicker').pickatime({
      twelvehour: false,
      donetext: 'Done',
      beforeShow: function() {
        activeElement = $(document.activeElement)
        activeForm = activeElement.closest('form')[0]
  
        // Remove existing validation errors
        activeForm.ClientSideValidations.removeError(activeElement)
  
        // Prevent a validation error occurring when element un-focusses
        activeElement.disableClientSideValidations();
      },
      afterDone: function() {
        activeElement = $(document.activeElement)
        $(activeElement).enableClientSideValidations();
      }
    });
  }, 1000);