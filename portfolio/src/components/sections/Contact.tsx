import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import MailIcon from "@/assets/icon-mail.svg?react"
import PhoneIcon from "@/assets/icon-phone.svg?react"
import LocationIcon from "@/assets/icon-location.svg?react"
import LadybugBottom from "@/assets/ladybug-bottom.svg?react"
import CloverFooter from "@/assets/clover-footer.svg?react"

const formSchema = z.object({
  firstName: z.string().min(2, "Name too short"),
  lastName: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(5, "Subject too short"),
  message: z.string().min(10, "Message too short"),
})

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setSubmitError(false)
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
        reset()
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    }
  }

  return (
    <section id="contact" className="relative isolate w-full py-12 md:py-16 bg-[#9fbf7c] overflow-hidden">
      {/* Single small ladybug restored in the corner */}
      <div
        className="ladybug-interactive absolute top-5 right-5 sm:top-8 sm:right-8 md:top-8 md:right-12 pointer-events-auto z-20 select-none"
        aria-hidden="true"
      >
        <LadybugBottom className="h-[58px] w-12 sm:h-[68px] sm:w-14 md:h-[78px] md:w-[65px] rotate-[15deg] drop-shadow-md" />
      </div>

      <CloverFooter className="absolute bottom-[-20px] left-[-20px] w-32 h-32 opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div className="space-y-10 lg:pt-6">
            <div className="space-y-3">
              <h2 className="text-[40px] sm:text-[52px] font-black text-text-accent leading-[1]">Let's Chat!</h2>
            </div>

            <div className="space-y-3">
              <ContactInfo icon={<MailIcon className="w-3.5 h-3.5" />} text="aasahi@uwaterloo.ca" />
              <ContactInfo icon={<PhoneIcon className="w-3.5 h-3.5" />} text="+1 (647) 540-3642" />
              <ContactInfo icon={<LocationIcon className="w-3.5 h-3.5" />} text="Mississauga, ON" />
            </div>
          </div>

          {/* Right: Form */}
          <Card className="bg-gradient-to-br from-card-gradient-start to-card-gradient-end backdrop-blur-xl border-none shadow-none p-5 sm:p-8 rounded-2xl w-full max-w-lg mx-auto lg:mx-0">
            <CardHeader className="p-0 pb-5 space-y-1">
              <h3 className="text-sm font-semibold text-text-main">Send Me a Message</h3>
              <p className="text-sm text-text-main/60">I'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="p-0">
              {submitted ? (
                <div className="py-10 flex flex-col items-center gap-3 text-center">
                  <span className="text-3xl">🎉</span>
                  <p className="font-black text-text-main text-base">Message sent!</p>
                  <p className="text-text-main/60 text-sm">Thanks for reaching out — I'll be in touch soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-[12px] font-bold text-text-main/50 underline underline-offset-2 hover:text-text-main transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-text-main font-medium text-[13px]">First Name</Label>
                      <Input {...register("firstName")} placeholder="Jane" className="bg-[#fde768]/40 border-none placeholder:text-text-main/50 h-10 rounded-xl text-[13px]" />
                      {errors.firstName && <p className="text-[11px] font-semibold text-red-700">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-text-main font-medium text-[13px]">Last Name</Label>
                      <Input {...register("lastName")} placeholder="Doe" className="bg-[#fde768]/40 border-none placeholder:text-text-main/50 h-10 rounded-xl text-[13px]" />
                      {errors.lastName && <p className="text-[11px] font-semibold text-red-700">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-text-main font-medium text-[13px]">Email</Label>
                    <Input {...register("email")} placeholder="jane@example.com" className="bg-[#fde768]/40 border-none placeholder:text-text-main/50 h-10 rounded-xl text-[13px]" />
                    {errors.email && <p className="text-[11px] font-semibold text-red-700">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-text-main font-medium text-[13px]">Subject</Label>
                    <Input {...register("subject")} placeholder="Let's work together" className="bg-[#fde768]/40 border-none placeholder:text-text-main/50 h-10 rounded-xl text-[13px]" />
                    {errors.subject && <p className="text-[11px] font-semibold text-red-700">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-text-main font-medium text-[13px]">Message</Label>
                    <Textarea {...register("message")} placeholder="Tell me about your project..." className="bg-[#fde768]/40 border-none placeholder:text-text-main/50 min-h-[90px] rounded-xl text-[13px]" />
                    {errors.message && <p className="text-[11px] font-semibold text-red-700">{errors.message.message}</p>}
                  </div>

                  {submitError && (
                    <p className="text-[12px] font-semibold text-red-700 text-center">
                      Something went wrong — try emailing me directly at aasahi@uwaterloo.ca
                    </p>
                  )}

                  <div className="pt-1 flex justify-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#fde768] text-text-main hover:bg-[#fde768]/90 h-10 px-10 font-bold rounded-full shadow-md text-[13px] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-full bg-brand-yellow/30 flex items-center justify-center text-text-main group-hover:bg-brand-yellow transition-colors shadow-sm shrink-0">
        {icon}
      </div>
      <span className="text-base font-bold text-text-main/85">{text}</span>
    </div>
  )
}
