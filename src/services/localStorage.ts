export default class Storage {
  static set(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static get(key: string): any {
    return JSON.parse(String(localStorage.getItem(key)));
  }

  static remove(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }
}
