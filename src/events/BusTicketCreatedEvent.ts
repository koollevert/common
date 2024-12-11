import { Subjects } from "./subjects";

export interface BusTicketCreatedEvent {
    subject: Subjects.BusTicketCreated;
    data: {
        id: string;
        title: string;
        price: number;
        busId: string;
        availableSeats: number;
        version: number;
    };
}
