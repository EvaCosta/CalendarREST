import {CreateEventController} from '../src/controllers/CreateEventController';
import { CreateCalendarController } from '../src/controllers/CreateCalendarController';


describe (' Creates a new event on a specific calendar.', () => {

    let createEventController;
    let createCalendarController;

    it('Return the created object', async () => {
        createCalendarController = new CreateCalendarController();
        const calendar = await createCalendarController.execute({body:{name: "Test"}});

        createEventController = new CreateEventController();

        const response = await createEventController.execute(
            {body: {calendarId: calendar.body[0].id,name : "evento teste" ,category: "Normal",startDate: '2023-03-09 02:00:00', endDate: '2023-03-10 02:00:00'}});

        expect(response.status).toBe(201);
    })

    it('Return 400 if the calendar is invalid', async () => {
        createCalendarController = new CreateCalendarController();
        const calendar = await createCalendarController.execute({body:{name: "Test"}});

        createEventController = new CreateEventController();

        const response = await createEventController.execute(
            {body: {calendarId: 1,name : "evento teste" ,category: "Normal",startDate: '2023-03-09 02:00:00', endDate: null}});

        expect(response.status).toBe(400);
    })
}) 

