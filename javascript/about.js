document.addEventListener("DOMContentLoaded", function() {
    var skillsTab = document.getElementById("skills_tab");
    var skillsContainer = document.getElementById("skills_container");

    // Initially hide the skills container
    skillsContainer.style.display = "none";

    // Toggle visibility of the skills container when the tab is clicked
    skillsTab.addEventListener("click", function() {
        if (skillsContainer.style.display === "none") {
            skillsContainer.style.display = "block";
        } else {
            skillsContainer.style.display = "none";
        }
    });
});
