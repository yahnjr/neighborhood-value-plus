export type UserRole = 'user' | 'contractor' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  displayName?: string;
  neighborhood?: string; // Only for contractor role
  createdAt?: string;
  updatedAt?: string;
}
