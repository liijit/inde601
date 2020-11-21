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