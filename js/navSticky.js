window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    let viewportHeight = window.innerHeight * 0.8;;

    if (window.scrollY > viewportHeight) {
        navbar.style.position = 'fixed';
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '2px 0 4px 0 rgba(0, 0, 0, 0.4)'
        navbar.classList.add('navbar-appear');
        navbar.querySelectorAll('a').forEach(a => {
            a.style.color = '#000000'
        })
    } else {
        navbar.style.position = 'absolute';
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = '2px 0 4px 0 rgba(0, 0, 0, 0)'
        navbar.classList.remove('navbar-appear');
        navbar.querySelectorAll('a').forEach(a => {
            a.style.color = '#ffffff'
        })
    }
});