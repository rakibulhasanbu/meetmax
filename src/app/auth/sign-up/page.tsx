import AuthWrapper from "@/components/auth/AuthWrapper";
import SignUpForm from "@/components/auth/SignUpForm";
import AnimationWrapper from "@/components/ui/AnimationWrapper";

const page = () => {
  return (
    <AnimationWrapper>
      <AuthWrapper
        src="/image/sign-up.png"
        title="Sign Up"
        subTitle="Enter your information and get access to
      social media outreach. "
      >
        <SignUpForm />
      </AuthWrapper>
    </AnimationWrapper>
  );
};

export default page;
