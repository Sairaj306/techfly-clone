"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm text-center animate-scale-in">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground leading-relaxed">
          We've received your message and will get back to you within 24 hours.
        </p>
      </Card>
    )
  }

  return (
    <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              className="bg-background/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">
            Service Interested In <span className="text-destructive">*</span>
          </Label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="flex h-10 w-full rounded-lg border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="branding">Brand Identity & Design</option>
            <option value="social-media">Social Media Management</option>
            <option value="photography">Product Photography</option>
            <option value="other">Other Services</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            Project Details <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project, goals, and timeline..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-background/50 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg h-12"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </Card>
  )
}
