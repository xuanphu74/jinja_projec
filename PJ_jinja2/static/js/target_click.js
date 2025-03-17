// window.onload = function () {
// 	setupMenuHighlighting();
// };

export function setupMenuHighlighting() {
	// Get current page path
	const currentPath = window.location.pathname;

	// Remove active class from all menu items
	document.querySelectorAll(".menu-item").forEach((item) => {
		item.classList.remove("active");
	});

	// Add active class to current page menu item
	document.querySelectorAll(".menu-item").forEach((item) => {
		const href = item.getAttribute("href");
		if (currentPath.includes(href)) {
			item.classList.add("active");
		}
	});

	// If we're on the dashboard page
	if (
		currentPath.includes("dashboard.html") ||
		currentPath.endsWith("/dashboard/")
	) {
		document.querySelector('a[href="dashboard.html"]').classList.add("active");
	}
}

// import { setupMenuHighlighting } from './show.js';
