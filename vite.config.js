import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "./", // Cambia esto para evitar errores de ruta en GitHub Pages
})
