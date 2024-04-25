import Image from "next/image";
import SignInForm from "./sign-in-form";
import AuthWrapperOne from "@/app/shared/auth-layout/auth-wrapper-one";
import UnderlineShape from "@/components/shape/underline";
import { metaObject } from "@/config/site.config";
import SignInImage from "/public/privChat.svg";

export const metadata = {
  ...metaObject("Company Sign In"),
};

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          Welcome back! <br />
          <span className="relative inline-block">
            Sign in to
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" />
          </span>{" "}
          continue.
        </>
      }
      description="If you are a receipient, you will be directed to report management. If you are an administrator, use your administrator account details to access your company dashboard. "
      bannerTitle="Empowering Accountability."
      bannerDescription="Access anonymous and reports from whistleblowers. Securely sign in now to uncover the truth and uphold your organization's integrity."
      isSocialLoginActive={true}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[700px]">
          <Image
            src={SignInImage}
            alt="Sign Up Thumbnail"
            // fill
            priority
            sizes="(max-width: 150px) 60vw"
            className="object-cover mt-2"
          />
        </div>
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
