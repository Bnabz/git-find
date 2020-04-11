export class User {
  constructor(
          public login: string,
          public avatar_url: string,
          public location: string,
            public url: string,
          public followers: number,
          public followig: number,
          public public_repos: number,
          public created_at: Date,
  )
  {}



}
