import { RequestHandler } from 'msw';
import { Server } from '../server';
import { generateKey, storage } from '../utils/storage';

export class Flow {
  public name: string;
  public mocks: Array<RequestHandler>;

  private id: string;

  constructor(name: string, id: string, mocks: Array<RequestHandler>) {
    this.name = name;
    this.id = id;
    this.mocks = mocks;

    this.activate = this.activate.bind(this);
  }

  activate() {
    console.warn(`[MSW]: Flow Activated | ${this.name}`);
    storage.set(generateKey('activated-mock'), this.id);
    Server.use(...this.mocks);
  }
}
