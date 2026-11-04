import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div className="bg-[#FFF8E7] border-b border-[#F0DCB0] text-[#7A5210] px-4 py-2.5 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto flex items-start sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-2">
          <Info className="w-4 h-4 text-[#C98A16] shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-snug">
            <strong className="font-semibold text-[#5A3C08]">Independent Concept Proposal:</strong>{' '}
            This website is an independent community project concept for Adelaide gardeners. It is not an official Bunnings website, does not use Bunnings logos, and is not affiliated with or endorsed by Bunnings Group Limited.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-[#9E6B15] hover:text-[#5A3C08] p-1 -mr-1 rounded transition-colors shrink-0"
          aria-label="Dismiss disclaimer note"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
