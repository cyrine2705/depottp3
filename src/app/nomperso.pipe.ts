import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomperso'
})
export class NompersoPipe implements PipeTransform {

  transform(nom: string):string {
    return '* '+nom+' *';
    }
}
