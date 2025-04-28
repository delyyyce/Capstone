import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/items' }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => '/',
    }),
    getItemById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetItemsQuery, useGetItemByIdQuery } = itemsApi;