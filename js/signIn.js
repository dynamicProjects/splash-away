$(document).ready(function(){
    // Open modal box when button is clicked
    $("#openModalBtn").click(function(){
        $("#signInModal").fadeIn();
    });

    // Close modal box when close button is clicked
    $(".close").click(function(){
        $("#signInModal").fadeOut();
        $('#modalContainer').hide();
    });

    // Close modal box when clicking outside of the modal content
    $(window).click(function(event) {
        if (event.target.id == 'signInModal') {
            $("#signInModal").fadeOut();
            $('#modalContainer').hide();
        }
    });

    // Prevent modal box from closing when clicking inside the modal content
    $(".modal-content").click(function(event){
        event.stopPropagation();
    });

    // Close modal box when pressing the escape key
    $(document).keydown(function(event) { 
        if (event.keyCode == 27) { 
            $("#signInModal").fadeOut();
        }
    });
});