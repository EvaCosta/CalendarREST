import {ListCalendarByNameController} from '../src/controllers/ListCalendarByNameController';
import {CreateCalendarController} from '../src/controllers/CreateCalendarController';

describe ('List calendar controler by name', () => {

    let listCalendarByNameController;
    let createCalendarController;

    beforeAll(() => {
       listCalendarByNameController = new ListCalendarByNameController();
       createCalendarController = new CreateCalendarController();
    })

    it('Return the calendar', async () => {
        await createCalendarController.execute({body:{name: "Test"}});

        const response = await listCalendarByNameController.execute({params:{name: "Test"}});

        expect(response.status).toBe(200);
    })
}) 

