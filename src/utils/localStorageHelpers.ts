const LOCAL_STORAGE_KEY = 'linkList';

export const setLocalStorage = (value: any[]) => {
  const formatted = value.map((item: any) => {
    const { full_short_link, original_link, share_link } = item;
    return { full_short_link, original_link, share_link };
  });
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formatted));
};

export const getLocalStorage = (): any => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
};
