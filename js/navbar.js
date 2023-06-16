var navbar = document.getElementById("navbar-mobile");
var openNav = document.getElementById("open-nav-links");
var closeNav = document.getElementById("close-nav-links");
var navMenu = document.getElementById("nav--links");
$(navMenu).slideUp('fast');
$(openNav).addClass('d-inline');
$(closeNav).addClass('d-none');

openNav.onclick = function() {
	navMenu.style.maxHeight = "100%";
	$(openNav).removeClass('d-inline');
	$(openNav).addClass('d-none');
	$(closeNav).removeClass('d-none');
	$(closeNav).addClass('d-inline');
	$(navMenu).slideDown('slow');
	$('.project-title').css('margin-top', '120px');
	$('.project-title').css('transition', 'all 1s');
}
closeNav.onclick = function() {
	$(closeNav).removeClass('d-inline');
	$(closeNav).addClass('d-none');
	$(openNav).removeClass('d-none');
	$(openNav).addClass('d-inline');
	$('.project-title').css('margin-top', '0px');

	$(navMenu).slideUp("slow");
}