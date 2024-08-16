import AuthWrapper from "@/components/auth/AuthWrapper";
import ForgotPassword from "@/components/auth/ForgotPassword";
import AnimationWrapper from "@/components/ui/AnimationWrapper";

const page = () => {
  return (
    <AnimationWrapper>
      <AuthWrapper
        src="/image/forgot-password.png"
        title="Forgot password"
        subTitle="Enter your e-mail, we will send a code to your email
to reset your password."
      >
        <ForgotPassword />
      </AuthWrapper>
    </AnimationWrapper>
  );
};

export default page;
