window.addEventListener('scroll', function() {
    var celula = document.querySelector('.celula');
    var scrollPosition = window.scrollY;

    var translateYValue = -5;

    // Aplicar a classe "active" quando a posição de rolagem atingir a seção
    if (scrollPosition > celula.offsetTop - window.innerHeight / 2) {
        celula.classList.add('active');
    } else {
        celula.classList.remove('active');
    }
});

const header = document.querySelector('.header');

function toggleHeaderBackground() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', toggleHeaderBackground);

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  function handleScroll() {
    const animateFromLeftElements = document.querySelectorAll('.animate-from-left');
    const animateFromRightElements = document.querySelectorAll('.animate-from-right');
    
    animateFromLeftElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('animated');
      }
    });
  
    animateFromRightElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('animated');
      }
    });
  
    // Remove o evento de scroll após as animações terem sido aplicadas
    window.removeEventListener('scroll', handleScroll);
  }
  
  window.addEventListener('scroll', handleScroll);
  
/*------Scroll Revel-------*/

 window.sr = ScrollReveal({ reset: true});

 sr.reveal('.fundo', {duration: 400});
 sr.reveal('.content-text ', {
    duration: 1000, 
    origin: 'bottom',
    distance: '100px',
    easing: 'ease-out',
    delay: 500
});
 
 
 
 /*------Welcome------*/
 sr.reveal('.welcome', {duration: 200});
 sr.reveal('.content-welcome', {duration: 2000});
 sr.reveal('.img-piva', {
    duration: 1000,
    origin:'right',
    distance: '100px',
    easing: 'ease-out',
    delay: 500   
  });

  sr.reveal('.content-welcome-text', {
    duration: 1000,
    origin:'top',
    distance: '100px',
    easing: 'ease-out',
    delay: 500   
  });

  sr.reveal('.content-inner', {
    duration: 1000,
    origin:'bottom',
    distance: '100px',
    easing: 'ease-out',
    delay: 500   
  });

  sr.reveal('.atividades', {
    duration: 400,
  });

  sr.reveal('.atividades-text', {
    duration: 700,
    origin:'top',
    distance: '100px',
    easing: 'ease-out',
    delay: 500   
  });

  sr.reveal('.avisos', {
    duration: 1000,
    origin:'top',
    distance: '100px',
    easing: 'ease-out',
    delay: 500   
  });

  sr.reveal('.online', {
    duration: 1000,
    origin:'bottom',
    distance: '100px',
    easing: 'ease-out',
    delay: 500   
  });

  sr.reveal('.missoes', {
    duration: 1000,
    origin:'top',
    distance: '100px',
    easing: 'ease-out',
    delay: 500   
  });

  sr.reveal('.forms', {
    duration: 1000,
    origin:'bottom',
    distance: '100px',
    easing: 'ease-out',
    delay: 500   
  });


  sr.reveal('.forms', {
    duration: 1000,
    origin:'bottom',
    distance: '100px',
    easing: 'ease-out',
    delay: 500   
  });


  sr.reveal('.evento', {
    duration: 1000 
  });

  sr.reveal('.app-celular', {
    duration: 700,
    origin:'right',
    distance: '100px',
    easing: 'ease-out',
    delay: 500   
  });



var menu = document.getElementById('menu');
var nav = document.getElementById('nav-mobile');


menu.addEventListener ('click', abrefechaMenu(){
  if ()
})
