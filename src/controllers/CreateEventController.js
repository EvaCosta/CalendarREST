import {EventModel} from "../model/EventModel";
import { CalendarModel } from "../model/CalendarModel";
 
export class CreateEventController {

    async execute(input){
        const categoryAlloweds = ['Normal','Warning','Critical'];

        if(!input.body.calendarId)
            return {status: 400, body: 'The calendarID is required'}

       
        const calendarModel = new CalendarModel();
       
        if(!await calendarModel.find("id", input.body.calendarId)){
            return {status: 400, body: 'The calendarID is not valid'}
        }

        if(!input.body.name)
            return {status: 400, body: 'The name field is required'}
        if(!input.body.category)
            return {status: 400, body: 'The category is required'}
        if(!categoryAlloweds.includes(input.body.category))
            return {status: 400, body: 'The category is invalid'}
        if(!input.body.startDate)
            return {status: 400, body: 'The startDate is required'}
        
        let endDate = input.body.endDate ?? input.body.startDate;

        const event = new EventModel(input.body.calendarId, input.body.name, input.body.category, input.body.startDate, endDate);

        try{
            await event.save()
            return {status: 201, body: await event.get()};
        }catch(error){
            throw new Error(error);
        }
  
    }
}
