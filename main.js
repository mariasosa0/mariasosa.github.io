let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #866A47 ;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #866A47 ;">Estudiante de Ingeniería Biomédica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
