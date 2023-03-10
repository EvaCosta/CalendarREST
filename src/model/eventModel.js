import { events } from "../bd/event";
import {randomUUID} from "crypto";

export class EventModel{
    constructor(calendarId, name, category, startDate, endDate = null) {
        this.id = this.generateId();
        this.calendarId = calendarId;
        this.name = name;
        this.category = category;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    generateId(){
       return randomUUID(); 
    }

    async getId(){
        return [{id: this.id}];    
    }

    async getName(){
        return [{id: this.name}];    
    }

    async save(){
        events.push({   id: this.id, 
                        calendarId: this.calendarId, 
                        name: this.name,
                        category: this.category,
                        startDate: this.startDate,
                        endDate: this.endDate});
    }

    async delete(index){
        events.splice(index,1)
    }

    async find(collumn, value){
        if(collumn === "id")
            return events.find(event => event.id === value); 
        else
            return events.find(event => event.name === value); 
    }

    async findIndex(collumn, value){
        if(collumn === "id")
            return events.findIndex(event => event.id === value); 
        else
            return events.findIndex(event => event.name === value); 
    }

    async all(calendarId){
        
        let eventsCalendar = Array();
        for (let index = 0; index < events.length; index++) {
            if(events[index].calendarId === calendarId)
                eventsCalendar.push(events[index]);
        }
        
       return eventsCalendar;
    }

    async allDaily(data){
        
        let eventsDaily = Array();
        for (let index = 0; index < events.length; index++) {
            if(events[index].startDate.split(" ")[0] === data)
                eventsDaily.push(events[index]);
        }
        
       return eventsDaily;
    }

    async update(id, calendarId, name, category, startDate, endDate){
        const index = await this.findIndex("id", id);
        events[index] = {id, calendarId : calendarId,
            name : name,
            category : category,
            startDate : startDate,
            endDate : endDate};

        return events[index];
    }

    async get(){
        return {   id: this.id, 
                    calendarId: this.calendarId, 
                    name: this.name,
                    category: this.category,
                    startDate: this.startDate,
                    endDate: this.endDate};    
    }
}