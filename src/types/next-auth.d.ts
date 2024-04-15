
import type { DefaultSession } from 'next-auth';


declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      email: string;
      id: string;
      name?: string;
      token?: string;
    };
  }

  interface User extends DefaultUser {
    email: string;
    id: string;
    token: string;
    name: string;
  }

}


declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    token?: string;
    id: string;
  }
}

