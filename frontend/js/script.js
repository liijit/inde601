//initialising calendar

 var timeDropDown = document.getElementById('myDIV').innerHTML;
  $('#calendar').fullCalendar({
    firstDay: 1, //setting first day to monday instead of default 0, sunday
    dayClick: function(date, jsEvent, view) {
        // $('.timepicker').pickatime()
        //when you click on the day, it will display 
      alert("Selected Date:"+date._d + timeDropDown)
      // alert("Times available"+(document.getElementById('myDIV').value))
    //   timeDropDown();
    timeSelector()
     }});
   
    //  function myFunction() {
    //   var x = document.getElementById("myDIV");
    //   if (x.style.display === "none") {
    //     x.style.display = "block";
    //   } else {
    //     x.style.display = "none";
    //   }
    // }
    function timeSelector() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
<<<<<<< HEAD
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
=======
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


$(".timepicker").wickedpicker({
	
  twentyFour: true,  //Display 24 hour format, defaults to false
  upArrow: 'wickedpicker__controls__control-up',  //The up arrow class selector to use, for custom CSS
  downArrow: 'wickedpicker__controls__control-down', //The down arrow class selector to use, for custom CSS
  close: 'wickedpicker__close', //The close class selector to use, for custom CSS
  hoverState: 'hover-state', //The hover state class to use, for custom CSS
  title: 'Timepicker', //The Wickedpicker's title,
  // showMinutes: false, //Whether or not to show seconds,
  // showSeconds: false, //Whether or not to show seconds,
  // timeSeparator: ' : ', // The string to put in between hours and minutes (and seconds)
  // secondsInterval: 1, //Change interval for seconds, defaults to 1,
  // minutesInterval: 30, //Change interval for minutes, defaults to 1
  // beforeShow: null, //A function to be called before the Wickedpicker is shown
  // afterShow: null, //A function to be called after the Wickedpicker is closed/hidden
  // show: null, //A function to be called when the Wickedpicker is shown
  // clearable: true, //Make the picker's input clearable (has clickable "x")

  showMinutes: false, //Whether or not to show seconds,      
  setMinutes: true,      
  now: '9:00',       
  timeSeparator: ' : ', // The string to put in between hours and minutes (and seconds)  
  secondsInterval: 1, //Change inter val for seconds, defaults to 1,    
  minutesInterval: 30,
});

var timepickers = $('.timepicker').wickedpicker(); 
console.log(timepickers.wickedpicker('time', 1)); //JS console: time of timepicker-two
>>>>>>> e05295a9ea1cb75d10f68aaefd150ad05b219095
