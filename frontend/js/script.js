//initialising calendar
var timeDropDown = document.getElementById('myDIV').innerHTML;
$('#calendar').fullCalendar({
  firstDay: 1, //setting first day to monday instead of default 0, sunday
  dayClick: function(date, jsEvent, view) {
    //when you click on the day, it will
    alert("Selected Date:"+date._d + timeDropDown)
    timeSelector()
  }
});

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