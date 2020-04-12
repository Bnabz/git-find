export class Repository {
  constructor(
            public name: string,
            public description: string,
            public url: string,
            public language: string,
            public forks:number,
            public watchers:number,
            public updated_on: Date) {}

}
