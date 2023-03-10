import { EventModel } from '../model/EventModel';
import { CalendarModel } from "../model/CalendarModel";

export class UpdateEventController {
    async execute(input){
      
        const {id} = input.params;
        const eventModel = new EventModel();
        const calendarModel = new CalendarModel();

        if(!await calendarModel.find("id", input.body.calendarId)){
            return {status: 400, body: 'The calendarID is not valid'}
        }
        
        try{
            const updatedEvent = await eventModel.update(id,input.body.calendarId, input.body.name, input.body.category, input.body.startDate, input.body.endDate);
            return {status: 200, body: updatedEvent};
        }catch(error){
            throw new Error(error);
        }

    }

}