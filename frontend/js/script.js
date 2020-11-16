

// // $('.myButton').pickadate()
// // $(function (){ 
// //     $('.myButton').pickadate();
// // })
// // $('.myButton').pickatime()


// moment().format("MMM Do YY");
  $(document).ready(function() {
    // page is now ready, initialize the calendar...
    $('#calendar').fullCalendar({
      weekends: true
    });
  });
  $('#calendar').fullCalendar({
    dayClick: function(date, jsEvent, view) {
        // $('.timepicker').pickatime()
        alert("Selected Date:"+date._d)
     }});
    

    //  $('#calendar').fullCalendar({
    //     dayClick: function(date, jsEvent, view) {
    //         // $('.timepicker').pickatime()
    //       alert('you have clicked '+moment().format('ll'));
    //      }});
        
//   var calendar = $('#calendar').fullCalendar('getCalendar');

// calendar.on('dayClick', function(date, jsEvent, view) {
//   console.log('clicked on ' + date.format());
// });
//   setTimeout(() => {
//     var input = $('.datepicker').pickadate();
//     var picker = input.pickadate('picker');
//     picker.on('open', function() {
//       console.log('Opened.. and here I am!');
//     })
//     $('button').on('click', function(event) {
//       event.stopPropagation();
//       picker.open();
//     });
//     $('.timepicker').pickatime({
//       twelvehour: false,
//       donetext: 'Done',
//       beforeShow: function() {
//         activeElement = $(document.activeElement)
//         activeForm = activeElement.closest('form')[0]
  
//         // Remove existing validation errors
//         activeForm.ClientSideValidations.removeError(activeElement)
  
//         // Prevent a validation error occurring when element un-focusses
//         activeElement.disableClientSideValidations();
//       },
//       afterDone: function() {
//         activeElement = $(document.activeElement)
//         $(activeElement).enableClientSideValidations();
//       }
//     });
//   }, 1000);