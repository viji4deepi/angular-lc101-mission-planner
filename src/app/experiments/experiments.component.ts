import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   acceptedExperiments : string[] = [];
   maxExperiments : number = 4;
   constructor() { }

   ngOnInit() { }

   // add experiment

addExperiment(experiment : string) {
  // is the expeiment already chosen 
  if(this.acceptedExperiments.includes(experiment)) {
    return;
  }
  if(this.maxExperiments <= this.acceptedExperiments.length) {
    return;
  }
  this.acceptedExperiments.push(experiment);
}

//remove experiment
removeExperiment(expeiment: string) {
  let index = this.experiments.indexOf(expeiment);
  if(index >= -1) {
    this.acceptedExperiments.splice(index,1);
  }
}

}
