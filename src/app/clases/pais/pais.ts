export class Pais {
  name: string;
  capital: string;
  flag: string;

  onSubmit() {
    // TODO: Use EventEmitter with form value
  }
  constructor(name: string = '', capital: string = '', flag: string = '') {
    this.name = name;
    this.capital = capital;
    this.flag = flag;
  }
}