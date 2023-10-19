// Resource: https://clerk.com/docs/nextjs/middleware#auth-middleware
// Copy the middleware code as it is from the above resource

import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextRequest } from 'next/server';

export default authMiddleware({
  // An array of public routes that don't require authentication.
  publicRoutes: (req: NextRequest) =>
      !req.nextUrl.pathname.startsWith('/dashboard'),

  // eslint-disable-next-line consistent-return
  afterAuth(auth, req) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },

  // An array of routes to be ignored by the authentication middleware.
  ignoredRoutes: ['/api/webhook/clerk'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)'],
};
