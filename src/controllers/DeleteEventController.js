import { EventModel } from '../model/EventModel';

export class DeleteEventController {
    async execute(input){
        
        const {id} = input.params;
       
        const eventModel = new EventModel();
        const index = await eventModel.findIndex('id', id);

        if(index === -1){
            return {status: 400, body: 'Event not found.' };
        }

        try{
            await eventModel.delete(index);
            return {status: 204};
        }catch(error){
            throw new Error(error);
        }
        
    }

}