export const saveEmail = (email: string) => {
  localStorage.setItem('EMAIL', email);
};

export const getEmail = () => {
  return localStorage.getItem('EMAIL');
};

export const clearEmail = () => {
  localStorage.removeItem('EMAIL');
};
