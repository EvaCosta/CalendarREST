import { Router } from "express";
import { CreateCalendarController } from "./controllers/CreateCalendarController";
import { ListCalendarController } from "./controllers/ListCalendarController";
import { ListCalendarByNameController } from "./controllers/ListCalendarByNameController";
import { DeleteCalendarController} from "./controllers/DeleteCalendarController";
import { UpdateCalendarController } from "./controllers/UpdateCalendarController";
import { CreateEventController } from "./controllers/CreateEventController";
import { ListEventController } from "./controllers/ListEventController";
import { DeleteEventController } from "./controllers/DeleteEventController";
import { UpdateEventController } from "./controllers/UpdateEventController";
import { ListDailyController } from "./controllers/ListDailyController";

const router = Router();
const createCalendarController = new CreateCalendarController();
const listCalendarController = new ListCalendarController();
const listCalendarByNameController = new ListCalendarByNameController();
const deleteCalendarController = new DeleteCalendarController();
const updateCalendarController = new UpdateCalendarController();
const createEventController = new CreateEventController();
const listEventController = new ListEventController();
const deleteEventController = new DeleteEventController();
const updateEventController = new UpdateEventController();
const listDailyController = new ListDailyController();

router.post('/calendars', async (req,res) => {
    const response = await createCalendarController.execute(req);

    res.status(response.status).json(response.body);
})

router.get('/calendars',async (req,res) => {
    const response = await listCalendarController.execute();

    res.status(response.status).json(response.body);
})

router.get('/calendars/:name', async (req,res) => {
    const response = await listCalendarByNameController.execute(req);

    res.status(response.status).json(response.body);
})

router.delete('/calendars/:id', async (req,res) => {
    const response = await deleteCalendarController.execute(req);

    res.status(response.status).json(response.body);
})

router.put('/calendars/:id', async (req,res) => {
    const response = await updateCalendarController.execute(req);

    res.status(response.status).json(response.body);
})

router.post('/calendars/:calendarId/events', async (req,res) => {
    const response = await createEventController.execute(req);

    res.status(response.status).json(response.body);
})

router.get('/calendars/:calendarId/events', async (req,res) => {
    const response = await listEventController.execute(req);

    res.status(response.status).json(response.body);
})

router.delete('/calendars/:calendarId/events/:id', async (req,res) => {
    const response = await deleteEventController.execute(req);

    res.status(response.status).json(response.body);
})

router.put('/calendars/events/:id', async (req,res) => {
    const response = await updateEventController.execute(req);

    res.status(response.status).json(response.body);
})

router.get('/calendars/daily/:data', async (req,res) => {
    const response = await listDailyController.execute(req);

    res.status(response.status).json(response.body);
})

export {router};