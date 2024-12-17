import React from 'react';
import { Binary } from 'lucide-react';
import { generateBinaryCode } from '../utils/binaryGenerator';

interface TranslationResultProps {
  userInput: string;
}

export function TranslationResult({ userInput }: TranslationResultProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Binary className="w-6 h-6" />
          Binary Code:
        </h2>
        <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          {generateBinaryCode()}
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Computer's Understanding:</h2>
        <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
          {Array(3).fill('??? ').join(' ')} {userInput.split(' ').map(() => '???').join(' ')}
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">What's happening here?</h2>
        <p className="text-gray-300 leading-relaxed">
          This simulation shows how computers interpret human language. First, your idea is
          converted to binary (0s and 1s), which is the only language computers truly understand.
          Then, the computer tries to interpret this binary code based on its predefined
          instructions. As you can see, without proper programming, the computer's understanding
          is limited and requires specific instructions to make sense of human input.
        </p>
      </div>
    </div>
  );
}