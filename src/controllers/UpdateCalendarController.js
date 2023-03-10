import { CalendarModel } from '../model/CalendarModel';

export class UpdateCalendarController {
    async execute(input){
      
        const {id} = input.params;
        const calendarModel = new CalendarModel();
        const {name} = input.body;
        
        try{
            const updatedCalendar = await calendarModel.update(id,{name});
        return {status: 200, body: updatedCalendar};
        }catch(error){
            throw new Error(error);
        }

    }

}