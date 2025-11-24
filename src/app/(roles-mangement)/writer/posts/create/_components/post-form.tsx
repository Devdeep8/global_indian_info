"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";
import { MDXEditor } from "@/components/tiptap-templates/simple/simple-editor";

// ------------------------------
// ZOD SCHEMA
// ------------------------------
const PostSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  excerpt: z.string().optional(),
  content: z.string().min(1).max(50000),

  type: z.enum(["BLOG", "ARTICLE", "FEATURE", "INTERVIEW"]),
  status: z.enum(["DRAFT", "REVIEW", "PUBLISHED", "ARCHIVED"]),
  visibility: z.enum(["PUBLIC", "PRIVATE", "SUBSCRIBERS_ONLY"]),

  coverImageUrl: z.string().nullable().optional(),
  categoryId: z.string().nullable().optional(),
  tags: z.string().optional(),
});

// ------------------------------
// MAIN FORM COMPONENT
// ------------------------------
export default function CreatePostForm({
  categories,
  user,
}: {
  categories: any[];
  user: any;
}) {
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      type: "ARTICLE",
      status: "DRAFT",
      visibility: "PUBLIC",
    },
  });

  const [loading, setLoading] = useState(false);
  const [slugEdited, setSlugEdited] = useState(false);

  // ------------------------------
  // SLUGIFY FUNCTION
  // ------------------------------
  function slugify(str: string) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  // ------------------------------
  // IMAGE UPLOAD HANDLER (2MB limit + mime check)
  // ------------------------------
  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Only image files are allowed.");
      return;
    }

    // Validate size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be smaller than 2MB.");
      return;
    }

    toast.info("Uploading image...");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!data?.url) {
      toast.error("Image upload failed.");
      return;
    }

    form.setValue("coverImageUrl", data.url);
    toast.success("Cover image uploaded!");
  }

  // ------------------------------
  // FORM SUBMIT HANDLER
  // ------------------------------
  async function onSubmit(values: z.infer<typeof PostSchema>) {
    setLoading(true);

    const tagList =
      values.tags
        ?.split(",")
        .map((t) => t.trim())
        .filter(Boolean) || [];

    const payload = {
      ...values,
      tags: tagList,
      excerpt: values.excerpt || "",
      categoryId: values.categoryId || null,
      coverImageUrl: values.coverImageUrl || null,
      scheduledAt: null,
      publishedAt: null,
      magazineId: null,
      authorId: user.id,
    };

    const res = await fetch("/api/posts/articles", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("POST RESPONSE:", data);

    if (data.success) {
      toast.success("Post created successfully!");
    } else {
      toast.error(data.error || "Failed to create post.");
    }

    setLoading(false);
  }

  // ------------------------------
  // RENDER FORM
  // ------------------------------
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        {/* TITLE */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter post title"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value);
                    if (!slugEdited) {
                      form.setValue("slug", slugify(value));
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* SLUG */}
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input
                  placeholder="my-awesome-post"
                  {...field}
                  onChange={(e) => {
                    setSlugEdited(true);
                    field.onChange(slugify(e.target.value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* EXCERPT */}
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Textarea placeholder="Short intro..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <MDXEditor
          content={form.watch("content")}
          onChange={(mdx) => form.setValue("content", mdx)}
        />

        {/* COVER IMAGE */}
        <FormField
          control={form.control}
          name="coverImageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Image (Max 2MB)</FormLabel>

              {field.value && (
                <img
                  src={field.value}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
              )}

              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* TYPE · STATUS · VISIBILITY · CATEGORY */}
        <div className="grid grid-cols-4 gap-4">
          {/* TYPE */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"ARTICLE"}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="BLOG">Blog</SelectItem>
                    <SelectItem value="ARTICLE">Article</SelectItem>
                    <SelectItem value="FEATURE">Feature</SelectItem>
                    <SelectItem value="INTERVIEW">Interview</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* STATUS */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"DRAFT"}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="DRAFT">Draft</SelectItem>
                    <SelectItem value="REVIEW">Review</SelectItem>
                    <SelectItem value="PUBLISHED">Published</SelectItem>
                    <SelectItem value="ARCHIVED">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* VISIBILITY */}
          <FormField
            control={form.control}
            name="visibility"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Visibility</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={"PUBLIC"}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="PUBLIC">Public</SelectItem>
                    <SelectItem value="PRIVATE">Private</SelectItem>
                    <SelectItem value="SUBSCRIBERS_ONLY">
                      Subscribers Only
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* CATEGORY */}
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={(v) => field.onChange(v === "null" ? null : v)}
                  defaultValue={field.value || "null"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="null">None</SelectItem>

                    {categories.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        {/* TAGS */}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags (comma separated)</FormLabel>
              <FormControl>
                <Input placeholder="javascript, web dev" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* SUBMIT */}
        <Button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Post"}
        </Button>
      </form>
    </Form>
  );
}
