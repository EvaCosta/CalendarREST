import {CreateCalendarController} from '../src/controllers/CreateCalendarController';

describe ('Create calendar controler', () => {

    let createCalendarController;
    let input;

    beforeEach(() => {
        input = {body:{name: "Test"}}
    })

    it('Return 400 if the name is not provided', async () => {
        createCalendarController = new CreateCalendarController();
        input.body.name = null;

        const response = await createCalendarController.execute(input);

        expect(response).toEqual({status:400, body:"The name field is required"})
    })

    it('Return the created object', async () => {
        createCalendarController = new CreateCalendarController();
        const response = await createCalendarController.execute(input);

        expect(response.status).toBe(201);
    })

    it('Return 400 if the name already exists', async() => {
        createCalendarController = new CreateCalendarController();
        await createCalendarController.execute(input);
        
        const response = await createCalendarController.execute(input);

        expect(response).toEqual({status:400, body:"The provided name already exists"})
    })
}) 

