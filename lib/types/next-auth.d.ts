import NextAuth from "next-auth";
import { Role } from "./user.types";
declare module "next-auth" {
  interface Session {
    user: {
        id: number,
        name: string,
        bio: string,
        email: string,
        enabled: boolean,
        isEmailVerified: boolean,
        createdAt: string,
        updatedAt: string,
        token: string,  
        refreshToken: string,  
    };
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
        id: number,
        name: string,
        bio: string,
        email: string,
        enabled: boolean,
        isEmailVerified: boolean,
        createdAt: string,
        updatedAt: string,
        token: string,  
        refreshToken: string,  
    };
  }
}