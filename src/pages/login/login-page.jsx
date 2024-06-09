import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

import { useLoginWithGoogle } from "@/hooks";

import AuthLayout from "@/layouts/auth-layout";

import LoginForm from "@/components/login-form";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginWithGoogle } = useLoginWithGoogle();

  return (
    <AuthLayout>
      <div className="mb-4">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Kembali</span>
          </div>
        </Button>
      </div>
      <div className="space-y-4">
        <div className="mb-6 space-y-2">
          <h2 className="text-2xl font-semibold">Login ke akun anda.</h2>
          <p className="text-sm prose">
            Selamat datang kembali! Pilih salah satu metode untuk login:
          </p>
        </div>
        <div className="flex flex-col">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => loginWithGoogle()}
          >
            <div className="flex flex-row items-center justify-center gap-1">
              <img
                src="/assets/google.svg"
                alt="google-icon"
                className="w-8 h-8"
              />
              <span>Google</span>
            </div>
          </Button>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="border-b-2 border-gray-200 grow"></div>
          <h3 className="font-sm">Or</h3>
          <div className="border-b-2 border-gray-200 grow"></div>
        </div>
        <div>
          <LoginForm />
        </div>
        <div>
          Belum punya akun?{" "}
          <Link to="/register" className="font-semibold text-primary-blue">
            Buat akun
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
