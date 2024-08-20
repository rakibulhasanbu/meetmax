import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../api/tagTypesList";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (postData) => ({
        url: "/post",
        method: "POST",
        body: postData,
      }),
      invalidatesTags: [tagTypes.post],
    }),
    createComment: builder.mutation({
      query: (postData) => ({
        url: "/comment",
        method: "POST",
        body: postData,
      }),
      invalidatesTags: [tagTypes.post],
    }),

    getPosts: builder.query({
      query: (filterOptions) => ({
        url: `/posts${filterOptions ? `?${filterOptions}` : ""}`,
        method: "GET",
      }),
      providesTags: [tagTypes.post],
    }),

    uploadImage: builder.mutation({
      query: (info) => {
        return {
          url: `/upload-image`,
          method: "POST",
          body: info,
        };
      },
      // invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetPostsQuery,
  useCreateCommentMutation,
  useUploadImageMutation,
} = postApi;
