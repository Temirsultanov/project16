

export interface Muser {
  name: string,
  surname: string,
  patronymic: string,
  phone: string,
  email: string,
  birthdate: Date,
  department: string,
  id?: number,
}
export enum MuserDepartment{
  it,
  sales,
  delivery,
  law
}
