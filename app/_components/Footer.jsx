'use client'

import React from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
function Footer() {
    const { isLoaded, isSignedIn, user } = useUser();

  return user && (
    <div>Footer</div>
  )
}

export default Footer