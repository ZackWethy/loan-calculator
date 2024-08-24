import React, { useState } from 'react';

interface TooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ term, definition, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="underline cursor-help"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      {isVisible && (
        <div className="absolute z-10 w-64 p-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg">
          <strong>{term}:</strong> {definition}
        </div>
      )}
    </span>
  );
};

export default Tooltip;