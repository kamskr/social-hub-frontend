import { HttpClient } from './HttpClient';

export class Api implements HeroesAPI {
  client: HttpClient;

  constructor() {
    this.client = new HttpClient(process.env.REACT_APP_API_URL || '');
  }
}
