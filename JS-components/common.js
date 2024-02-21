
  $(document).ready(function() {
    // Function to open sign-in modal
    function openSignInModal() {
        $.ajax({
            url: "../html-components/signIn.html", 
            success: function(data) {
                $('#modalContainer').html(data);
                $('#modalContainer').show();
                $("#signInModal").fadeIn();
            }
        });
    }
    // Event listener for sign-in button click
    $('#openSignInModalBtn').click(openSignInModal);
});