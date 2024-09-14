
document.addEventListener("DOMContentLoaded", function() {
    var skillsTab = document.getElementById("skills_tab");
    var skillsContainer = document.getElementById("skills_container");
    var tab_text = document.getElementById("skills_tab");

    // Initially hide the skills container
    skillsContainer.style.display = "block";

    // Toggle visibility of the skills container when the tab is clicked
    skillsTab.addEventListener("click", function() {
        if (skillsContainer.style.display === "none") {
            skillsContainer.style.display = "block";
            tab_text.style.color = "black";
            skillsTab.style.background = "white";
            skillsTab.style.border = "2px solid black"
        } else {
            skillsContainer.style.display = "none";
            tab_text.style.color = "white";
            skillsTab.style.background = "black";
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


