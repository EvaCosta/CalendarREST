import { CalendarModel } from '../model/CalendarModel';

export class DeleteCalendarController {
    async execute(input){
        
        const {id} = input.params;

        const calendarModel = new CalendarModel();
        const index = await calendarModel.findIndex('id', id);

        if(index === -1){
            return {status: 400, body: 'Calendar not found.' };
        }

        try{
            await calendarModel.delete(index);
            return {status: 204};
        }catch(error){
            throw new Error(error);
        }
        
    }

}