const addBlog = document.querySelector("#addBlog");
const container = document.querySelector("#container");
const title = document.querySelector("#title");
const blogListing = document.querySelector("#blogListing");
const form = document.querySelector("#form");
const close = document.querySelector("#close");
const editBtns = document.querySelectorAll(".editBtn");

// When page loads, fetch and show blogs from localStorage
document.addEventListener("DOMContentLoaded", function () {
  const savedBlogs = localStorage.getItem("blog");
  if (savedBlogs) {
    blogListing.innerHTML = savedBlogs;
  }
});

addBlog.addEventListener("click", function () {
  blogListing.classList.add("hidden");
  form.classList.remove("hidden");

  const titleInput = document.querySelector("#titleInput");
  const contentInput = document.querySelector("#contentInput");
  const submitBtn = document.querySelector("#submitBtn");

  submitBtn.addEventListener(
    "click",
    function (e) {
      e.preventDefault(); // prevent page refresh on form submit

      const titleValue = titleInput.value;
      const contentValue = contentInput.value;

      const newBlog = `<div class="bg-white shadow-md rounded-lg p-4">
          <h2 class="text-xl font-bold">${titleValue}</h2>
          <p class="text-gray-700">${contentValue}</p>
          <button class="mt-2 bg-blue-500 text-white py-1 px-3 rounded editBtn">
            Edit
          </button>
        </div>`;

      blogListing.innerHTML += newBlog;

      // Save updated blogs to localStorage
      localStorage.setItem("blog", blogListing.innerHTML);

      blogListing.classList.remove("hidden");
      form.classList.add("hidden");

      // Optionally clear input fields
      titleInput.value = "";
      contentInput.value = "";
    },
    { once: true }
  ); // to prevent multiple event listeners
});

close.addEventListener("click", function () {
  blogListing.classList.remove("hidden");
  form.classList.add("hidden");
});


editBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
        blogListing.classList.add("hidden");
        form.classList.remove("hidden");
        
        const titleInput = document.querySelector("#titleInput");
        const contentInput = document.querySelector("#contentInput");
        const submitBtn = document.querySelector("#submitBtn");
        
        // Populate the input fields with the current blog content
        const blogContent = btn.parentElement;
        titleInput.value = blogContent.querySelector("h2").innerText;
        contentInput.value = blogContent.querySelector("p").innerText;
        
        submitBtn.addEventListener(
        "click",
        function (e) {
                e.preventDefault(); // prevent page refresh on form submit
        
                const updatedBlog = `<div class="bg-white shadow-md rounded-lg p-4">
                <h2 class="text-xl font-bold">${titleInput.value}</h2>
                <p class="text-gray-700">${contentInput.value}</p>
                <button class="mt-2 bg-blue-500 text-white py-1 px-3 rounded editBtn">
                Edit
                </button>
                </div>`;
        
                // Replace the old blog with the updated one
                blogContent.outerHTML = updatedBlog;
        
                // Save updated blogs to localStorage
                localStorage.setItem("blog", blogListing.innerHTML);
        
                blogListing.classList.remove("hidden");
                form.classList.add("hidden");
        
                // Optionally clear input fields
                titleInput.value = "";
                contentInput.value = "";
        },
        { once: true }
        ); // to prevent multiple event listeners
        });

})