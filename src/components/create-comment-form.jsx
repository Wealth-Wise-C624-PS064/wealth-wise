import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCreateComment } from "@/hooks/comments";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LoaderIcon } from "lucide-react";

const formSchema = z.object({
  text: z.string(),
});

export default function CreateCommentForm() {
  const { postId } = useParams();

  const { createComment, isPending } = useCreateComment();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = ({ text }) => {
    createComment(
      { postId, text },
      {
        onSettled: () => {
          form.reset({ text: "" });
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teks</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tambahkan komentar..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full bg-primary-blue hover:bg-primary-blue/80">
          {isPending && <LoaderIcon className="w-5 h-5 animate-spin" />}
          <span className={`${isPending && "ml-2"}`}>Buat Komentar</span>
        </Button>
      </form>
    </Form>
  );
}
