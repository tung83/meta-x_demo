import axios from './api';
import { replaceImages } from './mockImages';

export const pagingFetch = async (url, pageParam = 1) => {
  const { data: dataResult } = await axios.get(`${url}${pageParam}`);
  const { data, page, totalPages } = dataResult;
  return { data, nextPage: page < totalPages ? page + 1 : undefined };
};

export const userPagingFetch = async ({ pageParam = 1 }) => {
  const result = await pagingFetch('users/all?pageSize=10&page=', pageParam);
  return replaceImages(result);
};

export const followingPagingFetch = async ({ pageParam = 1 }) => {
  return await pagingFetch('users/friends?pageSize=10&page=', pageParam);
};

export const tagsFetchAll = async () => {
  return await axios.get('/tags');
};
