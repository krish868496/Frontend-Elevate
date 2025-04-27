const addBlog = document.querySelector("#addBlog");
const container = document.querySelector("#container");
const title = document.querySelector("#title");
const blogListing = document.querySelector("#blogListing");
const form = document.querySelector("#form");
const editBtns = document.querySelectorAll(".editBtn");
let formOpen = false;
let blogs = [];

// When page loads, fetch and show blogs from localStorage
document.addEventListener("DOMContentLoaded", function () {
  const savedBlogs = localStorage.getItem("blogs");

  if (savedBlogs) {
    blogs = JSON.parse(savedBlogs);
    renderBlogs();
  }
});

addBlog.addEventListener("click", addNewBlogButton);
function addNewBlogButton() {
  if (formOpen) {
    formOpen = false;
    addBlog.innerText = "Add Blog";
    blogListing.classList.remove("hidden");
    form.classList.add("hidden");
  } else {
    formOpen = true;
    addBlog.innerText = "Close";
    blogListing.classList.add("hidden");
    form.classList.remove("hidden");
  }

  const titleInput = document.querySelector("#titleInput");
  const contentInput = document.querySelector("#contentInput");
  const submitBtn = document.querySelector("#submitBtn");

  submitBtn.addEventListener(
    "click",
    function (e) {
      e.preventDefault(); // prevent page refresh on form submit

      const titleValue = titleInput.value;
      const contentValue = contentInput.value;
      if (!titleValue || !contentValue) {
        alert("Please fill in all fields.");
        return;
      }

      addNewBlog(titleValue, contentValue);

      blogListing.classList.remove("hidden");
      form.classList.add("hidden");

      // Optionally clear input fields
      titleInput.value = "";
      contentInput.value = "";
    },
    { once: true }
  ); // to prevent multiple event listeners
}

// render blogs
function addNewBlog(titleValue, contentValue) {
  blogs.push({ id: Date.now(), titleValue, contentValue });
  saveBlog();
}

function saveBlog() {
  localStorage.setItem("blogs", JSON.stringify(blogs));
  renderBlogs();
}

function renderBlogs() {
  blogListing.innerHTML = blogs
    .map((blog) => {
      return `
        <div class="blogPost" id="${blog.id}" style="border: 1px solid #ddd; padding: 16px; margin-bottom: 16px; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="margin-bottom: 8px; font-size: 24px; color: #333;">${blog.titleValue}</h2>
          <p style="margin-bottom: 16px; font-size: 16px; color: #666;">${blog.contentValue}</p>
          <div style="display: flex; gap: 8px;">
            <button class="editBtn" style="padding: 8px 12px; background-color: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer;">Edit</button>
            <button class="deleteBtn" style="padding: 8px 12px; background-color: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
          </div>
        </div>
      `;
    })
    .join("");
}


// edit blog 
blogListing.addEventListener("click", function (e) {
  // Check if the clicked element is an edit button
  if (e.target.classList.contains("editBtn")) {
    const blogId = e.target.closest(".blogPost").id;
    const blog = blogs.find((blog) => blog.id == blogId);

    if (formOpen) {
      formOpen = false;
      addBlog.innerText = "Add Blog";
      blogListing.classList.remove("hidden");
      form.classList.add("hidden");
    } else {
      formOpen = true;
      addBlog.innerText = "Close";
      blogListing.classList.add("hidden");
      form.classList.remove("hidden");
    }

    const titleInput = document.querySelector("#titleInput");
    const contentInput = document.querySelector("#contentInput");
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.innerText = "Update Blog";

    // Set form fields with the current blog values
    titleInput.value = blog.titleValue;
    contentInput.value = blog.contentValue;

    // Handle the form submission to update the blog
    submitBtn.addEventListener(
      "click",
      function (e) {
        e.preventDefault(); // Prevent page refresh on form submit

        const titleValue = titleInput.value;
        const contentValue = contentInput.value;

        if (!titleValue || !contentValue) {
          alert("Please fill in all fields.");
          return;
        }

        // Update the specific blog
        blogs = blogs.map((b) =>
          b.id === blog.id
            ? { ...b, titleValue: titleValue, contentValue: contentValue }
            : b
        );

        saveBlog(); // Save the updated blogs to localStorage
        renderBlogs(); // Re-render the updated blogs

        blogListing.classList.remove("hidden");
        form.classList.add("hidden");

        // Optionally clear input fields
        titleInput.value = "";
        contentInput.value = "";
      },
      { once: true }
    );
  }
});


// delete blog 
blogListing.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    const blogId = e.target.closest(".blogPost").id;
    console.log("blogId", blogId);

    blogs = blogs.filter((blog) => blog.id != blogId); // update blogs array
    saveBlog(); // save updated blogs to localStorage
    renderBlogs(); // re-render the updated list
  }
});

