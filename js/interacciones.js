/* ==============================
   FUNCIONALIDAD DE "ME GUSTA"
============================== */

// Selecciona todos los botones de 'Me gusta'
const likeButtons = document.querySelectorAll('.btn-like');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Encuentra el contador dentro del botón
    const likeCount = button.querySelector('.like-count');
    
    // Convierte a número y suma 1
    let currentCount = parseInt(likeCount.textContent);
    likeCount.textContent = currentCount + 1;
    
    // Anima el botón (por ejemplo, escala)
    button.style.transform = 'scale(1.1)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 200);
  });
});

/* ==============================
   FUNCIONALIDAD DE COMENTARIOS
============================== */

// Selecciona todos los botones de 'Comentar'
const commentButtons = document.querySelectorAll('.btn-comment');

commentButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Encuentra el input y lista de comentarios en este bloque
    const container = button.closest('.card');
    const input = container.querySelector('.comment-input');
    const commentList = container.querySelector('.comment-list');

    // Obtiene el texto del input
    const commentText = input.value.trim();

    // Si el comentario no está vacío
    if (commentText !== '') {
      // Crea un nuevo elemento de comentario
      const newComment = document.createElement('p');
      newComment.textContent = commentText;
      newComment.className = 'p-1 bg-light rounded mb-1 border';

      // Añade el comentario a la lista
      commentList.appendChild(newComment);

      // Limpia el input
      input.value = '';
    }
  });
});
