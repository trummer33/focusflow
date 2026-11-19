// Cliente HTTP
const API = 'https://focusflow-api-baqe.onrender.com/api';
export const api = { getData: () => fetch(API + '/data') };
