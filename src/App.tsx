import React, { useState } from 'react';
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { TranslationResult } from './components/TranslationResult';

function App() {
  const [userInput, setUserInput] = useState('');
  const [showTranslation, setShowTranslation] = useState(false);

  const handleTranslate = () => {
    setShowTranslation(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <Header />
        
        <InputSection
          userInput={userInput}
          onInputChange={setUserInput}
          onTranslate={handleTranslate}
        />

        {showTranslation && <TranslationResult userInput={userInput} />}

        <p className="text-center mt-8 text-gray-400">
          Try different phrases to see how the computer interprets them!
        </p>
      </div>
    </div>
  );
}

export default App;