export type Specialty = {
  name: string;
  src: string;
};

export type Doctor = {
  clinicName: string;
  doctorPhoto: string;
  doctorName: string;
  specialization: string;
  experience: string;
  nextSlot: {
    date: string;
    startTime: string;
    endTime: string;
  };
};

export type NearbyClinic = {
  image: string;
  name: string;
  specialisation: string;
};