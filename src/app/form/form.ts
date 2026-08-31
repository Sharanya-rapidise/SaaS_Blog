import { Component, inject} from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule} from '@angular/forms';
import { TeamService, TeamMember } from '../app.service';

@Component({
  imports: [MatDialogModule, FormsModule],
  standalone: true,
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form {
  member: TeamMember = {
    name: '',
    role: '',
    allocation: 0
  };

  dialogRef = inject(MatDialogRef<Form>);

  onSave(){
    this.dialogRef.close(this.member);
  }

  onCancel(){
    this.dialogRef.close();
  }
}
