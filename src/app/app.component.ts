import { Component, OnInit } from '@angular/core';
import { TechportService } from './services/techport/techport.service';
import { TechtransferService } from './services/techtransfer/techtransfer.service';
import { Techtransfer } from './model/techtransfer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nasa-api-services';

  constructor(private techportService: TechportService,
    private techtransferService: TechtransferService) {
  }

  ngOnInit(): void {

    this.techportService.getTechPortData(17792).subscribe(value => {
      console.log(value.project.programDirectors[0]);
    },
      err => {
        console.log("Error cuando intento buscar el techportService");
        console.log(err);
      });

    this.techtransferService.getTechtrasnferData().subscribe(

      value => this.tratarTechTransferData,
      err => this.tratarTechTransferDataError);

  }

  private tratarTechTransferData(value: Techtransfer) {
    console.log(value);
  }

  private tratarTechTransferDataError(err: any) {
    console.log("Error cuando intento buscar el techtransfer");
    console.log(err);
  }

}
