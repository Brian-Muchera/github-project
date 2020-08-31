export class User {
    static result: any;
    constructor(
      public login: string,
      public location: string,
      public avatar_url: string,
      public html_url: string,
      public name: string,
      public email: string,
      public public_repos: number,
      public followers: number,
      public following: number,
      public created_at: Date
    ) {}
  }
  