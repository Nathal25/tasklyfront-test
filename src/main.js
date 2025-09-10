import './styles/base.css';
import { initRouter } from './routes/route.js';

/**
 * Este archivo solo inicializa el router y el botón de navegación.
 * El listener para el formulario de registro se añade dinámicamente
 * dentro de la función initRegister() que se ejecuta cuando se carga la vista de registro.
 */

// Botón para navegar al formulario de registro
document.getElementById('go-register')?.addEventListener('click', () => {
  window.location.hash = '#/register';
});

// Inicializa el router para manejar rutas y cargar vistas dinámicamente
initRouter();
