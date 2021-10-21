import { SocialAPI } from 'api/ApiTypes';
import { HttpClient } from './HttpClient';

export class Api implements SocialAPI {
  client: HttpClient;

  constructor() {
    this.client = new HttpClient(process.env.REACT_APP_API_URL || '');
  }
}
