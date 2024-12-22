import { Service, RideOption } from '../types';

export const services: Service[] = [
  {
    id: 'oil-change',
    name: 'Oil Change',
    description: 'Oil, Filter, Lube',
    icon: 'Droplets'  // Changed from Oil to Droplets
  },
  {
    id: 'state-inspection',
    name: 'State Inspections',
    description: 'Emissions inspection, safety inspections',
    icon: 'ClipboardCheck'
  },
  {
    id: 'brakes',
    name: 'Brakes',
    description: 'Brake pads, rotors, inspection',
    icon: 'CircleDot'
  },
  {
    id: 'heat-ac',
    name: 'Heat/A/C',
    description: 'No heat, No A/C, Recharges',
    icon: 'Snowflake'
  },
  {
    id: 'tires',
    name: 'Tires',
    description: 'Replacement, rotation',
    icon: 'Disc'
  },
  {
    id: 'alignments',
    name: 'Alignments',
    description: 'Two-wheel, Four-wheel',
    icon: 'AlignHorizontalDistributeCenter'
  }
];

export const rideOptions: RideOption[] = [
  {
    id: 'own-ride',
    title: "I've got a ride already"
  },
  {
    id: 'loaner',
    title: 'Request a loaner vehicle'
  },
  {
    id: 'ride-share',
    title: 'Ride share service'
  },
  {
    id: 'shuttle',
    title: 'Shuttle service'
  }
];