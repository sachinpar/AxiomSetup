import { Component, OnInit } from '@angular/core';
import { FileService } from '../Services/file.service';
import { Section } from '../Models/Section';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  visibleSidebar1;
  sections: Section[] = [];
  selectedSection: Section = null;
  fileUrl:string = 'assets/files/Axiom.json';

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.fileService.ReadFile(this.fileUrl).subscribe((data) => {
      if(data){
        this.sections = data;
        this.selectedSection = data[0];
      }
    });
  }

  OpenSection(section: Section){
    this.selectedSection = section;
  }

}
