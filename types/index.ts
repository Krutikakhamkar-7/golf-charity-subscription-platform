export type UserRole = 'subscriber' | 'admin';

export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  role: UserRole;
  created_at: string;
}

export interface SubscriptionRecord {
  id: string;
  user_id: string;
  plan_type: 'monthly' | 'yearly';
  status: 'active' | 'cancelled' | 'expired';
  renewal_date: string;
  stripe_subscription_id: string;
  created_at: string;
}

export interface ScoreRecord {
  id: string;
  user_id: string;
  score: number;
  score_date: string;
  created_at: string;
}

export interface CharityRecord {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category: string;
  website: string;
  featured: boolean;
  created_at: string;
}

export interface MonthlyDraw {
  id: string;
  month: number;
  year: number;
  draw_type: 'random' | 'algorithmic';
  winning_numbers: number[];
  is_published: boolean;
  jackpot_rollover: number;
  created_at: string;
}

export interface WinnerRecord {
  id: string;
  user_id: string;
  draw_id: string;
  match_type: '3-match' | '4-match' | '5-match';
  prize_amount: number;
  proof_image_url: string | null;
  status: 'pending' | 'approved' | 'rejected' | 'paid';
  created_at: string;
}
