document.addEventListener('DOMContentLoaded', () => {
	const video = document.getElementById('video');
	const button = document.getElementById('soundToggle');

	// videoとbuttonが存在するページだけ実行
	if (video && button) {
		button.addEventListener('click', () => {
			video.muted = !video.muted;
			button.textContent = video.muted ? '♪OFF' : '♪ON';
		});
	}

	// ハンバーガーメニュー
	const hamburger = document.querySelector('.hamburger-overlay');
	const nav = document.querySelector('.nav-overlay');

	if (hamburger && nav) {
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			nav.classList.toggle('active');

			const isOpen = hamburger.classList.contains('active');
			hamburger.setAttribute('aria-expanded', isOpen);
			nav.setAttribute('aria-hidden', !isOpen);

			document.body.style.overflow = isOpen ? 'hidden' : '';
		});

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && nav.classList.contains('active')) {
				hamburger.classList.remove('active');
				nav.classList.remove('active');
				hamburger.setAttribute('aria-expanded', false);
				nav.setAttribute('aria-hidden', true);
				document.body.style.overflow = '';
			}
		});
	}
});

/*aタグ別タブリンク化*/
document.addEventListener("DOMContentLoaded", () => {
	const linksInSnsBox = document.querySelectorAll(".sns-box a");

	linksInSnsBox.forEach(link => {
		link.setAttribute("target", "_blank");
		link.setAttribute("rel", "noopener noreferrer");
	});
});
