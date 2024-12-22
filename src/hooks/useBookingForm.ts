import { useState, useCallback } from 'react';
import { AppointmentFormData } from '../types';
import { stepValidation } from '../utils/validation';

const initialFormData: AppointmentFormData = {
  services: [],
  dateTime: '',
  rideOption: '',
  contact: {
    fullName: '',
    phone: '',
    email: '',
  },
  vehicle: {
    year: '',
    make: '',
    model: '',
    licensePlate: '',
  },
};

export function useBookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<AppointmentFormData>(initialFormData);

  const isStepValid = useCallback((step: number) => {
    switch (step) {
      case 1:
        return stepValidation.services(formData);
      case 2:
        return stepValidation.dateTime(formData);
      case 3:
        return stepValidation.rideOption(formData);
      case 4:
        return stepValidation.contact(formData);
      case 5:
        return stepValidation.vehicle(formData);
      default:
        return true;
    }
  }, [formData]);

  const canProceed = isStepValid(currentStep);

  const updateFormData = useCallback((field: string, value: any) => {
    setFormData(prev => {
      if (field in prev) {
        return { ...prev, [field]: value };
      }
      // Handle nested objects
      const [parent, child] = field.split('.');
      if (parent in prev && typeof prev[parent as keyof AppointmentFormData] === 'object') {
        return {
          ...prev,
          [parent]: {
            ...prev[parent as keyof AppointmentFormData],
            [child]: value
          }
        };
      }
      return prev;
    });
  }, []);

  const resetForm = useCallback(() => {
    setCurrentStep(1);
    setFormData(initialFormData);
  }, []);

  return {
    currentStep,
    formData,
    canProceed,
    setCurrentStep,
    updateFormData,
    resetForm,
    isStepValid
  };
}