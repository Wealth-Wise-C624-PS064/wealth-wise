import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";

import { useRegister } from "@/hooks";

import auth from "@/lib/firebase/auth";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createUserFromAuth } from "@/services/authentication-service";

const formSchema = z
  .object({
    username: z.string().min(3, { message: "Username terlalu pendek" }),
    email: z.string().email({ message: "Email tidak valid" }),
    password: z.string().min(6, { message: "Password terlalu pendek" }),
    confirmPassword: z
      .string()
      .min(6, { message: "ConfirmPassword terlalu pendek" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama dengan ConfirmPassword",
    path: ["confirmPassword"],
  });

export default function RegisterForm() {
  const { register, isPending } = useRegister();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values) => {
    register(values, {
      onSettled: async (data) => {
        await createUserFromAuth(data, { displayName: values.username });
        await updateProfile(auth.currentUser, { displayName: values.username });
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konfirmasi Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Konfirmasi Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-primary-blue hover:bg-primary-blue/80 disabled:bg-primary-blue/100"
          disabled={isPending}
        >
          {isPending && <Loader2Icon className="animate-spin" />}
          <span className={`${isPending && "ml-2"}`}>Buat Akun</span>
        </Button>
      </form>
    </Form>
  );
}
