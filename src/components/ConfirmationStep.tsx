import React from 'react';
import { AppointmentFormData } from '../types';
import { services } from '../data/services';

type Props = {
  formData: AppointmentFormData;
  onBack: () => void;
  onConfirm: () => void;
};

export default function ConfirmationStep({ formData, onBack, onConfirm }: Props) {
  const selectedServices = services.filter(service => 
    formData.services.includes(service.id)
  );

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Confirm Your Appointment</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Selected Services</h3>
          <ul className="list-disc list-inside text-gray-600">
            {selectedServices.map(service => (
              <li key={service.id}>{service.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-2">Appointment Time</h3>
          <p className="text-gray-600">{formData.dateTime}</p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Vehicle Information</h3>
          <p className="text-gray-600">
            {formData.vehicle.year} {formData.vehicle.make} {formData.vehicle.model}
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Contact Information</h3>
          <p className="text-gray-600">{formData.contact.fullName}</p>
          <p className="text-gray-600">{formData.contact.phone}</p>
          {formData.contact.email && (
            <p className="text-gray-600">{formData.contact.email}</p>
          )}
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
          onClick={onConfirm}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}