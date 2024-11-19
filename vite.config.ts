import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: 'public/92231281_p0_master1200.jpg',
    //       dest: 'public/',
    //     }
    //   ],
    // }),
  ],
  base: ''
})