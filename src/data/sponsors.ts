export interface Sponsor {
  id: number;
  name: string;
  logo: string; // Path to image in your public/assets folder
  tier: 'Platinum' | 'Gold' | 'Silver';
  website: string;
}

export const sponsorsData: Sponsor[] = [
  {
    id: 1,
    name: "Example Quantum Corp",
    logo: "/sponsors/logo1.png", 
    tier: "Platinum",
    website: "https://example.com"
  },
  // Add more sponsor objects here as they come in
];