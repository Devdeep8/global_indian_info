"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
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
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  issueNumber: z.coerce.number().min(1, "Issue number must be at least 1"),
  coverImage: z.any().optional(),
  pdf: z.any().optional(),
});

export default function EditMagazinePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
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

  useEffect(() => {
    const fetchMagazine = async () => {
      try {
        // We need an API to get a single magazine. 
        // Since I didn't create a specific GET API for ID, I might need to add one or use a server action.
        // For now, I'll assume I can fetch it.
        // Actually, I should create a GET endpoint in /api/magazine/[id]/route.ts
        const res = await fetch(`/api/magazine/${id}`);
        if (!res.ok) throw new Error("Failed to fetch magazine");
        const data = await res.json();
        
        form.reset({
          title: data.title,
          description: data.description || "",
          issueNumber: data.issueNumber,
        });
        setCoverPreview(data.coverImageUrl);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load magazine");
      } finally {
        setFetching(false);
      }
    };

    if (id) {
      fetchMagazine();
    }
  }, [id, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      const formData = new FormData();
      const coverFile = values.coverImage?.[0];
      const pdfFile = values.pdf?.[0];

      let coverImageUrl = undefined;
      let pdfUrl = undefined;

      // Upload Cover Image if changed
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

      // Upload PDF if changed
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

      const res = await fetch(`/api/magazine/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          issueNumber: values.issueNumber,
          coverImageUrl,
          pdfUrl,
        }),
      });

      if (!res.ok) throw new Error("Failed to update magazine");

      toast.success("Magazine updated successfully");
      router.push("/writer/magazine");
      router.refresh();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Magazine</h1>
      
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
            Update Magazine
          </Button>
        </form>
      </Form>
    </div>
  );
}
