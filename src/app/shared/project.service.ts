import { Injectable } from '@angular/core';
import { ProjectModel } from './project-model.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscribe } from './subscribe.model';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project_detail : ProjectModel;
  sub:Subscribe[];
 
  
  
  constructor(private data:AngularFirestore, private _snackBar: MatSnackBar) {
   
   }
  
  getProjects(){
    return this.data.collection('Projects').snapshotChanges();
  }
  insert(sub:Subscribe): void {
    this.data.collection('Subscribes').add(sub);
  }
  getResume()
  {
    return "https://firebasestorage.googleapis.com/v0/b/portfolio-68bb0.appspot.com/o/Yash's%20Resume.pdf?alt=media&token=18e04da1-4fda-4e85-a3a9-8a78c0ac97b8";
  }
  

  open(data)
  {
    let snackBarRef = this._snackBar.open('','');
    snackBarRef.dismiss();
    this._snackBar.open(data,'',{
      duration:3000
    });
  }

}
