var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

function fecha(){
  var fecha_mes = new Date().getMonth()+1;

  switch(fecha_mes){
    case 1:
      mes="Enero";
      break;
    case 2:
      mes="Febrero";
      break;
    case 3:
      mes="Marzo";
      break;
    case 4:
      mes="Abril";
      break;
    case 5:
      mes="Mayo";
      break;
    case 6:
      mes="Junio";
      break;
    case 7:
      mes="Julio";
      break;
    case 8:
      mes="Agosto";
      break;
    case 9:
      mes="Septiembre";
      break;
    case 10:
      mes="Octubre";
      break;
    case 11:
      mes="Noviembre";
      break;
    case 12:
      mes="Diciembre";
      break;
  }

  var fecha_anno = new Date().getYear()+1900;
  var fecha_dia = new Date().getDate();
  document.getElementById("dia").innerHTML = fecha_dia + " de " + mes + " de " + fecha_anno;
}