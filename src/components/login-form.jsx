import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";

import { useLogin } from "@/hooks";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password terlalu pendek" })
    .max(20, { message: "Password terlalu panjang" }),
});

export default function LoginForm() {
  const { login, isPending } = useLogin();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values) => {
    login(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
        <Button
          type="submit"
          className="w-full bg-primary-blue hover:bg-primary-blue/80 disabled:bg-primary-blue/100"
          disabled={isPending}
        >
          {isPending && <Loader2Icon className="animate-spin" />}
          <span className={`${isPending && "ml-2"}`}>Masuk</span>
        </Button>
      </form>
    </Form>
  );
}
