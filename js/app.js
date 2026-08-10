(function () {
	'use strict';

	var grid = document.getElementById('grid');
	var projects = Array.prototype.slice.call(grid.querySelectorAll('.project'));
	var filterInput = document.getElementById('filter');
	var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
	var emptyState = document.getElementById('emptyState');
	var emptyQuery = document.getElementById('emptyQuery');

	var activeCategory = 'all';

	function applyFilters() {
		var query = filterInput.value.trim().toLowerCase();
		var visibleCount = 0;

		projects.forEach(function (project) {
			var matchesCategory = activeCategory === 'all' || project.dataset.category === activeCategory;
			var matchesQuery = !query || project.dataset.name.toLowerCase().indexOf(query) !== -1;
			var show = matchesCategory && matchesQuery;
			project.hidden = !show;
			if (show) visibleCount++;
		});

		var showEmpty = visibleCount === 0;
		emptyState.hidden = !showEmpty;
		if (showEmpty) {
			emptyQuery.textContent = query || (activeCategory !== 'all' ? activeCategory.replace('_', ' ') : '');
		}
	}

	filterInput.addEventListener('input', applyFilters);

	chips.forEach(function (chip) {
		chip.addEventListener('click', function () {
			chips.forEach(function (c) { c.classList.remove('is-active'); });
			chip.classList.add('is-active');
			activeCategory = chip.dataset.filter;
			applyFilters();
		});
	});

	// Staged reveal on scroll — cards fade/lift into place once, the
	// first time they enter the viewport.
	var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReducedMotion || !('IntersectionObserver' in window)) {
		projects.forEach(function (project) { project.classList.add('is-visible'); });
	} else {
		var revealDelay = 0;
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					var el = entry.target;
					setTimeout(function () {
						el.classList.add('is-visible');
					}, revealDelay);
					revealDelay += 60;
					observer.unobserve(el);
				}
			});
		}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

		projects.forEach(function (project) { observer.observe(project); });
	}

	applyFilters();

	// Theme toggle — dark is the default (see the inline <head> script
	// that applies data-theme="light" from localStorage before first
	// paint). Clicking flips the attribute and persists the choice.
	var themeToggle = document.getElementById('themeToggle');

	function currentTheme() {
		return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
	}

	function setTheme(theme) {
		if (theme === 'light') {
			document.documentElement.setAttribute('data-theme', 'light');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}
		themeToggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
		themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
		try { localStorage.setItem('theme', theme); } catch (e) {}
	}

	setTheme(currentTheme());

	themeToggle.addEventListener('click', function () {
		setTheme(currentTheme() === 'light' ? 'dark' : 'light');
	});

	// Cursor ring + dot — two elements trailing the pointer at different
	// speeds (the dot fast, the ring slow), both driven by the same
	// --pointer-x/--pointer-y custom properties set here on every
	// mousemove. Each element's own CSS transition duration on `transform`
	// (see css/styles.css) is what creates the "rubberband" lag — this
	// stays cheap and compositor-only, no per-frame JS animation loop.
	var cursorRing = document.getElementById('cursorRing');
	var cursorDot = document.getElementById('cursorDot');
	var supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

	if (cursorRing && cursorDot && supportsFinePointer && !prefersReducedMotion) {
		var root = document.documentElement;
		var cursorActive = false;

		document.addEventListener('mousemove', function (e) {
			root.style.setProperty('--pointer-x', e.clientX + 'px');
			root.style.setProperty('--pointer-y', e.clientY + 'px');
			if (!cursorActive) {
				cursorActive = true;
				cursorRing.classList.add('is-active');
				cursorDot.classList.add('is-active');
			}
		}, { passive: true });

		document.addEventListener('mouseleave', function () {
			cursorActive = false;
			cursorRing.classList.remove('is-active');
			cursorDot.classList.remove('is-active');
		});
	}
})();
