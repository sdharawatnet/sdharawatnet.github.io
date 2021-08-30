// Smooth scroll below using JQuery

$(document).ready(function(){
    let scrollLink = $('.scroll');

    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 20
        },1000)
    })

    // Active link switching
$(window).scroll(function(){
    let scrollBarLoc = $(this).scrollTop();
    scrollLink.each(function(){
        let secOffset = $(this.hash).offset().top;
        if(secOffset <=scrollBarLoc){
            $(this).parent().addClass('active')
        }
    })
})

})



const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;

  