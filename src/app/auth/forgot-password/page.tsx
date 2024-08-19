import AuthWrapper from "@/components/auth/AuthWrapper";
import ForgotPassword from "@/components/auth/ForgotPassword";
import AnimationWrapper from "@/components/ui/AnimationWrapper";

const page = () => {
  return (
    <AnimationWrapper>
      <AuthWrapper
        title="Forgot password?"
        subTitle="Enter your details to receive a rest link "
      >
        <ForgotPassword />
      </AuthWrapper>
    </AnimationWrapper>
  );
};

export default page;
