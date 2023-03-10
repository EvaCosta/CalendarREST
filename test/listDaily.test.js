import {ListDailyController} from '../src/controllers/ListDailyController';
import {CreateEventController} from '../src/controllers/CreateEventController';
import { CreateCalendarController } from '../src/controllers/CreateCalendarController';

describe ('List events controler', () => {

    let listDailyController;
    let createEventController;
    let createCalendarController;

    beforeAll(() => {
        listDailyController = new ListDailyController();
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
            
        await createEventController.execute(
            {body: {calendarId: calendar.body[0].id,name : "evento 3" ,category: "Critical",startDate: '2023-02-09 02:00:00', endDate: '2023-03-10 04:00:00'}});
        
        const response = await listDailyController.execute({params:{data: "2023-02-09"}});

        expect(response.status).toBe(200);

    })
}) 

