import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contents } from "@/utilities/constants/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-teal-100 py-8 text-gray-700">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex flex-col justify-between md:flex-row">
          {/* Logo */}
          <Image
            src={contents.footer.logo}
            alt="UVAH Health"
            className="mb-4 h-14"
            width={180}
            height={80}
          />
          {/* Email Subscription */}
          <div className="flex flex-col justify-between sm:flex-row md:items-center">
            <div className="mb-4 flex max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-br-none rounded-tr-none bg-white"
              />
              <Button className="rounded-bl-none rounded-tl-none bg-teal-600 text-white hover:bg-teal-700">
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Description */}
          <div className="col-span-1 md:col-span-1">
            <p className="text-text-body mb-4 text-base">
              {contents.footer.description}
            </p>
            <div className="flex space-x-4">
              {contents.footer.socialLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="hover:text-primary-hover text-primary"
                >
                  <item.logo />
                </Link>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold underline decoration-green-400">
              Pages
            </h3>
            <ul className="space-y-4">
              {contents.footer.pages.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="hover:text-primary-hover">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold underline decoration-green-400">
              Company
            </h3>
            <ul className="space-y-4">
              {contents.footer.company.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="hover:text-primary-hover">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold underline decoration-green-400">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>{contents.footer.contact.phoneNo}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>{contents.footer.contact.mail}</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>{contents.footer.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{contents.footer.contact.openingHours}</span>
                <span className="ml-2 text-green-600">Open today</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-text">
          <p>Copyright © 2024 UVAH Health - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
