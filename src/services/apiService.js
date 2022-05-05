import baseService from "./baseService";


export const searchItems = (query) => baseService().get(`/search?q=:"${query}`);

