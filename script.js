const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/bg-gray-50/g, 'bg-slate-950');
code = code.replace(/bg-white\/90/g, 'bg-slate-900/90');
code = code.replace(/bg-white/g, 'bg-slate-900');
code = code.replace(/text-gray-900/g, 'text-slate-100');
code = code.replace(/text-gray-700/g, 'text-slate-300');
code = code.replace(/text-gray-600/g, 'text-slate-400');
code = code.replace(/text-gray-500/g, 'text-slate-400');
code = code.replace(/text-gray-400/g, 'text-slate-500');
code = code.replace(/border-gray-300/g, 'border-slate-700');
code = code.replace(/border-gray-200/g, 'border-slate-800');
code = code.replace(/border-gray-100/g, 'border-slate-800');
code = code.replace(/border-gray-50/g, 'border-slate-800');
code = code.replace(/bg-gray-100/g, 'bg-slate-800');
code = code.replace(/hover:bg-gray-100/g, 'hover:bg-slate-800');
code = code.replace(/hover:bg-gray-50/g, 'hover:bg-slate-800');

code = code.replace(/blue-600/g, 'cyan-500');
code = code.replace(/blue-700/g, 'cyan-600');
code = code.replace(/blue-900/g, 'cyan-100');
code = code.replace(/blue-800\/80/g, 'cyan-200/80');
code = code.replace(/blue-200\/50/g, 'cyan-800/50');
code = code.replace(/blue-100/g, 'cyan-900');
code = code.replace(/blue-50/g, 'cyan-950/40');
code = code.replace(/blue-200/g, 'cyan-800');
code = code.replace(/blue-300/g, 'cyan-700');

code = code.replace(/border-white/g, 'border-slate-900');
code = code.replace(/bg-gray-900/g, 'bg-slate-800');
code = code.replace(/font-sans/g, 'font-mono text-slate-100');

code = code.replace(/<input (.*?)className={?\`?(.*?)\`?}?/g, (match, prefix, cls) => {
    if (!cls.includes('bg-')) cls += ' bg-slate-900 text-slate-100';
    return `<input ${prefix}className={\`${cls}\`}`;
});

fs.writeFileSync('src/App.tsx', code);
