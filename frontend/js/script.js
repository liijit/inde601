//initialising calendar
// var timeDropDown = document.getElementById('myDIV').innerHTML;
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
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//Change Font Sizes accoring to buttons 
  function smallerH1() {
    document.getElementById("fontH1").style.fontSize = "1.2em";
  }

  function largerH1() {
    document.getElementById("fontH1").style.fontSize = "1.8em";
  }

  function normalH1() {
    document.getElementById("fontH1").style.fontSize = "1.5em";
  }


  function smallerH2() {
    document.getElementById("fontH2").style.fontSize = "0.8em";
  }

  function largerH2() {
    document.getElementById("fontH2").style.fontSize = "1.4em";
  }

  function normalH2() {
    document.getElementById("fontH2").style.fontSize = "1.2em";
  }


  function smallerp() {
    document.getElementById("fontp").style.fontSize = "0.6em";
  }

  function largerp() {
    document.getElementById("fontp").style.fontSize = "1em";
  }


  function normalp() {
    document.getElementById("fontp").style.fontSize = "0.8em";
  }

//load all elements with "accordion" element
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  //apply addeventlistener to each element
  acc[i].addEventListener("click", function() {
    //set toggle active flag
    this.classList.toggle("active");
    for (let ele of acc) {
    	if (ele.nextElementSibling.style.display) {
        //if current element active, set the previous element to none
        	ele.nextElementSibling.style.display = "none";
        }
    }
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = "none";
    } else {
      panel.style.display = "block"
      console.log(this.classList.toggle)

      if (this.classList.toggle === "active") {
        this.classList.toggle("active")
      }
    } 
  });
}
