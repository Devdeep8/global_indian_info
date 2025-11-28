"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { createMagazine } from "@/services/magazine"; // This won't work in client component, need server action or API
import { toast } from "sonner";
import { Loader2, Upload } from "lucide-react";

// Since we can't import server actions directly into client components if they are not defined as "use server",
// and I defined createMagazine in a service file which likely isn't a server action file.
// I should probably create a server action wrapper or use an API route.
// For now, I'll assume I can make a server action file or use API.
// Let's create a server action file for magazine operations.

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  issueNumber: z.coerce.number().min(1, "Issue number must be at least 1"),
  coverImage: z.any().optional(), // File validation is tricky with zod, doing manual check
  pdf: z.any().optional(),
});

export default function CreateMagazinePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      title: "",
      description: "",
      issueNumber: 1,
      coverImage: undefined,
      pdf: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      const formData = new FormData();
      const coverFile = values.coverImage?.[0];
      const pdfFile = values.pdf?.[0];

      let coverImageUrl = "";
      let pdfUrl = "";

      // Upload Cover Image
      if (coverFile) {
        const coverFormData = new FormData();
        coverFormData.append("file", coverFile);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: coverFormData,
        });
        if (!res.ok) throw new Error("Failed to upload cover image");
        const data = await res.json();
        coverImageUrl = data.url;
      }

      // Upload PDF
      if (pdfFile) {
        const pdfFormData = new FormData();
        pdfFormData.append("file", pdfFile);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: pdfFormData,
        });
        if (!res.ok) throw new Error("Failed to upload PDF");
        const data = await res.json();
        pdfUrl = data.url;
      }

      // Create Magazine
      // We need a server action or API route to call createMagazine.
      // I'll create a server action in src/app/actions/magazine.ts
      
      const res = await fetch("/api/magazine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          issueNumber: values.issueNumber,
          coverImageUrl,
          pdfUrl,
        }),
      });

      if (!res.ok) throw new Error("Failed to create magazine");

      toast.success("Magazine created successfully");
      router.push("/writer/magazine");
      router.refresh();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create Magazine</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Magazine Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="issueNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Issue Number</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Magazine Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coverImage"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormLabel>Cover Image</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-4">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          onChange(e.target.files);
                          setCoverPreview(URL.createObjectURL(file));
                        }
                      }}
                      {...field}
                    />
                    {coverPreview && (
                      <img
                        src={coverPreview}
                        alt="Preview"
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pdf"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormLabel>Magazine PDF</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => onChange(e.target.files)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Create Magazine
          </Button>
        </form>
      </Form>
    </div>
  );
}
