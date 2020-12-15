(() => {
	const IMAGES = document.querySelectorAll(".thumb");
	let imageActive = false;
	let normalImage;
	let bigImage;

	IMAGES.forEach(image => image.addEventListener("click", () => {
		handleImage(image);
	}));

	const handleImage = image => {
		if (!imageActive) openImage(image);
		else if (imageActive) closeImage(image);
	};
	
	const openImage = image => {
		imageActive = true;
		setImageSrc(image);
		image.parentNode.classList.add("is-active");
	};
	
	const closeImage = image => {
		imageActive = false;
		setImageSrc(image);
		image.parentNode.classList.remove("is-active");
	};

	const setImageSrc = image => image.setAttribute("src", getImageSrc(image));
		
	const getImageSrc = image => {
		let normalImage = image.getAttribute("data-thumb");
		let bigImage = image.getAttribute("data-big");
		
		if (imageActive) return bigImage;
		else if (!imageActive) return normalImage;
	};
})();