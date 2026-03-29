"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../hooks/useModal";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const {
    createUser,
    updateUser,
    googleSignup,
    facebookSignup,
    loading,
    setLoading,
  } = useAuth();

  const [isChecked, setIsChecked] = useState(false);
  const { openModal } = useModal();
  const router = useRouter();
  const [redirectTo, setRedirectTo] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setRedirectTo(params.get("from") || "/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  const handleForm: SubmitHandler<SignUpFormValues> = async (data) => {
    setLoading(true);
    try {
      const userCredential = await createUser(
        data.email,
        data.password,
        data.name,
      );
      if (userCredential) await updateUser(data.name);

      openModal({
        title: `Welcome ${data.name}!`,
        message: "Successfully signed up. Please check your email.",
        autoCloseTime: 4000,
      });

      setLoading(false);
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
      console.error(error);
      openModal({
        title: "Signup Failed",
        message: "Something went wrong. Please try again.",
        autoCloseTime: 4000,
      });
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      await googleSignup();
      openModal({
        title: "Welcome with Google!",
        message: "Successfully signed up with Google.",
        autoCloseTime: 4000,
      });
      setLoading(false);
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleFacebookSignup = async () => {
    setLoading(true);
    try {
      await facebookSignup();
      openModal({
        title: "Welcome with Facebook!",
        message: "Successfully signed up with Facebook.",
        autoCloseTime: 4000,
      });
      setLoading(false);
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="bg-[#0d1117] flex flex-col relative text-white font-sans md:pt-0 md:min-h-[70vh]">
      {/* Background radial gradient (Login-এর মতো হুবহু) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white rounded-full opacity-10 blur-3xl"></div>
      </div>

      <main className="flex-grow flex items-center justify-center relative z-10 px-4 py-12">
        {/* Transparent card with frosted-glass effect */}
        <div className="bg-black/60 backdrop-blur-md shadow-2xl border border-[#ffffff15] rounded-3xl p-8 w-full max-w-[420px]">
          <h2 className="text-xl md:text-3xl font-semibold text-center mb-6">
            Sign Up Here
          </h2>

          <form
            onSubmit={handleSubmit(handleForm)}
            className="flex flex-col gap-5"
          >
            {/* Full Name field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400">Full Name</label>
              <input
                {...register("name", { required: true })}
                placeholder="Your Full Name"
                className="p-3.5 rounded-xl bg-[#2a303c] border border-gray-700 text-sm focus:ring-1 focus:ring-[#3ed8b8] outline-none text-white"
              />
              {errors.name && (
                <span className="text-red-400 text-xs mt-1">
                  Name is required
                </span>
              )}
            </div>

            {/* Email field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400">Email or Phone</label>
              <input
                {...register("email", { required: true })}
                placeholder="Your Email or Phone"
                className="p-3.5 rounded-xl bg-[#2a303c] border border-gray-700 text-sm focus:ring-1 focus:ring-[#3ed8b8] outline-none text-white"
              />
              {errors.email && (
                <span className="text-red-400 text-xs mt-1">
                  Email is required
                </span>
              )}
            </div>

            {/* Password field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400">Password</label>
              <input
                {...register("password", { minLength: 6 })}
                type="password"
                placeholder="Your Password"
                className="p-3.5 rounded-xl bg-[#2a303c] border border-gray-700 text-sm focus:ring-1 focus:ring-[#3ed8b8] outline-none text-white"
              />
              {errors.password && (
                <span className="text-red-400 text-xs mt-1">
                  Password must be 6+ characters
                </span>
              )}
            </div>

            {/* Terms & Conditions checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-0.5 accent-[#3ed8b8]"
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label
                htmlFor="terms"
                className="text-xs text-gray-400 cursor-pointer leading-tight"
              >
                I agree with{" "}
                <Link
                  href="/terms"
                  className="text-[#3ed8b8] underline hover:text-[#32c0a3]"
                >
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-[#3ed8b8] underline hover:text-[#32c0a3]"
                >
                  Privacy Policies
                </Link>
              </label>
            </div>

            {/* Sign Up button */}
            <button
              disabled={loading || !isChecked}
              className="bg-[#3ed8b8] hover:bg-[#32c0a3] text-black font-bold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition mt-2"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>

          {/* Social login buttons */}
          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={handleGoogleSignup}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#2a303c] border border-gray-700 rounded-xl hover:bg-[#353b47] transition"
            >
              <FcGoogle size={20} />
            </button>
            <button
              type="button"
              onClick={handleFacebookSignup}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#2a303c] border border-gray-700 rounded-xl hover:bg-[#353b47] transition"
            >
              <FaFacebookF size={20} className="text-[#1877F2]" />
            </button>
          </div>

          {/* Login link */}
          <p className="text-xs text-gray-400 text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#3ed8b8] hover:underline">
              Login Here!
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
