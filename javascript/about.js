
document.addEventListener("DOMContentLoaded", function() {
    var skillsTab = document.getElementById("skills_tab");
    var skillsContainer = document.getElementById("skills_container");
    var upArrow = document.getElementById("upArrow");
    var downArrow = document.getElementById("downArrow");

    
    // arrow up/down image display logic and skills container
    skillsContainer.style.display = "none";
    upArrow.style.display = "none";
    downArrow.style.display = "block";
    skillsTab.addEventListener("click", function() {
        if (skillsContainer.style.display === "none") {
            skillsContainer.style.display = "block";
            downArrow.style.display = "none";
            upArrow.style.display = "block";
        } else {
            skillsContainer.style.display = "none";
            upArrow.style.display = "none";
            downArrow.style.display = "block";
        }
    });

    var bulletPoint_text = document.getElementById("bulletPoint_text");
    var toolTip = document.getElementById("toolTip");

    // Toggle the visibility of the tooltip when bullet point text is clicked
    bulletPoint_text.addEventListener("click", function(event) {
        toolTip.classList.toggle("visible");
        event.stopPropagation(); // Prevents click from bubbling up
    });

    // Hide tooltip when clicking anywhere else on the page
    document.addEventListener("click", function() {
        toolTip.classList.remove("visible");
    });

    // Prevent hiding the tooltip when clicking inside the tooltip itself
    toolTip.addEventListener("click", function(event) {
        event.stopPropagation();
    });

});


