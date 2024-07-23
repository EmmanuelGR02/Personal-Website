
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
});


