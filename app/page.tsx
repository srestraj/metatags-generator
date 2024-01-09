import AppScreenshot from "./components/AppScreenshot";
import Snapshots from "./components/Snapshots";
import Hero from "./components/Hero";
import OgHero from "./components/OgImageHero";

export default function Home() {
  return (
    <>
      <Hero />
      <AppScreenshot imageUrl="/img/app-screenshot.png" />
      <Snapshots />
      <OgHero />
    </>
  );
}
