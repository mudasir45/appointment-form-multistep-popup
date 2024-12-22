import React from 'react';
import Modal from './Modal';
import ServiceSelection from './ServiceSelection';
import DateTimeSelection from './DateTimeSelection';
import RideOptionSelection from './RideOptionSelection';
import ContactInfo from './ContactInfo';
import VehicleInfo from './VehicleInfo';
import ConfirmationStep from './ConfirmationStep';
import ProgressIndicator from './ProgressIndicator';
import { useBookingForm } from '../hooks/useBookingForm';

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const {
    currentStep,
    formData,
    canProceed,
    setCurrentStep,
    updateFormData,
    resetForm,
  } = useBookingForm();

  const totalSteps = 6;

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onClose();
    resetForm();
  };

  const handleNext = () => {
    if (canProceed) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceSelection
            selectedServices={formData.services}
            onServiceSelect={(serviceId) => {
              const updatedServices = formData.services.includes(serviceId)
                ? formData.services.filter(id => id !== serviceId)
                : [...formData.services, serviceId];
              updateFormData('services', updatedServices);
            }}
            onNext={handleNext}
            canProceed={canProceed}
          />
        );
      case 2:
        return (
          <DateTimeSelection
            selectedDateTime={formData.dateTime}
            onDateTimeSelect={(dateTime) => updateFormData('dateTime', dateTime)}
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceed}
          />
        );
      case 3:
        return (
          <RideOptionSelection
            selectedOption={formData.rideOption}
            onOptionSelect={(option) => updateFormData('rideOption', option)}
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceed}
          />
        );
      case 4:
        return (
          <ContactInfo
            contactInfo={formData.contact}
            onContactInfoChange={(field, value) => 
              updateFormData(`contact.${field}`, value)
            }
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceed}
          />
        );
      case 5:
        return (
          <VehicleInfo
            vehicleInfo={formData.vehicle}
            onVehicleInfoChange={(field, value) => 
              updateFormData(`vehicle.${field}`, value)
            }
            onSubmit={handleNext}
            onBack={handleBack}
            canProceed={canProceed}
          />
        );
      case 6:
        return (
          <ConfirmationStep
            formData={formData}
            onBack={handleBack}
            onConfirm={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
        {renderStep()}
      </div>
    </Modal>
  );
}