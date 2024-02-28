// code to show Awards section
       // Create an array of award images
       var awardsImages = [
        "colorado-parenting-family-fav2021.png",
        "bay-area-parent-2019.jpeg",
        "mla-swim-lessons-winner-2020-250x250.png",
        "colorado-parenting-family-fav2019.jpeg",
        "website-parenting-oc-2019.jpeg",
        "colorado-parenting-family-fav2020.png",
        "bay-area-parent-gold2020.png",
        "gold-daisy-award-finalist-2018.jpeg",
        "best-of-la-kids-winner.jpeg",
        "best-colorado-community-media-2021.jpeg",
        "best-of-the-best-2018.jpeg",
    ];
    // Get the ul element by its id
    var ul = document.getElementById("awardsImage");
    
    // Iterate through the array and create list items with images
    awardsImages.forEach(function(imageSrc) {
        var li = document.createElement("li");
        li.className = "awardsImage";
    
        var img = document.createElement("img");
        img.src = "../images/awards/" + imageSrc;
        img.alt = "Awards " + imageSrc.split('-').slice(1, -1).join(' ');
    
        // Append the image to the list item
        li.appendChild(img);
    
        // Append the list item to the ul
        ul.appendChild(li);
    })

    /////// modal code ///////
    
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