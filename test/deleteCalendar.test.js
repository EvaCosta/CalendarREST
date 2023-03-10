import {CreateCalendarController} from '../src/controllers/CreateCalendarController';
import { DeleteCalendarController } from '../src/controllers/DeleteCalendarController';

describe ('Delete a calendar by name', () => {

    let createCalendarController;
    let deleteCalendarController;

    beforeAll(() => {
       createCalendarController = new CreateCalendarController();
       deleteCalendarController = new DeleteCalendarController();

    })

    it('Remove the calendar', async () => {
        const calendar =  await createCalendarController.execute({body:{name: "Test"}});

        const deleteCalendar = await deleteCalendarController.execute({params:{id: calendar.body[0].id}});

        expect(deleteCalendar.status).toBe(204);
    })
}) 

