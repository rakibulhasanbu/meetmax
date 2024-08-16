import AuthWrapper from "@/components/auth/AuthWrapper";
import SignInForm from "@/components/auth/SignInForm";
import AnimationWrapper from "@/components/ui/AnimationWrapper";

const page = () => {
  return (
    <AnimationWrapper>
      <AuthWrapper
        src="/image/sign-in.png"
        title="Log in"
        subTitle="Log in with your details and continue your
      social media presence."
      >
        <SignInForm />
      </AuthWrapper>
    </AnimationWrapper>
  );
};

export default page;
