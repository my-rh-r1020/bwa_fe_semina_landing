// Import Libraries
import Head from "next/head";
import { getData } from "../../utils/fetchData";

// Import Components
import CheckoutSection from "../../components/CheckoutPage";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function CheckoutEvent({ data }) {
  return (
    <>
      <Head>
        <title>Semina || Checkout Event</title>
        <meta name="description" content="Generated by create Next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <section className="bg-navy">
        <Navbar />
      </section>

      {/* Checkout */}
      <CheckoutSection data={data} />

      {/* Footer */}
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  // Check Token User
  const { token } = context.req.cookies;

  if (!token) {
    return { redirect: { destination: "/signin", permanent: false } };
  }

  // Fetch API
  const reqChechout = await getData(`api/v1/participants/detail-page/${context.params.id}`),
    resCheckout = reqChechout.data;

  return { props: { data: resCheckout } };
}
