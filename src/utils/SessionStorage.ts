

export function setSessionData(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }
  
  export function getSessionData(key: string): string | null {
    return sessionStorage.getItem(key);
  }
  