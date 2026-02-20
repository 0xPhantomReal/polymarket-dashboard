// TypeScript type definitions for the project

// Example type definitions
export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Market {
    id: string;
    title: string;
    createdAt: Date;
    endsAt: Date;
}

export type Status = 'open' | 'closed' | 'pending';

export interface Bet {
    userId: string;
    marketId: string;
    amount: number;
    status: Status;
}