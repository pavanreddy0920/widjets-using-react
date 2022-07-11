import React, { useState } from 'react';
import Convert from './convert';
import Dropdown from './Dropdown';

const options = [
  { label: 'Africaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'hindi', value: 'hi' },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        label="select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
