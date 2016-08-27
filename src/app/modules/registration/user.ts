export class User {

  constructor(public first_name?: string,
              public surname?: string,
              public section?: string,
              public birth_date?: Date,
              public address?: Address
  ) {
    this.address = new Address();
  }

  position = [
    'Mentor',
    'ESN\'er',
    'Both'
  ]

}

export class Address {
  constructor(
    public street?: string,
    public building_number?: number,
    public city?: string
  ) {}
}