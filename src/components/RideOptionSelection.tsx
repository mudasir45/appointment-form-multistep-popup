import React from 'react';
import { rideOptions } from '../data/services';

type Props = {
  selectedOption: string;
  onOptionSelect: (optionId: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function RideOptionSelection({ selectedOption, onOptionSelect, onNext, onBack }: Props) {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Select a ride option</h2>
      <div className="space-y-3">
        {rideOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onOptionSelect(option.id)}
            className={`w-full p-4 text-left rounded-lg border transition-colors
              ${selectedOption === option.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
              }`}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex space-x-4 mt-6">
        <button
          onClick={onBack}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedOption}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}