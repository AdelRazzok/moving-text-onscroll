document.addEventListener('scroll', () => {
	document.querySelector('h1').style = `left: ${Math.max(100 - 0.2 * window.scrollY, 1)}vw;`
})