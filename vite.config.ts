import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
base: '/ca-precision-carpentry/',

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ca-precision-carpentry/',
})
