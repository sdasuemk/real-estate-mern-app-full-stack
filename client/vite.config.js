import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Treat CSS files as regular module dependencies
      scopeBehaviour: 'global', // or 'local'
    },
  },
})
