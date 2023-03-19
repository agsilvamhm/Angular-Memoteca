import { AbstractControl } from "@angular/forms";

export function maiusculoValidator(control: AbstractControl){
  const autoria = control.value as string;

  if(autoria != autoria?.toUpperCase()){
    return {maiusculo: true}
  } else {
    return null
  }
}
