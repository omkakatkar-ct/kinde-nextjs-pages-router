import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
export default withAuth(
  async function middleware(req) {
    console.log("look at me", req.kindeAuth);
  },
  {
    publicPaths: [new RegExp("^(?!/my-account(/(?!favourites)([^/]*))*$).*")],
    isReturnToCurrentPage: true,
  }
);

export const config = {
  matcher: [
    // Run on everything but Next internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
