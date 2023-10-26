function skillsMember() {
    // Get the modal
    var modal = document.getElementById('skillsModal');

    // Get the button that opens the modal
    var btn = document.getElementById("skillsBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("skillsClose")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
        // console.log("skillsBtn");
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        // console.log("skillsModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}