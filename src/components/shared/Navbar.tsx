"use client";

import { titleFont } from "@/config/fonts";
import {
  Navbar as Appbar,
  Avatar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Appbar className="object-cover" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link as={NextLink} href="/" color="foreground">
            <p className={`${titleFont.className} text-xl`}>DAVIDH</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem className="hidden md:block">
          <Link href="/skills/hard" as={NextLink} color="foreground">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link href="/experience" as={NextLink} color="foreground">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link href="/projects" as={NextLink} color="foreground">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Avatar />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/skills/hard" as={NextLink} color="foreground">
            Skills
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/experience" as={NextLink} color="foreground">
            Experience
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/projects" as={NextLink} color="foreground">
            Projects
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Appbar>
  );
}
