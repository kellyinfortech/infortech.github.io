document.addEventListener('DOMContentLoaded', function() {
    var modal1 = document.getElementById("serviceBookingForm");
    var btns = document.querySelectorAll(".service-booking-button");
    var span = document.getElementsByClassName("close-button")[0];

    btns.forEach(function(btn) {
        btn.onclick = function() {
            modal1.style.display = "block";
        }
    });

    span.onclick = function() {
        modal1.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    }
});