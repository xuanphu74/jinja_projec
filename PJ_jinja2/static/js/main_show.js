// import { setupMenuHighlighting,updateDashboard } from "./test.js";

// window.onload = function () {
// 	// Add active class handler for menu items
// 	setupMenuHighlighting();
// 	console.log("JavaScript đang chạy!");

// 	// Initialize dashboard data
// 	updateDashboard();

// };
function createDropdownToggle(headerId, dropdownId, chevronId, itemId) {
	const header = document.getElementById(headerId);
	const dropdown = document.getElementById(dropdownId);
	const chevron = document.getElementById(chevronId);
	const item = document.getElementById(itemId);

	header.addEventListener("click", function () {
		dropdown.classList.toggle("show");
		chevron.classList.toggle("up");
		chevron.classList.toggle("right");
		item.classList.toggle("active");
	});
}

createDropdownToggle(
	"analyticHeader",
	"analyticDropdown",
	"analyticChevron",
	"analyticItem"
);
createDropdownToggle("sqlHeader", "sqlDropdown", "sqlChevron", "sqlItem");

createDropdownToggle(
	"orderHeader",
	"orderDropdown",
	"orderChevron",
	"orderItem"
);
createDropdownToggle("userHeader", "userDropdown", "userChevron", "userItem");

createDropdownToggle("blogHeader", "blogDropdown", "blogChevron", "blogItem");

// Xử lý sự kiện cho các mục dropdown
const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach((item) => {
	item.addEventListener("click", function (e) {
		e.stopPropagation(); // Ngăn sự kiện lan lên phần tử cha

		// Bỏ highlight các mục cũ (nếu cần)
		dropdownItems.forEach((i) => i.classList.remove("selected"));

		// Highlight mục được chọn
		this.classList.add("selected");

		// Hiển thị nội dung tương ứng hoặc điều hướng
		// const menuTitle =
		// 	this.closest(".menu-item").querySelector(".menu-title").innerText;
		// const itemText = this.innerText;
		// console.log(`${menuTitle} > ${itemText} selected`);

		// Có thể thêm code để hiển thị nội dung tương ứng ở đây
		// 			document.querySelector(".content-area").innerHTML = `
		// <h2>${menuTitle} > ${itemText}</h2>
		// <p>Nội dung cho ${itemText} sẽ hiển thị ở đây.</p>
		// `;
	});
});
