import { api, handleResponse, handleError } from "./apiServices";

export const createBlog = (data) =>
  api().post(`/api/form/create`, data).then(handleResponse).catch(handleError);

export const editBlog = (id, data) =>
  api()
    .put(`/api/form/edit/${id}`, data)
    .then(handleResponse)
    .catch(handleError);

export const getAllBlogList = () =>
  api().get(`/api/form/getall`).then(handleResponse).catch(handleError);

export const getByDataBlogID = (id) =>
  api().get(`/api/form/view/${id}`).then(handleResponse).catch(handleError);

export const deleyeBlogID = (id) =>
  api()
    .delete(`/api/form/delete/${id}`)
    .then(handleResponse)
    .catch(handleError);
