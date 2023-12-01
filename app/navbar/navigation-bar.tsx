
'use client'
import * as react from 'react'
import Link from "next/link"
import { cn } from '@/lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
const NavigationBar = () => {
    return ( 
    <div>
    <NavigationMenu className="hidden md:flex md:space-x-4">
  <NavigationMenuList>
  <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
  <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
  <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
  <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    </div> );
}
 
export default NavigationBar;