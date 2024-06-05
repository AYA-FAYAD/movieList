import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";

const clerkMiddleware = ClerkExpressWithAuth();

export { clerkMiddleware };
