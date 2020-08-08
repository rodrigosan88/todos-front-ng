import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  cardList : Card[] = [
    new Card("Minha tarefa pendente", "Rodrigo Santos", new Date(), "asd", "adasd", "build"),
    new Card("Minha tarefa pendente", "Rodrigo Santos", new Date(), "asd", "adasd", "build"),
    new Card("Minha tarefa pendente", "Rodrigo Santos", new Date(), "asd", "adasd", "build"),
    new Card("Minha tarefa pendente", "Rodrigo Santos", new Date(), "asd", "adasd", "build"),
    new Card("Minha tarefa pendente", "Rodrigo Santos", new Date(), "asd", "adasd", "build"),        
    new Card("Minha tarefa pendente", "Rodrigo Santos", new Date(), "asd", "adasd", "build")
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFormDialog(){
    const dialogRef = this.dialog.open(TodoFormComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
