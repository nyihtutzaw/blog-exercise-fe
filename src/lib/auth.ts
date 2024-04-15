/* eslint-disable @typescript-eslint/ban-ts-comment */


import { login } from "@/actions";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: { label: "Password", type: "password" },
            },
            // @ts-expect-error
            async authorize(credentials) {
                try {
                    const { email = '', password = '' } = credentials ?? {};

                    const response = await login(email, password)

                    if (response.status === 200) {
                        const data = await response.json();

                        const { user, token } = data.data;

                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            token: token
                        };
                    }

                    return false;
                }
                catch (err) {

                    return false;
                }

            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {

            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.token = user.token;
            }

            return token;
        },
        async session({ session, token }) {
            if (!session.user) {
                return session;
            }
            session.user.id = token.id;
            session.user.email = token.email || '';
            session.user.name = token.name || '';
            session.user.token = token.token;
            return session;
        },
    }
};