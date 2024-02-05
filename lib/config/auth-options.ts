import { Account, AuthOptions, CallbacksOptions, Profile } from "next-auth";
import { publicApi } from "./axiosInstance";
import { LoginResponse } from "../types/auth.types";
import Credentials from "next-auth/providers/credentials";


export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", placeholder: "email" },
        password: { label: "password", placeholder: "password" },
      },
      async authorize(credentials, _req) {
        const email = credentials?.email;
        const password = credentials?.password;

        try {
          const response = await publicApi.post<LoginResponse>("/auth/login", {
            email,
            password,
          });
          const  {data}  = response.data;
          console.log(data);

          return { user: data, id: data.userId };
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user, session, trigger }) => {
      if (trigger === "update" && session?.user) {
        return { ...token, ...session };
      }
      return { ...token, ...user };
    },
    session: async ({ token, session }) => {
      // session.user = token.user;
      return session;
    },
  }, 
  pages: {
    signOut: "/account/login",
    signIn: "/home",
    error: "/account/login",
    // add onboarding
  },
};
