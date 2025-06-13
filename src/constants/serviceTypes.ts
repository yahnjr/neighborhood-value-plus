import {
  faSeedling,
  faWrench,
  faHandsHelping,
  faStar,
  faDice,
  faInfoCircle,
  faHome,
  faMoon,
  faBroom,
  faTrash,
  faTree
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ServiceType {
  id: string;
  name: string;
  color: string;
  icon: IconDefinition;
}

export const SERVICE_TYPES: ServiceType[] = [
  { id: 'lawn-restoration', name: 'Lawn Restoration', color: '#008000', icon: faSeedling },
  { id: 'sidewalk-repair', name: 'Sidewalk Repair', color: '#808080', icon: faWrench },
  { id: 'homeless-outreach', name: 'Homeless Outreach', color: '#FFA500', icon: faHandsHelping },
  { id: 'legacy-sponsored', name: 'Legacy Sponsored Block', color: '#FFD700', icon: faStar },
  { id: 'lifestyle-lottery', name: 'Lifestyle Lottery Winner', color: '#800080', icon: faDice },
  { id: 'neighborhood-history', name: 'Neighborhood History', color: '#0000FF', icon: faInfoCircle },
  { id: 'home-for-sale', name: 'Home For Sale', color: '#008080', icon: faHome },
  { id: 'overnight-patrol', name: 'Overnight Patrol', color: '#000080', icon: faMoon },
  { id: 'vacant-home-cleanup', name: 'Vacant Home Cleanup', color: '#800000', icon: faBroom },
  { id: 'trash-debris', name: 'Trash or Debris Dump Site', color: '#000000', icon: faTrash },
  { id: 'overgrown-vegetation', name: 'Overgrown Bushes or Trees', color: '#228B22', icon: faTree },
];
