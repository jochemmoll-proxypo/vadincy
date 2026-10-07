import { defineConfig } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// Keep this small static site self-contained when only the homepage is routed
// to the Worker and /assets requests still reach the previous hosting provider.
export default defineConfig({
  plugins: [{
    name: 'inline-production-assets',
    apply: 'build',
    async closeBundle() {
      const output = resolve('dist');
      const file = resolve(output, 'index.html');
      let html = await readFile(file, 'utf8');
      const stylesheet = html.match(/<link\b[^>]*href="(\/assets\/[^"<>]+\.css)"[^>]*>/);
      const script = html.match(/<script\b[^>]*src="(\/assets\/[^"<>]+\.js)"[^>]*><\/script>/);
      if (!stylesheet || !script) throw new Error('Expected Vite CSS and JavaScript assets were not found.');
      const css = await readFile(resolve(output, stylesheet[1].slice(1)), 'utf8');
      const js = await readFile(resolve(output, script[1].slice(1)), 'utf8');
      html = html.replace(stylesheet[0], () => `<style>${css}</style>`);
      html = html.replace(script[0], () => `<script type="module">${js.replace(/<\/script/gi, '<\\/script')}</script>`);
      await writeFile(file, html);
    },
  }],
});
