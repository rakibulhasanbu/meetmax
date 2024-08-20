import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
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
        url: `/auth/forgot-password`,
        method: "POST",
        body: email,
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
    newPassword: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/new-password",
        method: "POST",
        body: userInfo,
      }),
    }),
    googleAuthRegister: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/google-auth",
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
  useNewPasswordMutation,
  useResendEmailMutation,
  useForgotPasswordMutation,
  useGoogleAuthRegisterMutation,
} = authApi;
