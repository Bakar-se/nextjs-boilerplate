import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  // Extend session object
  interface Session {
    user: {
      id: string;
      role: string;
      first_name: string;
      last_name: string;
      email: string;
      username: string;
    } & DefaultSession["user"];
  }

  // Extend user type (returned by authorize or Prisma)
  interface User extends DefaultUser {
    id: string;
    role: string;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
  }
}
