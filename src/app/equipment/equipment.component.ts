import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: string[] = ["Habitat dome","Drones","Food containers","Oxygen tanks" ];
  equipmentBeingEdited: string;
  /*
<ul>
    <li>Habitat dome</li>
    <li>Drones</li>
    <li>Food containers</li>
    <li>Oxygen tanks</li>
</ul>

  */

  constructor() { }

  ngOnInit() {
  }

  
  add(equipmentName: string){

    for(let toolName of this.equipments) {
      if(toolName === equipmentName)
      return;
    }

  this.equipments.push(equipmentName);
}

remove(equipment:string) {
  let index = this.equipments.indexOf(equipment);
  this.equipments.splice(index,1);
}

edit(equipment: string) {
  this.equipmentBeingEdited = equipment;
}

save(name: string, equipment: string) {
let index = this.equipments.indexOf(equipment);
this.equipments[index] = name;
}



}
