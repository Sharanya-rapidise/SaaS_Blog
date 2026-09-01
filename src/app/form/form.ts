import { Component, inject} from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, NonNullableFormBuilder} from '@angular/forms';

export interface FormResult{
  vName: string;
  vRole: string;
  iAllocation: number;
}

@Component({
  imports: [MatDialogModule, FormsModule],
  standalone: true,
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form {
  // private fb = inject(NonNullableFormBuilder);

  member: FormResult = {
    vName: '',
    vRole: '',
    iAllocation: 0
  };

  dialogRef = inject(MatDialogRef<Form>);

  onSave(){
    this.dialogRef.close(this.member);
  }

  onCancel(){
    this.dialogRef.close();
  }
}
