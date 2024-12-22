import React from 'react';

type Props = {
  vehicleInfo: {
    year: string;
    make: string;
    model: string;
    licensePlate: string;
  };
  onVehicleInfoChange: (field: string, value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
};

export default function VehicleInfo({ vehicleInfo, onVehicleInfoChange, onSubmit, onBack }: Props) {
  const isValid = vehicleInfo.year && vehicleInfo.make && vehicleInfo.model;

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Vehicle Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <select
            value={vehicleInfo.year}
            onChange={(e) => onVehicleInfoChange('year', e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Make
          </label>
          <input
            type="text"
            value={vehicleInfo.make}
            onChange={(e) => onVehicleInfoChange('make', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Toyota"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Model
          </label>
          <input
            type="text"
            value={vehicleInfo.model}
            onChange={(e) => onVehicleInfoChange('model', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Camry"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            License Plate (Optional)
          </label>
          <input
            type="text"
            value={vehicleInfo.licensePlate}
            onChange={(e) => onVehicleInfoChange('licensePlate', e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="ABC123"
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
          onClick={onSubmit}
          disabled={!isValid}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}