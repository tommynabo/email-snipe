export interface GeneratedEmail {
  subject: string;
  body: string;
}

export enum Tone {
  Professional = 'Professional',
  Witty = 'Witty',
  Urgent = 'Urgent',
  Friendly = 'Friendly',
  Direct = 'Direct',
}

export interface UserStats {
  emailsGenerated: number;
  openRate: number;
  conversionRate: number;
}

export interface Integration {
  id: string;
  name: string;
  connected: boolean;
  icon: string; // Lucide icon name placeholder
  description: string;
}
