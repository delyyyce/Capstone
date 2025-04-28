import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/reviews' }),
  endpoints: (builder) => ({
    getReviewsByItemId: builder.query({
      query: (itemId) => `?itemId=${itemId}`,
    }),
    createReview: builder.mutation({
      query: (newReview) => ({
        url: '/',
        method: 'POST',
        body: newReview,
      }),
    }),
    editReview: builder.mutation({
      query: ({ id, updatedReview }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: updatedReview,
      }),
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetReviewsByItemIdQuery,
  useCreateReviewMutation,
  useEditReviewMutation,
  useDeleteReviewMutation,
} = reviewsApi;
