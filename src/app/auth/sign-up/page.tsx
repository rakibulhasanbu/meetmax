import AuthWrapper from "@/components/auth/AuthWrapper";
import SignUpForm from "@/components/auth/SignUpForm";
import AnimationWrapper from "@/components/ui/AnimationWrapper";

const page = () => {
  return (
    <AnimationWrapper>
      <AuthWrapper
        title="Getting Started"
        subTitle="Create an account to continue and connect with the people. "
      >
        <SignUpForm />
      </AuthWrapper>
    </AnimationWrapper>
  );
};

export default page;
