const works = {
    "task1": { "title": "Task 1", "url": "works/task1/index.html" },
    "task2": { "title": "Task 2", "url": "works/task2/index.html" },
    "task3": { "title": "Task 3", "url": "works/task3/index.html" },
};

// Function to dynamically create links for projects
function loadProjectLinks() {
    let container = document.querySelector(".project-links");
    container.innerHTML = ""; // Clear existing content

    for (let key in works) {
        let link = document.createElement("a");
        link.textContent = works[key].title;
        link.href = "#"; // Prevent default navigation
        link.classList.add("project-link");
        link.dataset.project = key;
        link.onclick = function (event) {
            event.preventDefault();
            loadProject(works[key].url);
        };
        container.appendChild(link);
    }
}

// Function to update the iframe source dynamically
function loadProject(url) {
    let frame = document.getElementById("projectFrame");
    let loading = document.querySelector(".loading");

    if (frame) {
        loading.classList.add("active");
        frame.src = url;
        console.log(`Updated iframe source to: ${url}`);

        frame.onload = function() {
            loading.classList.remove("active");
        };
    } else {
        console.error("Iframe not found!");
    }
}

// Load project links when the page loads
window.onload = function () {
    loadProjectLinks();
};