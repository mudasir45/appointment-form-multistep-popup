import React from 'react';

type Props = {
  selectedDateTime: string;
  onDateTimeSelect: (dateTime: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function DateTimeSelection({ selectedDateTime, onDateTimeSelect, onNext, onBack }: Props) {
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM'
  ];

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Schedule Appointment</h2>
      <div className="mb-6">
        <input
          type="date"
          className="w-full p-2 border rounded-lg"
          onChange={(e) => onDateTimeSelect(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => onDateTimeSelect(time)}
            className={`p-3 text-center rounded-lg border transition-colors
              ${selectedDateTime === time
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
              }`}
          >
            {time}
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
          disabled={!selectedDateTime}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}