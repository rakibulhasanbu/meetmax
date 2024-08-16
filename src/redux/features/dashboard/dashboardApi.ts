import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../api/tagTypesList";

const userDashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (reviewData) => ({
        url: "/review",
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: [tagTypes.review],
    }),

    createTicket: builder.mutation({
      query: (ticketData) => ({
        url: "/ticket",
        method: "POST",
        body: ticketData,
      }),
      // invalidatesTags: [tagTypes.review],
    }),

    sendInvitation: builder.mutation({
      query: (referral) => ({
        url: "/referral/send-invitation",
        method: "POST",
        body: referral,
      }),
      // invalidatesTags: [tagTypes.review],
    }),

    getTickets: builder.query({
      query: (filterOptions) => ({
        url: `/ticket${filterOptions ? `?${filterOptions}` : ""}`,
        method: "GET",
      }),
      providesTags: [tagTypes.dashboard],
    }),

    getBlogBySlug: builder.query({
      query: ({ slug, mode }) => {
        let url = `/blog/${slug}`;
        if (mode) {
          url += `?mode=${mode}`;
        }
        return {
          url,
          method: "GET",
        };
      },
      providesTags: [tagTypes.review, tagTypes.dashboard],
    }),

    getMyBlogs: builder.query({
      query: (filterOptions) => ({
        url: `/my-blogs${filterOptions ? `?${filterOptions}` : ""}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),

    getIsLikedByUser: builder.query({
      query: (id) => ({
        url: `/isLiked-by-user?id=${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review, tagTypes.dashboard],
    }),

    updateBlog: builder.mutation({
      query: (updatedData) => ({
        url: `/blog/${updatedData.slug}`,
        method: "PUT",
        body: updatedData.data,
      }),
      invalidatesTags: [tagTypes.review],
    }),

    likeBlog: builder.mutation({
      query: (data) => ({
        url: `/like-blog`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tagTypes.review],
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetBlogBySlugQuery,
  useCreateTicketMutation,
  useGetTicketsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetMyBlogsQuery,
  useLikeBlogMutation,
  useGetIsLikedByUserQuery,
  useSendInvitationMutation,
} = userDashboardApi;
