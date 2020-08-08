import { Deserializable } from './deserializable.model';
import { SeverityEnum } from './severity.enum';

export class Todo implements Deserializable {

    title : string;
    user : string;
    date : Date;
    content : string;
    severity : SeverityEnum   

    constructor(title: string, user: string, date: Date, content: string, severity: SeverityEnum){
        this.title = title;
        this.user = user;
        this.date = date;
        this.content = content;
        this.severity = severity;
    }

    deserialize(input : any) {
        Object.assign(this, input);
        return this;
    }
}