import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    resendEmail: builder.mutation({
      query: (email) => ({
        url: `/auth/resend/${email}`,
        method: "POST",
        // body: userInfo,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: `/auth/send-forgot-email/${email}`,
        method: "POST",
        // body: userInfo,
      }),
    }),
    verifyUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/verify-signup-token",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signin",
        method: "POST",
        body: userInfo,
      }),
    }),
    changePassword: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/change-password",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useVerifyUserMutation,
  useSignupUserMutation,
  useChangePasswordMutation,
  useResendEmailMutation,
  useForgotPasswordMutation,
} = authApi;
