export interface AuthUser {
  email: string;
  name: string;
  role: string;
  initials: string;
}

export const USERS: AuthUser[] = [
  { email: 'akira.magsakay.xentra@gmail.com',  name: 'Akira Magsakay',   role: 'HR-Admin', initials: 'AR' },
  { email: 'ralph.cruz.xentra@gmail.com',  name: 'Ralph Cruz',  role: 'Manager',  initials: 'RC' },
  { email: 'jairo.garcia.xentra@gmail.com',   name: 'Jairo Garcia', role: 'HR-Admin', initials: 'JG' },
];

export function findUserByEmail(email: string): AuthUser | undefined {
  const normalized = email.trim().toLowerCase();
  return USERS.find((u) => u.email.toLowerCase() === normalized);
}
