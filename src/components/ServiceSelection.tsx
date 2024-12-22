import React from 'react';
import { services } from '../data/services';
import { Droplets, ClipboardCheck, CircleDot, Snowflake, Disc, AlignHorizontalDistributeCenter } from 'lucide-react';

const iconMap = {
  Droplets,
  ClipboardCheck,
  CircleDot,
  Snowflake,
  Disc,
  AlignHorizontalDistributeCenter
};

type Props = {
  selectedServices: string[];
  onServiceSelect: (serviceId: string) => void;
  onNext: () => void;
};

export default function ServiceSelection({ selectedServices, onServiceSelect, onNext }: Props) {
  const handleServiceToggle = (serviceId: string) => {
    onServiceSelect(serviceId);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Select Services</h2>
      <div className="space-y-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <button
              key={service.id}
              onClick={() => handleServiceToggle(service.id)}
              className={`w-full p-4 flex items-center space-x-4 rounded-lg border transition-colors
                ${
                  selectedServices.includes(service.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <Icon className="w-6 h-6 text-blue-600" />
              <div className="flex-1 text-left">
                <h3 className="font-medium">{service.name}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            </button>
          );
        })}
      </div>
      <button
        onClick={onNext}
        disabled={selectedServices.length === 0}
        className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}