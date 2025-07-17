import React from 'react';

function LanguageSelector({ selectedLanguage, onLanguageChange }) {
  return (
    <div className="d-flex align-items-center">
      <span
        style={{ cursor: 'pointer', paddingRight: '5px' }}
        className={`nav-link p-0 ${selectedLanguage === 'en' ? 'text-primary fw-bold' : 'text-primary'}`}
        onClick={() => onLanguageChange('en')}
        role="button"
        tabIndex={0}
        onKeyPress={e => { if (e.key === 'Enter') onLanguageChange('en'); }}
      >
        En
      </span>
      <span className="mx-1">/</span>
      <span
        style={{ cursor: 'pointer', paddingLeft: '5px' }}
        className={`nav-link p-0 ${selectedLanguage === 'mi' ? 'text-primary fw-bold' : 'text-primary'}`}
        onClick={() => onLanguageChange('mi')}
        role="button"
        tabIndex={0}
        onKeyPress={e => { if (e.key === 'Enter') onLanguageChange('mi'); }}
      >
        Māori
      </span>
    </div>
  );
}

export default LanguageSelector;
 