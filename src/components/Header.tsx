import React from 'react';
import { Terminal } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
        <Terminal className="w-10 h-10" />
        Programming Translator
      </h1>
      <p className="text-gray-400">Experience how computers interpret human ideas</p>
    </div>
  );
}