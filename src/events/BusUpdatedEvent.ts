import { Subjects } from "./subjects";

export interface BusUpdatedEvent {
  subject: Subjects.BusUpdated;
  data: {
    busId: string;
    name: string;
    seats: boolean[]; // Updated seats array
  };
}
