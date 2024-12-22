import React from 'react';

type Props = {
  contactInfo: {
    fullName: string;
    phone: string;
    email: string;
  };
  onContactInfoChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function ContactInfo({ contactInfo, onContactInfoChange, onNext, onBack }: Props) {
  const isValid = contactInfo.fullName && contactInfo.phone;

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={contactInfo.fullName}
            onChange={(e) => onContactInfoChange('fullName', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={contactInfo.phone}
            onChange={(e) => onContactInfoChange('phone', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email (Optional)
          </label>
          <input
            type="email"
            value={contactInfo.email}
            onChange={(e) => onContactInfoChange('email', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="john@example.com"
          />
        </div>
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
          disabled={!isValid}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}