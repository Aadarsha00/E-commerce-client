// Page.tsx
import FormLogin from "@/components/login/formLogin";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col justify-center md:items-center px-6 sm:px-10 py-12 w-full md:w-96 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center tracking-wide mb-8 text-gray-800">
          Welcome Back
        </h1>
        <FormLogin />
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <span className="text-blue-600 font-semibold hover:underline transition-all">
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
