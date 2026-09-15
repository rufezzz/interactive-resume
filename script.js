const filterButtons = document.querySelectorAll(".skill-filters button");
const skills = document.querySelectorAll(".skill-list span");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.filter;

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        skills.forEach(function(skill) {

            const skillCategory = skill.dataset.category;

            if (selectedCategory === "all" || selectedCategory === skillCategory) {
                skill.style.display = "inline-block";
            } else {
                skill.style.display = "none";
            }

        });

    });

});