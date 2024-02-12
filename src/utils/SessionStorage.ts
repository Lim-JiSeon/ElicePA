const SessionStorage = {
  //eslint-disable-next-line
  setItem: (key: string, value: any) => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  },
  getItem: (key: string) => {
    if (typeof window !== "undefined") {
      const data = window.sessionStorage.getItem(key);

      if (data) {
        return JSON.parse(data);
      }
    }
    return null;
  },
  removeItem: (key: string) => {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(key);
    }
  },
};

export default SessionStorage;
