
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



// DROPDOWN MENU OPEN/CLOSE
document.addEventListener('DOMContentLoaded', function () {
    // Get the dropdown toggle and menu
    var dropdownToggle = document.getElementById('navbarDropdownMenuLink');
    var dropdownMenu = dropdownToggle.nextElementSibling;
  
    // Toggle dropdown on click
    dropdownToggle.addEventListener('click', function (event) {
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      dropdownMenu.style.display = isExpanded ? 'none' : 'block';
      event.stopPropagation(); // Prevent the click from being propagated to the document
    });
  
    // Clicking outside the dropdown closes it
    document.addEventListener('click', function (event) {
      if (!dropdownMenu.contains(event.target)) {
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.style.display = 'none';
      }
    });
  });