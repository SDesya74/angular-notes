import { nanoid } from "nanoid"

export namespace Note {
  export class Create {
    static readonly type = "[Notes] Create";
    id: string
    constructor(public title: string, public content: string) {
      this.id = nanoid()
    }
  }

  export class Save {
    static readonly type = "[Notes] Save";
    constructor(public id: string, public title: string, public content: string) {
    }
  }

  export class Delete {
    static readonly type = "[Notes] Delete";
    constructor(public id: string) {
    }
  }
}
