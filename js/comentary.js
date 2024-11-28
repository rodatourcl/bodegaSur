// Seleccionar el formulario y la lista de comentarios
const commentForm = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list');

// Manejar el evento de envío del formulario
commentForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto

  // Obtener los valores ingresados por el usuario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  // Crear un nuevo elemento para el comentario
  const commentItem = document.createElement('div');
  commentItem.classList.add('comment-item');
  commentItem.innerHTML = `
    <strong>${name}</strong> (${email})<br>
    <p>${comment}</p>
  `;

  // Agregar el comentario a la lista de comentarios
  commentsList.appendChild(commentItem);

  // Limpiar el formulario
  commentForm.reset();
});