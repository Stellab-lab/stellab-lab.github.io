const bg = document.querySelector('.moving-img');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;

bg.addEventListener('mousemove', (e) => {
	const mouseX = e.clientX / windowWidth;
	const mouseY = e.clientY / windowHeight;

	bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
$(".centered").css("top", $(".moving-img").offset().top + 200);

bg.addEventListener('mouseout', (e) => {
	bg.style.transform = `none`;
	bg.style.transition = "all 0.5s";

});

const bg2 = document.querySelector('.moving-img2');
const windowWidth2 = window.innerWidth / 5;
const windowHeight2 = window.innerHeight / 5 ;

bg2.addEventListener('mousemove', (e) => {
	const mouseX2 = e.clientX / windowWidth2;
	const mouseY2 = e.clientY / windowHeight2;

	bg2.style.transform = `translate3d(-${mouseX2}%, -${mouseY2}%, 0)`;
});
$(".centered2").css("top", $(".moving-img2").offset().top + 200);

bg2.addEventListener('mouseout', (e) => {
	bg2.style.transform = `none`;
	bg2.style.transition = "all 0.5s";

});