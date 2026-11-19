// Cliente HTTP
const API = 'https://focusflow-api.onrender.com/api';
export const api = { getData: () => fetch(API + '/data') };
