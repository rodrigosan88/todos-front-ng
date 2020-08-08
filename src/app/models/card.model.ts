import { Deserializable } from './deserializable.model';

export class Card implements Deserializable {

    title : string;
    subtitle : string;
    date : Date;
    text : string;
    color : string;
    icon: string;

    constructor(title: string, subtitle: string, date: Date, content: string, color: string, icon: string){
        this.title = title;
        this.subtitle = subtitle;
        this.date = date;
        this.text = content;
        this.color = color;
        this.icon = icon;
    }

    deserialize(input : any) {
        Object.assign(this, input);
        return this;
    }
}