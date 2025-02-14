import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "",  // ❌ Antes: "/Puedo-ser-tu-san-valentin-nonita/"
})
