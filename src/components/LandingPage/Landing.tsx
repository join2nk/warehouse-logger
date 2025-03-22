import React from "react";
import { Contact1 } from "./twblocks/contact";
import { CTA1 } from "./twblocks/cta";
import { Feature6 } from "./twblocks/features";
import { Footer1 } from "./twblocks/footer";
import { Hero4 } from "./twblocks/hero";
import { Header1 } from "./twblocks/navbar";
import { Pricing1 } from "./twblocks/pricing";

const Navbar = () => <Header1 />;
const Hero = () => <Hero4 />;
// its similar to a pos but for warehouse
// a video of how it works ..
const HowItWorks = () => <CTA1 />;
const Features = () => <Feature6 />;
const GetPremiumSupport = () => <Pricing1 />;
const Contact = () => <Contact1 />;
const Footer = () => <Footer1 />;

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="p-4 md:hidden"></div>
      <Hero />
      <HowItWorks />
      <Features />
      <GetPremiumSupport />
      <Contact />
      <Footer />
    </>
  );
}
