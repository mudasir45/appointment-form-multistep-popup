export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type RideOption = {
  id: string;
  title: string;
  description?: string;
};

export type AppointmentFormData = {
  services: string[];
  customIssue?: {
    mainIssue: string;
    details: string;
    additionalNotes?: string;
  };
  dateTime: string;
  rideOption: string;
  contact: {
    fullName: string;
    phone: string;
    email?: string;
  };
  vehicle: {
    year: string;
    make: string;
    model: string;
    licensePlate?: string;
  };
};