import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreatePost } from "@/hooks";

const formSchema = z.object({
  title: z
    .string({ message: "Title tidak boleh kosong" })
    .min(3, { message: "Title terlalu pendek" })
    .max(50, { message: "Title terlalu panjang" }),
  body: z
    .string({ message: "Body tidak boleh kosong" })
    .min(3, { message: "Title terlalu pendek" }),
});

export default function CreatePostForm() {
  const { createPost, isPending } = useCreatePost();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values) => {
    createPost(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full gap-3"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Body"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isPending ? "Menambahkan post baru..." : "Tambahkan Post"}
        </Button>
      </form>
    </Form>
  );
}
