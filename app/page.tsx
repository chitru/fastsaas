"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Home() {
  return (
    <main className="p-24 flex justify-center max-w-5xl m-auto">
      <div>
        <h1 className="text-center mb-20 text-3xl font-bold tracking-tighter">
          FastSaaS Dev kit
        </h1>
        <div className="pb-10">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> */}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <h1 className="text-7xl font-bold tracking-tighter pb-5">
          This is heading
        </h1>
        <h2 className="text-6xl font-bold tracking-tighter pb-5">
          This is heading
        </h2>
        <h3 className="text-5xl font-bold tracking-tighter pb-5">
          This is heading
        </h3>
        <h4 className="text-4xl font-bold tracking-tighter pb-5">
          This is heading
        </h4>
        <h5 className="text-3xl font-bold tracking-tighter pb-5">
          This is heading
        </h5>
        <h6 className="text-2xl font-bold tracking-tighter pb-5">
          This is heading
        </h6>
        <div>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <Link href="/reset">Reset</Link>
        </div>
        <p className="text-xl pb-5">
          This is text-xl. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nesciunt inventore ratione delectus eveniet, voluptates harum.
          Assumenda sit quam quasi, eveniet blanditiis hic, odit ipsam
          voluptatem, error possimus ea consequatur asperiores.
        </p>
        <p className="text-lg pb-5">
          This is text-lg. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nesciunt inventore ratione delectus eveniet, voluptates harum.
          Assumenda sit quam quasi, eveniet blanditiis hic, odit ipsam
          voluptatem, error possimus ea consequatur asperiores.
        </p>
        <p className="text-md pb-5">
          This is text-md. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nesciunt inventore ratione delectus eveniet, voluptates harum.
          Assumenda sit quam quasi, eveniet blanditiis hic, odit ipsam
          voluptatem, error possimus ea consequatur asperiores.
        </p>
        <p className="text-sm pb-5">
          This is text-sm. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nesciunt inventore ratione delectus eveniet, voluptates harum.
          Assumenda sit quam quasi, eveniet blanditiis hic, odit ipsam
          voluptatem, error possimus ea consequatur asperiores.
        </p>
        <Input type="text" placeholder="This is inputbox" required />
        <div className="m-5 p-5 flex gap-5">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline" size="icon">
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button>
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </div>
      </div>
    </main>
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
