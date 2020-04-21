import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/project.service';
import { ProjectModel } from './shared/project-model.model';
import { Subscribe } from './shared/subscribe.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
 
  constructor(private service :ProjectService ){
  
  }
  
 
  projectList : ProjectModel[];
  qwe:string="";
   sub : Subscribe = null;
  ngOnInit(): void {
   
    this.service.getProjects().subscribe(res =>{
         this.projectList = res.map(item=>{
           return {
            id :   item.payload.doc.id,
             ...item.payload.doc.data(),
            }  as ProjectModel;      
         })
    });
    
  }

  subscribe(data:NgForm){ 
    
    console.log(this.qwe);
    this.service.insert(data.value);
    this.service.open("Submitted");
  
  }

  download(){
      window.location.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-68bb0.appspot.com/o/Yash's%20Resume.pdf?alt=media&token=18e04da1-4fda-4e85-a3a9-8a78c0ac97b8";
  }
  title = 'Portfolio';  


  onClick(e){
    console.log( 'You clicked: ' + e.target.innerHTML);
    (<any>$('.navbar-collapse')).collapse('hide');
  }
}
