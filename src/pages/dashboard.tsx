import { GetServerSideProps } from "next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Woohoo!</p>
        <p className="text-display-2">
          Your authentication is all sorted.
          <br />
          Build the important stuff.
        </p>
      </div>
      <section className="next-steps-section">
        <h2 className="text-heading-1">Next steps for you</h2>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return {
      redirect: {
        destination: "/api/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
