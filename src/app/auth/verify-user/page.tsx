"use client";

import AuthWrapper from "@/components/auth/AuthWrapper";
import VerifyUser from "@/components/auth/VerifyUser";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";

const Page = () => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <AnimationWrapper>
      <AuthWrapper
        title="Verify OTP"
        subTitle={`Input the code we sent to your email ${user?.email}.`}
      >
        <VerifyUser />
      </AuthWrapper>
    </AnimationWrapper>
  );
};

export default Page;
