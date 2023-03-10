import {ListCalendarController} from '../src/controllers/ListCalendarController';
import {CreateCalendarController} from '../src/controllers/CreateCalendarController';

describe ('List calendar controler', () => {

    let listCalendarController;
    let createCalendarController;

    beforeAll(() => {
       listCalendarController = new ListCalendarController();
       createCalendarController = new CreateCalendarController();
    })

    it('Return the list of calendars', async () => {
        createCalendarController.execute({body:{name: "Test"}});

        const response = await listCalendarController.execute();

        expect(response.status).toBe(200);

        expect(response.body[0]).toHaveProperty("id");

        expect(response.body[0].name).toBe("Test");

    })
}) 

