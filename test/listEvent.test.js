import {ListEventController} from '../src/controllers/ListEventController';
import {CreateEventController} from '../src/controllers/CreateEventController';
import { CreateCalendarController } from '../src/controllers/CreateCalendarController';

describe ('List events controler', () => {

    let listEventController;
    let createEventController;
    let createCalendarController;

    beforeAll(() => {
       listEventController = new ListEventController();
       createEventController = new CreateEventController();
       createCalendarController = new CreateCalendarController();
    })

    it('Return all existing events in a specific calendar', async () => {
        
        const calendar = await createCalendarController.execute({body:{name: "Test"}});

        await createEventController.execute(
            {body: {calendarId: calendar.body[0].id,name : "evento 1" ,category: "Normal",startDate: '2023-02-01 02:00:00', endDate: null}});
        
            createEventController = new CreateEventController();
        await createEventController.execute(
                {body: {calendarId: calendar.body[0].id,name : "evento 2" ,category: "Warning",startDate: '2023-02-09 02:00:00', endDate: '2023-03-09 04:00:00'}});
    
        const response = await listEventController.execute({params: {calendarId: calendar.body[0].id}});

        expect(response.status).toBe(200);

    })
}) 

