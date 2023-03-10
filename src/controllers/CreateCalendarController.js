import {CalendarModel} from "../model/CalendarModel";
 
export class CreateCalendarController {

    async execute(input){
        if(!input.body.name)
            return {status: 400, body: 'The name field is required'}

        const {name} = input.body;
        const calendar = new CalendarModel(name);

        if(await calendar.find('name', name))
            return {status: 400, body: 'The provided name already exists'}

        try{
            await calendar.save()
            return {status: 201, body: await calendar.get()};
        }catch(error){
            throw new Error(error);
        }
  
    }
}
