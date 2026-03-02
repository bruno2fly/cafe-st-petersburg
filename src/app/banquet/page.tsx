import { siteData } from "@/lib/site-data";
import { FoodImage } from "@/components/FoodImage";
import { BanquetHero } from "@/components/banquet/BanquetHero";
import { FeatureGrid } from "@/components/banquet/FeatureGrid";
import { ImageGallery } from "@/components/banquet/ImageGallery";
import { PricingTiers } from "@/components/banquet/PricingTiers";
import { InquiryForm } from "@/components/banquet/InquiryForm";
import { DownloadGrid } from "@/components/banquet/DownloadGrid";
import { StickyCTA } from "@/components/banquet/StickyCTA";
import { ScrollSection } from "@/components/banquet/ScrollSection";
import "./banquet.css";

export const metadata = {
  title: "Banquet & Private Events",
  description:
    "Celebrate with flavor. Private dining and banquet packages from $115 per person. Customized menus, full-service experience, up to 200 guests.",
};

export default function BanquetPage() {
  return (
    <div className="banquet-page bg-[#f5f0e8]">
      <BanquetHero />
      <StickyCTA />

      <ScrollSection>
        <FeatureGrid />
      </ScrollSection>

      <ScrollSection>
        <ImageGallery />
      </ScrollSection>

      <ScrollSection>
        <PricingTiers />
      </ScrollSection>

      <section
        id="banquet-inquiry"
        className="scroll-mt-24 bg-white py-20 sm:py-28"
      >
        <ScrollSection>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8">
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:order-1 lg:aspect-auto lg:min-h-[500px]">
              <FoodImage
                src="/images/catering2.jpeg"
                alt="Private dining and bar at Cafe St. Petersburg"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl font-bold text-[#3B5323] sm:text-4xl">
                Plan Your Private Event
              </h2>
              <p className="mt-4 text-[#2C1810]/85">
                Fill out the form below and our team will get back to you shortly. Or
                call us directly at{" "}
                <a
                  href={`tel:${siteData.phone.replace(/\D/g, "")}`}
                  className="font-medium text-[#C4A35A] hover:text-[#d4b86a] hover:underline"
                >
                  {siteData.phone}
                </a>
              </p>
              <div className="mt-8">
                <InquiryForm />
              </div>
            </div>
          </div>
        </ScrollSection>
      </section>

      <ScrollSection>
        <DownloadGrid />
      </ScrollSection>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-24 lg:hidden" aria-hidden />
    </div>
  );
}
