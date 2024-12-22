import React from 'react';

type Props = {
  currentStep: number;
  totalSteps: number;
};

export default function ProgressIndicator({ currentStep, totalSteps }: Props) {
  return (
    <div className="w-full max-w-md mx-auto px-6 py-4">
      <div className="relative">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-300"
          />
        </div>
        <div className="text-center text-sm text-gray-600">
          Step {currentStep} of {totalSteps}
        </div>
      </div>
    </div>
  );
}