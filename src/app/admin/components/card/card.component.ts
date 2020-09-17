import {Component, Input, OnInit} from '@angular/core';
import {AdminComponent} from '../../admin.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() perrito: any;

  constructor(private adminComponent: AdminComponent) { }

  ngOnInit(): void {
  }

  onDelete(id: any): void {
    this.adminComponent.onDelete(id);
  }

  onEdit(animal: any): void {
    this.adminComponent.onEdit(animal);
  }

}
