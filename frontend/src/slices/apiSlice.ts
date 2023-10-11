import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  // @desc due to proxy usages do not need to add 'http://localhost:5000'
  baseUrl: ''
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: () => ({})
});
