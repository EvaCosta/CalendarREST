import { CalendarModel } from '../model/CalendarModel';

export class ListCalendarController{
    async execute(){
        const calendarModel = new CalendarModel();

        try{ 
            const calendars = await calendarModel.all();
            return {status: 200, body: calendars};
        }catch(error){
            throw new Error(error);
        }
    }

}