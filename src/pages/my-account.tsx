import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function Dashboard() {
  const { isAuthenticated, accessTokenRaw } = useKindeAuth();

  console.log("isAuthenticated", isAuthenticated);
  console.log("accessTokenRaw", accessTokenRaw);

  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Woohoo!</p>
      </div>

      <section className="next-steps-section">
        <h2 className="text-heading-1">Next steps for you</h2>
        <Link href="/">Go to Home</Link>
      </section>
    </div>
  );
}
