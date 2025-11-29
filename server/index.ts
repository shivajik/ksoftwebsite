import { spawn } from 'child_process';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || '5000';

console.log(`Starting Next.js in ${isProduction ? 'production' : 'development'} mode on port ${port}`);

const nextBin = path.join(process.cwd(), 'node_modules', '.bin', 'next');
const args = isProduction 
  ? ['start', '-p', port, '-H', '0.0.0.0']
  : ['dev', '-p', port, '-H', '0.0.0.0'];

const child = spawn(nextBin, args, {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, PORT: port }
});

child.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
