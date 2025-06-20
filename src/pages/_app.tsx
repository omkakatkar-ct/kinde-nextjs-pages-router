import { AppProps } from "next/app";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { user, isAuthenticated } = pageProps.kindeAuth || {};

  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div>
            {!isAuthenticated ? (
              <>
                <LoginLink className="btn btn-ghost sign-in-btn">
                  Sign in
                </LoginLink>
                <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
              </>
            ) : (
              <div className="profile-blob">
                {user?.picture ? (
                  <img
                    className="avatar"
                    src={user?.picture}
                    alt="user profile avatar"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="avatar">
                    {user?.given_name?.[0]}
                    {user?.family_name?.[0]}
                  </div>
                )}
                <div>
                  <p className="text-heading-2">
                    {user?.given_name} {user?.family_name}
                  </p>

                  <LogoutLink className="text-subtle">Log out</LogoutLink>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer className="footer">
        <div className="container">
          <strong className="text-heading-2">KindeAuth</strong>
          <p className="footer-tagline text-body-3">
            Visit our{" "}
            <Link className="link" href="https://kinde.com/docs">
              help center
            </Link>
          </p>

          <small className="text-subtle">
            © 2023 KindeAuth, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </>
  );
}

export default MyApp;

export async function getServerSideProps(context: any) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return {
    props: {
      kindeAuth: {
        isAuthenticated: await isAuthenticated(),
        user,
      },
    },
  };
}
