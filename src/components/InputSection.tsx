import React from 'react';
import { Brain } from 'lucide-react';

interface InputSectionProps {
  userInput: string;
  onInputChange: (value: string) => void;
  onTranslate: () => void;
}

export function InputSection({ userInput, onInputChange, onTranslate }: InputSectionProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-xl mb-8">
      <label className="block mb-4 text-gray-300">
        Enter your idea (e.g., "find pg near me"):
      </label>
      <input
        type="text"
        value={userInput}
        onChange={(e) => onInputChange(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        placeholder="Type your idea here"
      />
      <button
        onClick={onTranslate}
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Brain className="w-5 h-5" />
        Translate to Computer Language
      </button>
    </div>
  );
}