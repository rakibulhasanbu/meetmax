import AuthWrapper from "@/components/auth/AuthWrapper";
import NewPassword from "@/components/auth/NewPassword";
import AnimationWrapper from "@/components/ui/AnimationWrapper";

const page = () => {
  return (
    <AnimationWrapper>
      <AuthWrapper
        title="Set password"
        subTitle="Secure your account by setting a strong, unique password."
      >
        <NewPassword />
      </AuthWrapper>
    </AnimationWrapper>
  );
};

export default page;
