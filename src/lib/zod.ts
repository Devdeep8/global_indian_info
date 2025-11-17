import { ZodSchema, ZodError } from "zod";

export function validate<T>(schema: ZodSchema<T>, data: unknown): T {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      const message = error.issues
        .map((e) => `${e.path.join(".")}: ${e.message}`)
        .join(", ");
      throw new Error(`Validation failed: ${message}`);
    }
    throw error;
  }
}
