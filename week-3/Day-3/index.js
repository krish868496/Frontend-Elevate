// DOM Elements
const elements = {
  addBlogBtn: document.querySelector("#addBlog"),
  container: document.querySelector("#container"),
  title: document.querySelector("#title"),
  blogListing: document.querySelector("#blogListing"),
  form: document.querySelector("#form"),
  titleInput: document.querySelector("#titleInput"),
  contentInput: document.querySelector("#contentInput"),
  submitBtn: document.querySelector("#submitBtn"),
  filter: document.querySelector("#filter"),
  filters: document.querySelector("#filters")
};

// State
let state = {
  formOpen: false,
  isEditing: false,
  currentBlogId: null,
  blogs: [],
  filterDropDown: ["Technology", "Health", "Travel", "Food"]
};

// Local Storage Handlers
const storage = {
  save() {
    localStorage.setItem("blogs", JSON.stringify(state.blogs));
  },
  load() {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      state.blogs = JSON.parse(savedBlogs);
    }
  },
};

// UI Handlers
const ui = {
  toggleForm(open) {
    state.formOpen = open;
    elements.addBlogBtn.innerText = open ? "Close" : "Add Blog";
    elements.blogListing.classList.toggle("hidden", open);
    elements.form.classList.toggle("hidden", !open);
  },

  resetForm() {
    elements.titleInput.value = "";
    elements.contentInput.value = "";
    elements.submitBtn.innerText = "Submit";
    state.isEditing = false;
    state.currentBlogId = null;
  },

  populateFormForEdit(blog) {
    elements.titleInput.value = blog.titleValue;
    elements.contentInput.value = blog.contentValue;
    elements.submitBtn.innerText = "Update Blog";
    state.isEditing = true;
    state.currentBlogId = blog.id;
  },

  renderBlogs(filter = null) {

   let blogsToRender = state.blogs;

   if (filter) {
     blogsToRender = state.blogs.filter((blog) => blog.filterValue === filter);
   }
   console.log("blogs to ", blogsToRender)

   elements.blogListing.innerHTML = blogsToRender.map(
     (blog) => `
        <div class="blogPost" id="${blog.id}" style="border: 1px solid #ddd; padding: 16px; margin-bottom: 16px; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="margin-bottom: 8px; font-size: 24px; color: #333;">${blog.titleValue}</h2>
          <p style="margin-bottom: 16px; font-size: 16px; color: #666;">${blog.contentValue}</p>
          <div style="display: flex; gap: 8px;">
            <button class="editBtn" style="padding: 8px 12px; background-color: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer;">Edit</button>
            <button class="deleteBtn" style="padding: 8px 12px; background-color: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
          </div>
        </div>
      `
   ).join("");
  },
};

// Blog Operations
const blogOperations = {
  add(titleValue, contentValue, filterValue) {
    state.blogs.push({
      id: Date.now(),
      titleValue,
      contentValue,
      filterValue
    });
    storage.save();
    ui.renderBlogs();
  },

  update(id, titleValue, contentValue) {
    state.blogs = state.blogs.map((blog) =>
      blog.id === id ? { ...blog, titleValue, contentValue } : blog
    );
    storage.save();
    ui.renderBlogs();
  },

  delete(id) {
    state.blogs = state.blogs.filter((blog) => blog.id != id);
    storage.save();
    ui.renderBlogs();
  },
};

// Event Handlers
function handleFormSubmit(e) {
  e.preventDefault();

  const titleValue = elements.titleInput.value.trim();
  const contentValue = elements.contentInput.value.trim();
  const filterValue = elements.filter.value;

  if (!titleValue || !contentValue || !filterValue) {
    alert("Please fill in all fields.");
    return;
  }

  if (state.isEditing) {
    blogOperations.update(state.currentBlogId, titleValue, contentValue, filterValue);
  } else {
    blogOperations.add(titleValue, contentValue, filterValue);
  }

  ui.toggleForm(false);
  ui.resetForm();
}

function handleAddBlogClick() {
  ui.toggleForm(!state.formOpen);
  if (!state.formOpen) {
    ui.resetForm();
  }
}

function handleBlogListingClick(e) {
  const blogPost = e.target.closest(".blogPost");
  if (!blogPost) return;

  const blogId = parseInt(blogPost.id);

  if (e.target.classList.contains("editBtn")) {
    const blog = state.blogs.find((blog) => blog.id === blogId);
    ui.toggleForm(true);
    ui.populateFormForEdit(blog);
  } else if (e.target.classList.contains("deleteBtn")) {
    if (confirm("Are you sure you want to delete this blog post?")) {
      blogOperations.delete(blogId);
    }
  }
}

// Initialize Application
function initApp() {
  // Load blogs from localStorage
  storage.load();
  ui.renderBlogs();
    state.filterDropDown.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      elements.filter.appendChild(option);
    });
    state.filterDropDown.map((item) => {
      const button = document.createElement("button");
      button.setAttribute("data-filter", item);
      button.className =
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 filter-button";
      button.innerText = item;
      elements.filters.appendChild(button);
    })

    document.querySelectorAll(".filter-button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const filterValue = e.target.getAttribute("data-filter");
        ui.renderBlogs(filterValue); 
      });
    });

    

  // Add event listeners
  elements.addBlogBtn.addEventListener("click", handleAddBlogClick);
  elements.submitBtn.addEventListener("click", handleFormSubmit);
  elements.blogListing.addEventListener("click", handleBlogListingClick);
}

// Start the application when the DOM is loaded
document.addEventListener("DOMContentLoaded", initApp);
