"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { contents } from "@/utilities/constants/constants";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              <Image
                width={150}
                height={60}
                alt="UVAH Health"
                src={contents.navbar.logo}
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden sm:flex sm:items-center sm:justify-center flex-1">
            <NavigationMenuList key={1} className="flex space-x-4">
              {contents.navbar.links.map((component) => {
                if (!component?.elements) {
                  return (
                    <NavigationMenuItem
                      key={component.id}
                      className="text-exsmall text-text"
                    >
                      <Link href={component.link} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {component.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem
                    key={component.id}
                    className="text-exsmall text-text"
                  >
                    <NavigationMenuTrigger>
                      {component.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                shadcn/ui
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautifully designed components that you can
                                copy and paste into your apps. Accessible.
                                Customizable. Open Source.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem key={4} href="/docs" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        {/* <ListItem
                            href="/docs/installation"
                            title="Installation"
                          >
                            How to install dependencies and structure your app.
                          </ListItem>
                          <ListItem
                            href="/docs/primitives/typography"
                            title="Typography"
                          >
                            Styles for headings, paragraphs, lists...etc
                          </ListItem> */}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Sign In / Sign Up Buttons */}
          <div className="hidden sm:flex sm:items-center">
            <Button variant="outline" className="mr-2">
              Sign In
            </Button>
            <Button>Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <Button variant="outline" className="mr-2 w-full">
              Sign In
            </Button>
            <Button className="w-full">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
