import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ["Mars soil sample","Drones","Plant growth in habitat","Human bone density" ];
  experimentBeingEdited: string;
  /*
<ul>
  <li>Mars soil sample</li>
  <li>Plant growth in habitat</li>
  <li>Human bone density</li>
</ul>
  */
  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string){

    for(let toolName of this.experiments) {
      if(toolName === experimentName)
      return;
    }

  this.experiments.push(experimentName);
}

remove(experiment:string) {
  let index = this.experiments.indexOf(experiment);
  this.experiments.splice(index,1);
}

edit(experiment: string) {
  this.experimentBeingEdited = experiment;
}

save(name: string, experiment: string) {
let index = this.experiments.indexOf(experiment);
this.experiments[index] = name;
}


}
