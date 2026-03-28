import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Enter a valid email.'),
  password: z.string().min(8, 'Password must be at least 8 characters.')
});

export const signupSchema = loginSchema.extend({
  full_name: z.string().min(2, 'Enter your full name.')
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Enter a valid email.')
});

export const scoreSchema = z.object({
  score: z.number().min(1).max(45),
  score_date: z.string().nonempty()
});

export type ScoreSchema = z.infer<typeof scoreSchema>;
