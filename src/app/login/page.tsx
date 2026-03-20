"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../hooks/useModal";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { loginUser, googleSignup, facebookSignup, loading, setLoading } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  const { openModal } = useModal();
  const router = useRouter();
  const [redirectTo, setRedirectTo] = useState("/");

  // ✅ Get query param without Suspense
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setRedirectTo(params.get("from") || "/");
    }
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();

  const handleForm: SubmitHandler<LoginFormValues> = async (data) => {
    setLoading(true);
    try {
      await loginUser(data.email, data.password);
      
      openModal({
        title: "Welcome back!",
        message: "Successfully logged in.",
        autoCloseTime: 4000,
      });
      router.push(redirectTo);
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
      console.error(error)
    }
  };

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
    <div className="sm:py-10 py-24 lg:py-36 bg-white flex items-center justify-center overflow-hidden">
      
        <div className="absolute w-40 h-56 bg-blue-500 rounded-full top-1/3 left-1/2 opacity-20 blur-3xl z-10"></div>
        <div className="absolute w-40 h-56 bg-blue-600 rounded-full top-2/3 right-1/2 opacity-20 blur-3xl z-10"></div>
      <form
        className="relative z-20 bg-glass backdrop-blur-md border-t rounded-xl p-8 w-[90%] sm:w-[380px] flex flex-col gap-4 shadow-2xl"
        onSubmit={handleSubmit(handleForm)}
      >
        

        <h2 className="text-2xl font-semibold text-black opacity-80 text-center mb-2">Login Here</h2>

        {/* Email */}
        <label className="text-gray-300 text-sm font-medium">Email or Phone</label>
        <input
          {...register("email", { required: true })}
          placeholder="Your Email or Phone"
          className="p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.email && <span className="text-red-400 text-xs">Email is required</span>}

        {/* Password */}
        <label className="text-gray-300 text-sm font-medium">Password</label>
        <input
          {...register("password", { minLength: 6 })}
          type="password"
          placeholder="Your Password"
          className="p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.password && <span className="text-red-400 text-xs">Password must be 6+ characters</span>}

        {/* Remember Me */}
        <div className="flex items-center gap-2 text-xs">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 accent-teal-400"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="remember" className="text-gray-400">Remember Me</label>
        </div>

        {/* Login button */}
        <button
          disabled={loading || !isChecked}
          className="bg-green-400 hover:bg-teal-400 text-black font-bold py-3 rounded-md disabled:opacity-50 transition"
        >
          {loading ? "Loading..." : "Login"}
        </button>

        {/* Forgot Password */}
        <p className="text-gray-400 text-center text-xs">
          Forgot your password?{" "}
          <a href="/reset-password" className="text-blue-500">Reset Here</a>
        </p>

        {/* Social buttons */}
        <div className="flex sm:flex-row gap-4 mt-2">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
          >
            <FcGoogle size={20} />
          </button>
          <button
            type="button"
            onClick={handleFacebookLogin}
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
          >
            <FaFacebookF size={20} className="text-blue-500" />
          </button>
        </div>

        {/* Sign Up link */}
        <p className="text-gray-400 text-center text-xs mt-2">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500">Sign Up Here!</a>
        </p>
      </form>
    </div>
  );
}
