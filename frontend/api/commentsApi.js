import { api } from './api'; 

export const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsByReviewId: builder.query({
      query: (reviewId) => `/reviews/${reviewId}/comments`,
    }),
    createComment: builder.mutation({
      query: ({ reviewId, content }) => ({
        url: `/reviews/${reviewId}/comments`,
        method: 'POST',
        body: { content },
      }),
    }),
    updateComment: builder.mutation({
      query: ({ commentId, content }) => ({
        url: `/comments/${commentId}`,
        method: 'PUT',
        body: { content },
      }),
    }),
    deleteComment: builder.mutation({
      query: (commentId) => ({
        url: `/comments/${commentId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCommentsByReviewIdQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentsApi;
