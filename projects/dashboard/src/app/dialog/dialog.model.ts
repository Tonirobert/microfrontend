export interface IEmployee {
    id?: number
    nama?: string
    email?: string
    alamat?: string
   
  }

  export class employee implements IEmployee {
    constructor(
      public id?: number,
      public nama?: string,
      public email?: string,
      public alamat?: string,

    ) {
      this.nama = '';
      this.email = '';
      this.alamat ='';
     
    }
  }