const postedContent = document.querySelector(".posted");
const purchasedContent = document.querySelector(".purchased");
const postedTab = document.querySelector(".posted-tab");
const purchasedTab = document.querySelector(".purchased-tab");

// posted / purchased tabs functionality
function openPosted() {
  postedContent.style.display = "block";
  purchasedContent.style.display = "none";
  postedTab.classList.add("active-profile-tab");
  purchasedTab.classList.remove("active-profile-tab");
}

function openPurchased() {
  purchasedContent.style.display = "block";
  postedContent.style.display = "none";
  purchasedTab.classList.add("active-profile-tab");
  postedTab.classList.remove("active-profile-tab");
}
