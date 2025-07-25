export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['fs', 'path'] // 🚨 These are Node modules
    }
  }
});
