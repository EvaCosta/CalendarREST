import {CreateCalendarController} from '../src/controllers/CreateCalendarController';
import { UpdateEventController } from '../src/controllers/UpdateEventController';
import {CreateEventController} from '../src/controllers/CreateEventController';

describe ('Update events', () => {
    let createCalendarController;
    let updateEventController;
    let createEventController;

    beforeAll(() => {
       createCalendarController = new CreateCalendarController();
       updateEventController = new UpdateEventController();
       createEventController = new CreateEventController();
    })

    it('Modify the event if it exists', async () => {
        const calendar = await createCalendarController.execute({body:{name: "Test update"}});
        
        const event = await createEventController.execute(
            {body: {calendarId: calendar.body[0].id,name : "evento teste" ,category: "Normal",startDate: '2023-03-09 02:00:00', endDate: '2023-03-10 02:00:00'}});

        const updatedEvent = await updateEventController.execute({params:{id: event.body.id}, body: {calendarId: calendar.body[0].id,name : "evento novo" ,category: "Warning",startDate: '2022-01-09 06:00:00', endDate: null}});

        expect(updatedEvent.status).toBe(200);
        
        expect(updatedEvent.body).toHaveProperty("id");

        expect(updatedEvent.body.name).toBe("evento novo");


    })

    it('Calendar invalid', async () => {
        const calendar = await createCalendarController.execute({body:{name: "Test update"}});
        
        const event = await createEventController.execute(
            {body: {calendarId: calendar.body[0].id,name : "evento teste" ,category: "Normal",startDate: '2023-03-09 02:00:00', endDate: '2023-03-10 02:00:00'}});

        const updatedEvent = await updateEventController.execute({params:{id: event.body.id}, body: {calendarId: 1,name : "evento novo" ,category: "Warning",startDate: '2022-01-09 06:00:00', endDate: null}});

        expect(updatedEvent.status).toBe(400);
    
    })
}) 

