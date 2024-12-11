import { Subjects } from "./subjects";

export interface BusTicketUpdatedEvent {
    subject: Subjects.BusTicketUpdated;
    data: {
        id: string;
        userId: string;
        busId: string;
        seats: number[];
        amount: number;
        version: number;
    };
}
