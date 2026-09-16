const filterButtons = document.querySelectorAll(".skill-filters button");
const skills = document.querySelectorAll(".skill-list span");
const searchInput = document.querySelector("#skill-search");
const noResults = document.querySelector("#no-results");

let selectedCategory = "all";

function filterSkills() {

    const searchText = searchInput.value.toLowerCase();
    let visibleSkills = 0;

    skills.forEach(function(skill) {

        const skillCategory = skill.dataset.category;
        const skillName = skill.textContent.toLowerCase();

        const matchesCategory =
            selectedCategory === "all" || selectedCategory === skillCategory;

        const matchesSearch =
            skillName.includes(searchText);

        if (matchesCategory && matchesSearch) {
            skill.style.display = "inline-block";
            visibleSkills++;
        } else {
            skill.style.display = "none";
        }
    
    });

    if (visibleSkills === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

}

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedCategory = button.dataset.filter;

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filterSkills();

    });

});

searchInput.addEventListener("input", function() {
    filterSkills();
});