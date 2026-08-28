/**
 * Client testimonials. None are documented in the brand material, so this
 * list ships empty and the testimonial section renders only when a quote is
 * added. Never invent a quote — add real ones here as they are collected.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [];
