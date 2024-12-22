import { AppointmentFormData } from '../types';

export const stepValidation = {
  services: (data: AppointmentFormData) => data.services.length > 0,
  dateTime: (data: AppointmentFormData) => Boolean(data.dateTime),
  rideOption: (data: AppointmentFormData) => Boolean(data.rideOption),
  contact: (data: AppointmentFormData) => {
    const { fullName, phone } = data.contact;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return Boolean(fullName.trim()) && phoneRegex.test(phone);
  },
  vehicle: (data: AppointmentFormData) => {
    const { year, make, model } = data.vehicle;
    return Boolean(year && make.trim() && model.trim());
  }
};