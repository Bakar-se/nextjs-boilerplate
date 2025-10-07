import { verifyPassword } from '@/lib/authHelper';
import prisma from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { atob } from 'buffer';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return NextAuth(req, res, options);
};
export default authHandler;
export const options: NextAuthOptions = {
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth/sign-in',
    error: '/auth/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        try {
          let { email, password } = req.body as {
            email: string;
            password: string;
          };

          const dbUser: any = await prisma.user.findFirst({
            where: {
              email,
              is_deleted: false,
              is_active: true
            }
          });
          if (!dbUser) {
            throw new Error('no_user_found');
          }
          if (!dbUser.password) {
            throw new Error('incorrect_password');
          }
          const passwordMatch = await verifyPassword(password, dbUser.password);
          if (!passwordMatch) {
            throw new Error('incorrect_password');
          }
          const user = {
            ...dbUser,
            name: dbUser.first_name + ' ' + dbUser.last_name,
            id: dbUser.id,
            role: dbUser.role,
            first_name: dbUser.first_name,
            last_name: dbUser.last_name
          };
          return user;
        } catch (error) {
          throw error;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
    updateAge: 30 * 60 // 30 minutes (you can keep or adjust this)
  },
  debug: process.env.ENV !== 'PROD',
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
      }
  
      if (trigger === "update" && session) {
        token.role = session.user.role;
        token.first_name = session.user.first_name;
        token.last_name = session.user.last_name;
      }
  
      return token;
    },
  
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.first_name = token.first_name;
      session.user.last_name = token.last_name;
      return session;
    },
  }
  
};
