export class User {

  constructor(public first_name?: string,
              public surname?: string,
              public section?: string
  ) {
  }

  sections = [
    'VU',
    'VDU'
  ];

  position = [
    'Mentor',
    'ESN\'er',
    'Both'
  ]

}