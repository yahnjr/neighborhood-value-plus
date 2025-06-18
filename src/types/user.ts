export type UserRole = 'Subscriber' | 'Contractor' | 'Admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  contractorType?: string; // Only for Contractor role
}
