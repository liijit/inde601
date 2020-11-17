//initialising calendar

 var timeDropDown;
  $('#calendar').fullCalendar({
    firstDay: 1, //setting first day to monday instead of default 0, sunday
    dayClick: function(date, jsEvent, view) {
        // $('.timepicker').pickatime()
        //when you click on the day, it will display 
      alert("Selected Date:"+date._d)
    //   timeDropDown();
     }});


     new Picker(document.querySelector('.js-time-picker'), {
        format: 'HH:mm',
        headers: true,
        text: {
          title: 'Pick a time',
        },
      });
    
// (function($) {
//     $(function() {
//         $('input.timepicker').timepicker();
//         console.log(timepicker);
//     });
// });
  
    //  function timeDropDown(){
    //      //select times in here

    //  }
    // $(document).ready(function(){
    //     $('input.timepicker').timepicker({});
    // });









     $('.datepicker').pickadate()

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