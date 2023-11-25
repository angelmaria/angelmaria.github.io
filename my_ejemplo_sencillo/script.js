// Comportamiento de los botones en laptop-list.html
$(document).ready(function() {
    // Botón Ver
    $('.btn-ver').on('click', function() {
      window.location.href = 'laptop-view.html';
    });
  
    // Botón Editar
    $('.btn-editar').on('click', function() {
      window.location.href = 'laptop-detail.html';
    });
  
    // Botón Borrar
    $('.btn-borrar').on('click', function() {
      $(this).closest('tr').hide();
    });
  });
  