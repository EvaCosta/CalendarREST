import { EventModel } from '../model/EventModel';
import { CalendarModel } from '../model/CalendarModel';

export class ListEventController{
    async execute(input){
        const eventModel = new EventModel();
        if(!input.params.calendarId)
            return {status: 400, body: 'The calendarID is required'}

        const calendarModel = new CalendarModel();

        if(!await calendarModel.find("id", input.params.calendarId)){
            return {status: 400, body: 'The calendarID is not valid'}
        }
     
        try{ 
            const events = await eventModel.all(input.params.calendarId);
            return {status: 200, body: events};
        }catch(error){
            throw new Error(error);
        }
    }

}