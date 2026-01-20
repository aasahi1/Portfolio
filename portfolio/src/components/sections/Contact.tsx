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
  const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: any) => console.log(data)

  return (
    <section id="contact" className="relative w-full py-24 bg-[#9fbf7c] overflow-hidden">
      <LadybugBottom className="absolute top-10 right-10 w-[96px] h-[96px] opacity-100" />
      <CloverFooter className="absolute bottom-[-20px] left-[-20px] w-[145px] h-[164px] opacity-40" />

      <div className="container mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12 pt-10">
            <div className="space-y-4">
              <h2 className="text-[48px] font-black text-text-accent leading-[31.5px]">Let's Chat!!</h2>
              <p className="text-text-main/80 text-[15.75px] leading-[25.59px] max-w-[461px]">
                I'm always excited to take on new challenges and collaborate with passionate teams.
                Whether you have a project in mind or just want to chat about design, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <ContactInfo icon={<MailIcon className="w-3.5 h-3.5" />} text="amna.sahi@email.com" />
              <ContactInfo icon={<PhoneIcon className="w-3.5 h-3.5" />} text="+1 (555) 123-4567" />
              <ContactInfo icon={<LocationIcon className="w-3.5 h-3.5" />} text="San Francisco, CA" />
            </div>
          </div>

          <Card className="bg-linear-to-br from-card-gradient-start to-card-gradient-end backdrop-blur-xl border-none shadow-none p-6 md:p-10 rounded-[13px] max-w-[483px]">
            <CardHeader className="p-0 pb-6 space-y-1">
              <h3 className="text-[14px] font-medium text-text-main">Send Me a Message</h3>
              <p className="text-[14px] text-text-main/70">I'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-text-main font-normal text-[14px]">First Name</Label>
                    <Input {...register("firstName")} placeholder="John" className="bg-[#fde768]/40 border-none placeholder:text-text-main/70 h-10 rounded-[13px] text-[12.25px]" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-text-main font-normal text-[14px]">Last Name</Label>
                    <Input {...register("lastName")} placeholder="Doe" className="bg-[#fde768]/40 border-none placeholder:text-text-main/70 h-10 rounded-[13px] text-[12.25px]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-text-main font-normal text-[14px]">Email</Label>
                  <Input {...register("email")} placeholder="john@example.com" className="bg-[#fde768]/40 border-none placeholder:text-text-main/70 h-10 rounded-[13px] text-[12.25px]" />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-text-main font-normal text-[14px]">Subject</Label>
                  <Input {...register("subject")} placeholder="Let's discuss a project" className="bg-[#fde768]/40 border-none placeholder:text-text-main/70 h-10 rounded-[13px] text-[12.25px]" />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-text-main font-normal text-[14px]">Message</Label>
                  <Textarea {...register("message")} placeholder="Tell me about your project..." className="bg-[#fde768]/40 border-none placeholder:text-text-main/70 min-h-[80px] rounded-[13px] text-[12.25px]" />
                </div>

                <div className="pt-2 flex justify-center">
                  <Button type="submit" className="bg-[#fde768] text-text-main hover:bg-[#fde768]/90 h-[38px] px-10 font-medium rounded-full shadow-md text-[12.25px]">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-full bg-brand-yellow/30 flex items-center justify-center text-text-main group-hover:bg-brand-yellow transition-colors shadow-sm">
        {icon}
      </div>
      <span className="text-lg font-bold text-text-main/90">{text}</span>
    </div>
  )
}