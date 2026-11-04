export type Hospital = {
  id: string;
  name: string;
  city: string;
  address: string;
  schedule: string;
  scheduleDetail: string;
  phone: string;
  phoneHref: string;
  mapsUrl: string;
  mapsEmbed: string;
};

export const hospitals: Hospital[] = [
  {
    id: "shifa",
    name: "Shifa Hospital",
    city: "Gujrat",
    address: "Jail Road, Gujrat",
    schedule: "Mon to Fri",
    scheduleDetail: "Monday to Friday — consultation hours available",
    phone: "+92 326 6493614",
    phoneHref: "tel:+923266493614",
    mapsUrl: "https://maps.google.com/?q=Shifa+Hospital+Jail+Road+Gujrat",
    mapsEmbed:
      "https://maps.google.com/maps?q=Shifa%20Hospital%20Jail%20Road%20Gujrat&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "tarar",
    name: "Tarar Hospital",
    city: "Mandi Bahauddin",
    address: "Mandi Bahauddin",
    schedule: "Sat from 4 PM · Sun from 10 AM",
    scheduleDetail: "Saturday from 4:00 PM · Sunday from 10:00 AM",
    phone: "+92 371 6528331",
    phoneHref: "tel:+923716528331",
    mapsUrl: "https://maps.google.com/?q=Tarar+Hospital+Mandi+Bahauddin",
    mapsEmbed:
      "https://maps.google.com/maps?q=Tarar%20Hospital%20Mandi%20Bahauddin&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
];
