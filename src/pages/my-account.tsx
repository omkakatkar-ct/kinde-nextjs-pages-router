import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function Dashboard() {
  const { isAuthenticated } = useKindeAuth();

  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Woohoo!</p>
        <p className="text-display-2">
          {isAuthenticated
            ? "Authenticating..."
            : "Your authentication is all sorted."}
          <br />
          Build the important stuff.
        </p>
      </div>
      <section className="next-steps-section">
        <h2 className="text-heading-1">Next steps for you</h2>
        <Link href="/">Go to Home</Link>
      </section>
    </div>
  );
}
