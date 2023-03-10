import { EventModel } from '../model/EventModel';

export class ListDailyController{
    async execute(input){
        const eventModel = new EventModel();

        try{ 
            const events = await eventModel.allDaily(input.params.data);
            return {status: 200, body: events};
        }catch(error){
            throw new Error(error);
        }
    }

}