"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  isAttending: z.string().min(1, "Please select an option"),
  guestsCount: z.coerce.number().min(1).max(10).optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function RSVP() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      isAttending: "",
      guestsCount: 1,
    },
  });

  const isAttending = watch("isAttending") === "yes";

  const onSubmit = async (data: FormValues) => {
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("RSVP Data:", data);
    toast.success("RSVP Submitted Successfully", {
      description: "Thank you for responding!",
    });
    reset();
  };

  return (
    <section id="rsvp" className="py-24 bg-soft-gradient">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface p-8 md:p-12 rounded-3xl shadow-sm border border-secondary/20"
        >
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">RSVP</h2>
            <p className="text-text-muted">Kindly respond by July 7, 2026</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                {...register("fullName")}
                className={errors.fullName ? "border-destructive" : ""}
              />
              {errors.fullName && (
                <p className="text-sm text-destructive">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-3">
              <Label>Will you be attending?</Label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center space-x-3 bg-background border border-input rounded-md p-4 cursor-pointer hover:bg-accent/10 transition-colors flex-1">
                  <input
                    type="radio"
                    value="yes"
                    className="w-4 h-4 text-primary"
                    {...register("isAttending")}
                  />
                  <span className="text-sm font-medium">Joyfully Accepts</span>
                </label>
                <label className="flex items-center space-x-3 bg-background border border-input rounded-md p-4 cursor-pointer hover:bg-accent/10 transition-colors flex-1">
                  <input
                    type="radio"
                    value="no"
                    className="w-4 h-4 text-primary"
                    {...register("isAttending")}
                  />
                  <span className="text-sm font-medium">Regretfully Declines</span>
                </label>
              </div>
              {errors.isAttending && (
                <p className="text-sm text-destructive">{errors.isAttending.message}</p>
              )}
            </div>

            {isAttending && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-2"
              >
                <Label htmlFor="guestsCount">Number of Guests (including yourself)</Label>
                <Input
                  id="guestsCount"
                  type="number"
                  min="1"
                  max="10"
                  {...register("guestsCount")}
                  className={errors.guestsCount ? "border-destructive" : ""}
                />
              </motion.div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">Message for the Couple (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Leave a wish or let us know about any dietary requirements..."
                {...register("message")}
                rows={4}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit RSVP"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
