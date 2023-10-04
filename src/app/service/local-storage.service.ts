import { Project } from '../interface/project.interface';

export class LocalStorageService {
  private storage: { [key: string]: any };
  private readonly prefix = 'textTask_storage';
  constructor() {
    this.storage = window.localStorage;
  }

  public setValue(value: any): boolean {
    if (!this.prefix) {
      return false;
    }
    try {
      const jsonValue = JSON.stringify(value);
      this.storage[this.prefix] = jsonValue;
      return true;
    } catch (e) {
      return false;
    }
  }

  public getValue(): Project[] | null {
    
    try {
      const storageValue = this.storage[this.prefix];
      const parsedValue = JSON.parse(storageValue);
      return parsedValue as Project[];
    } catch (e) {
      return null;
    }
  }
}