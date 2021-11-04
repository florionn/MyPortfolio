const language = document.getElementById("lang"),
      bio = document.getElementById("bio"),
      englishBio = `My name is Florion Nako. 
      <br> I am a Computer and Mobile Repair Specialist with over five years of experience in the field.
      <br> Currently working for Geek Squad, I strive to deliver the best technical solution for the needs of the costumer. 
      <br> In my free time, I enjoy playing sports and occasionally PC gaming. 
      <br> Since August 2021 I have been studying Web Development through a certificate program at MIT.
      <br>Check out my projects at my github profile "github.com/florionn"`;
      spanishBio = `Mi nombre es Florion Nako.
      <br>Soy especialista en reparación de computadoras y móviles con más de cinco años de experiencia en el campo.
      <br>Actualmente trabajando para Geek Squad, me esfuerzo por ofrecer la mejor solución técnica para las necesidades del cliente.
      <br>En mi tiempo libre, disfruto jugando deportes y ocasionalmente juegos de PC.
      <br>Desde agosto de 2021 he estado estudiando Programacion de Paginas de Internet a través de un programa de certificación en el MIT.
      <br>Entra a mi perfil de GitHub para ver a mis proyectos "github.com/florionn`;
var langState = "English";

function myFunc(){
  if (langState==="English"){
    bio.innerHTML=spanishBio;
    language.innerHTML="English";
    langState="Spanish";
  }
  else{
    bio.innerHTML=englishBio;
    language.innerHTML="Spanish";
    langState="English";
  }
}