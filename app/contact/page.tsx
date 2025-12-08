"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Website Design & Development",
  "SEO Services",
  "Digital Marketing",
  "AI Integration",
  "Mobile App Development",
  "UI/UX Design",
  "E-Commerce Solutions",
  "WordPress Development",
  "Custom Software Development",
  "Other (Please specify in message)",
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid mobile number.",
  }),
  company: z.string().optional(),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Inquiry Sent Successfully!",
          description: "Thank you for your inquiry. Our team will get back to you shortly.",
        });
        form.reset();
      } else {
        throw new Error(data.error || "Failed to send inquiry");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Let&apos;s <span className="text-gradient-primary">Grow Your Business</span>
          </h1>
          <p className="text-muted-foreground text-xl">
            Ready to rank #1 on Google? Visit our office in Chikalthana MIDC or drop us a message for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-primary text-primary-foreground border-none shadow-lg h-full">
              <CardContent className="pt-8 space-y-8">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">Contact Info</h3>
                  <p className="text-primary-foreground/80">
                    Reach out to us through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 mt-1" />
                    <div>
                      <h4 className="font-bold">Office</h4>
                      <a 
                        href="https://share.google/fa5Xjx7bbkthbzjuf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-foreground/80 hover:text-white transition-colors"
                        data-testid="link-office-address"
                      >
                        T-16, Software Technology Parks of India,<br />Chikhalthana MIDC, Chhatrapati Sambhaji Nagar,<br />431008, Maharashtra.
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 mt-1" />
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <a href="mailto:info@ksoftsolution.com" className="text-primary-foreground/80 hover:text-white transition-colors" data-testid="link-email">info@ksoftsolution.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 mt-1" />
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <a href="tel:+919765412319" className="text-primary-foreground/80 hover:text-white transition-colors" data-testid="link-phone">+91-976-541-2319</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-lg">
              <CardContent className="pt-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" data-testid="input-name" {...field} />
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
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" data-testid="input-email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" type="tel" data-testid="input-phone" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company / Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Name" data-testid="input-company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Required *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service} data-testid={`option-service-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project requirements, goals, and any specific features you need..." 
                              className="min-h-[150px]"
                              data-testid="textarea-message"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto bg-primary text-primary-foreground"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Inquiry"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  );
}
