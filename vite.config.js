// import dotenv from 'dotenv';
// // run package config
// dotenv.config();
import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react';
// import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
