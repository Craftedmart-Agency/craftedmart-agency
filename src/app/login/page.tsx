"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../hooks/useModal";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image"; // For the logo
import Link from "next/link"; // For better navigation in Next.js

// Interface for form values
interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { loginUser, googleSignup, facebookSignup, loading, setLoading } =
    useAuth();
  const [isChecked, setIsChecked] = useState(false); // Manages the 'Remember Me' state
  const { openModal } = useModal(); // Custom hook to manage modal display
  const router = useRouter();
  const [redirectTo, setRedirectTo] = useState("/"); // Default redirection path

  // Get query param without Suspense
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setRedirectTo(params.get("from") || "/");
    }
  }, []);

  // useForm hook for form management
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  // Function to handle form submission
  const handleForm: SubmitHandler<LoginFormValues> = async (data) => {
    setLoading(true);
    try {
      await loginUser(data.email, data.password);

      openModal({
        title: "Welcome back!",
        message: "Successfully logged in.",
        autoCloseTime: 4000,
      });
      router.push(redirectTo); // Redirects to the target page after successful login
    } catch (error) {
      setLoading(false);
      openModal({
        title: "Login Failed",
        message: "Invalid email or password.",
        autoCloseTime: 4000,
      });
      console.error(error);
    }
  };

  // Function to handle Google login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleSignup();
      openModal({
        title: "Welcome with Google!",
        message: "Successfully logged in with Google.",
        autoCloseTime: 4000,
      });
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // Function to handle Facebook login
  const handleFacebookLogin = async () => {
    setLoading(true);
    try {
      await facebookSignup();
      openModal({
        title: "Welcome with Facebook!",
        message: "Successfully logged in with Facebook.",
        autoCloseTime: 4000,
      });
      router.push(redirectTo);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    // Main container with full height and dark background
    <div className=" bg-[#0d1117] flex flex-col relative text-white font-sans">

      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Main content: transparent login card */}
      <main className="flex-grow flex items-center justify-center relative z-10 px-4 py-20 md:py-0 md:min-h-[80vh]">
        {/* Transparent card with frosted-glass-like effects */}
        <div className="bg-black opacity-80 backdrop-blur-sm shadow-xl border border-[#ffffff15] rounded-3xl p-8 shadow-2xl w-full max-w-[420px]">
          {/* Card Title */}
          <h2 className="text-xl md:text-3xl font-semibold text-center mb-6">
            Login Here
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleForm)}
            className="flex flex-col gap-5"
          >
            {/* Email field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400">Email or Phone</label>
              <input
                {...register("email", { required: true })}
                placeholder="Your Email or Phone"
                className="p-3.5 rounded-xl bg-[#2a303c] border border-gray-700 text-sm focus:ring-1 focus:ring-[#3ed8b8] outline-none"
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
                className="p-3.5 rounded-xl bg-[#2a303c] border border-gray-700 text-sm focus:ring-1 focus:ring-[#3ed8b8] outline-none"
              />
              {errors.password && (
                <span className="text-red-400 text-xs mt-1">
                  Password must be 6+ characters
                </span>
              )}
            </div>

            {/* Remember Me checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-[#3ed8b8]"
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label
                htmlFor="remember"
                className="text-xs text-gray-400 cursor-pointer"
              >
                Remember Me
              </label>
            </div>

            {/* Login button (conditionally enabled) */}
            <button
              disabled={loading || !isChecked}
              className="bg-[#3ed8b8] hover:bg-[#32c0a3] text-black font-bold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>

          {/* Forgot Password link */}
          <p className="text-xs text-gray-400 text-center mt-5">
            Forgot your password?{" "}
            <Link
              href="/reset-password"
              className="text-[#3ed8b8] hover:underline"
            >
              Reset Here
            </Link>
          </p>

          {/* Social login buttons */}
          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#2a303c] border border-gray-700 rounded-xl hover:bg-[#353b47] transition"
            >
              <FcGoogle size={20} />
            </button>
            <button
              type="button"
              onClick={handleFacebookLogin}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#2a303c] border border-gray-700 rounded-xl hover:bg-[#353b47] transition"
            >
              <FaFacebookF size={20} className="text-[#1877F2]" />
            </button>
          </div>

          {/* Sign Up link */}
          <p className="text-xs text-gray-400 text-center mt-6">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-[#3ed8b8] hover:underline">
              Sign Up Here!
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
