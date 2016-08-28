export class User {

  constructor(public name?: string,
              public surname?: string,
              public section?: string,
              public birth_date?: Date,
              public address?: Address
  ) {
    this.address = new Address();
  }
}

export class Address {
  constructor(
    public street?: string,
    public building_number?: number,
    public city?: string
  ) {}
}