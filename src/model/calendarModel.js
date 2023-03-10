import { calendars } from "../bd/calendar";
import {randomUUID} from "crypto";

export class CalendarModel{
    constructor(name) {
        this.id = this.generateId();
        this.name = name;
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
        calendars.push({id: this.id, name: this.name});
    }

    async delete(index){
        calendars.splice(index,1);
    }

    async find(collumn, value){
        if(collumn === "id")
            return calendars.find(calendar => calendar.id === value); 
        else
            return calendars.find(calendar => calendar.name === value); 
    }

    async findIndex(collumn, value){
        if(collumn === "id")
            return calendars.findIndex(calendar => calendar.id === value); 
        else
            return calendars.findIndex(calendar => calendar.name === value); 
    }

    async all(){
       return calendars;
    }

    async update(id, newItem){
        const index = await this.findIndex("id", id);
        calendars[index] = {id, name : newItem.name};

        return calendars[index];
    }

    async get(){
        return [{id: this.id, name: this.name}];    
    }
}