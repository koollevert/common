export enum Subjects {
    // Ticket-related events
    TicketCreated = 'ticket:created',
    TicketUpdated = 'ticket:updated',

    // Order-related events
    OrderCreated = 'order:created',
    OrderCancelled = 'order:cancelled',

    // Expiration-related events
    ExpirationComplete = 'expiration:complete',

    // Payment-related events
    PaymentCreated = 'payment:created',

    // Booking-related events
    BookingCreated = 'booking:created',
    BookingCancelled = 'booking:cancelled',
    BookingFailed = "booking:failed",
    BookingCompleted = "booking:completed",

    // Bus-related events
    BusCreated = 'bus:created',
    BusUpdated = 'bus:updated',

    // User-related events
    UserRegistered = 'user:registered',
    UserUpdated = 'user:updated',
}
