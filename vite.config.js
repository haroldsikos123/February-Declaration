import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/Puedo-ser-tu-san-valentin-nonita/", // 👈 Usa el nombre de tu repositorio en GitHub
})
