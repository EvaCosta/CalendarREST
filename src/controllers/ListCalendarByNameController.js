import { CalendarModel } from '../model/CalendarModel';

export class ListCalendarByNameController{
    async execute(input){
        if(!input.params)
            return {status: 400, body: 'The name field is required for the search to be performed'}
        
        const {name} = input.params;
        const calendarModel = new CalendarModel();
       
        try{
            const calendar = await calendarModel.find('name', name);
          
            if(!calendar)
                return {status: 400, body: 'Calendar does not exist'};

            return {status: 200, body: calendar};

        }catch(error){
            throw new Error(error);
        }

    }

}