import AuthWrapper from "@/components/auth/AuthWrapper";
import SignInForm from "@/components/auth/SignInForm";
import AnimationWrapper from "@/components/ui/AnimationWrapper";

const page = () => {
  return (
    <AnimationWrapper>
      <AuthWrapper title="Sign In" subTitle="Welcome back, you’ve been missed!">
        <SignInForm />
      </AuthWrapper>
    </AnimationWrapper>
  );
};

export default page;
