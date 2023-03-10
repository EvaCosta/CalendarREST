import {CreateCalendarController} from '../src/controllers/CreateCalendarController';
import { DeleteEventController } from '../src/controllers/DeleteEventController';
import { CreateEventController } from '../src/controllers/CreateEventController';

describe ('Delete events', () => {

    let createCalendarController;
    let deleteEventController;
    let createEventController;

    beforeAll(() => {
       createCalendarController = new CreateCalendarController();
       deleteEventController = new DeleteEventController();
       createEventController = new CreateEventController();

    })

    it('Delete an existing event on a specific calendar', async () => { 
        const calendar = await createCalendarController.execute({body:{name: "Test"}});

        const event = await createEventController.execute(
            {body: {calendarId: calendar.body[0].id,name : "evento 1" ,category: "Normal",startDate: '2023-02-01 02:00:00', endDate: null}});
        
        const deleteEvent = await deleteEventController.execute({params:{id: event.body.id}});
                                                                
        expect(deleteEvent.status).toBe(204);
    })
}) 

