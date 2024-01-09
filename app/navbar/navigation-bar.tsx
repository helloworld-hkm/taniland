
'use client'
import * as react from 'react'
import React from 'react';
import { Link, Element } from 'react-scroll'
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
  <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} className={navigationMenuTriggerStyle()}>  
          
              About
           
          </Link>
        </NavigationMenuItem>
  <NavigationMenuItem>
  <Link activeClass="active" to="iot" spy={true} smooth={true} offset={-100} duration={500} className={navigationMenuTriggerStyle()}>  
           
              Product
          
          </Link>
        </NavigationMenuItem>
  <NavigationMenuItem>
  <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className={navigationMenuTriggerStyle()}>  
           
              Contact us
          
          </Link>
        </NavigationMenuItem>
  
  </NavigationMenuList>
</NavigationMenu>
    </div> );
}
 
export default NavigationBar;