import baseService from "./baseService";

export const searchItems = (query) => baseService().get(`/items?q=${query}`);

export const getItem = (id) => baseService().get(`/items/${id}`);
