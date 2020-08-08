import { Deserializable } from './deserializable.model';

export class MenuItem implements Deserializable {

    route : string;
    icon : string;
    title : string;

    constructor(route : string, icon : string, title : string){
        this.route = route;
        this.icon = icon;
        this.title = title;
    }

    deserialize(input : any){
        Object.assign(this, input);
        
        return this;
    }

}