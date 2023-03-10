import {CreateCalendarController} from '../src/controllers/CreateCalendarController';
import { UpdateCalendarController } from '../src/controllers/UpdateCalendarController';

describe ('Update calendar by name', () => {
    let createCalendarController;
    let updateCalendarController;

    beforeAll(() => {
       createCalendarController = new CreateCalendarController();
       updateCalendarController = new UpdateCalendarController();
    })

    it('Modify the calendar if it exists', async () => {
        const calendar = await createCalendarController.execute({body:{name: "Test update"}});

        const updatedCalendar = await updateCalendarController.execute({params:{id: calendar.body[0].id},body:{name: "Test update"}});

        expect(updatedCalendar.status).toBe(200);
        
        expect(updatedCalendar.body).toHaveProperty("id");

        expect(updatedCalendar.body.name).toBe("Test update");


    })
}) 

