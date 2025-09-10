// src/services/userService.js
export async function registerUser(data) {
  const res = await fetch('https://taskly-2h0c.onrender.com/api/v1/users/', { // ← cambia la URL por la tuya
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || 'Error en el registro');
  }

  return res.json();
}
