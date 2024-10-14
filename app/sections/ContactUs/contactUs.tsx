import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import H1 from "@/app/components/Headings/H1/h1";

export default function ContactForm() {
  return (
    <div className="mx-auto w-full px-4 py-8">
      <H1 className="mb-12">We'd Love to Hear from You</H1>
      <Card className="flex w-full justify-center border-none bg-white shadow-none">
        <CardContent className="w-full max-w-3xl px-12 py-6 shadow-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="David Wonder"
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example123@gmail.com"
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 0123456789"
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Type your Subject"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-[120px] w-full"
              />
            </div>
            <div className="">
              <Button
                type="submit"
                className="bg-teal-600 text-white hover:bg-teal-700"
              >
                Send Message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
