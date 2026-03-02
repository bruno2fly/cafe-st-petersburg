import Image from "next/image";

const CHEF_IMAGE = "/images/catering2.jpeg";
const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMRITH/2gAMAwEAAhEDEEA/ALPZ+5NQ0m2eC0u5I4ncuUByMkAE4P4KUpVW6Y//2Q==";

export function EventUnforgettable() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-2 mt-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:order-1 lg:mt-0">
          <Image
            src={CHEF_IMAGE}
            alt="Cafe St. Petersburg catering and event setup"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA}
          />
        </div>
        <div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-8">
          <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            Make Your Newton Centre Event Unforgettable
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/85">
            Cafe St. Petersburg brings authentic Eastern European flavors to your
            gathering. Our professional catering team is available Friday 5
            PM–1 AM, Saturday 12 PM–1 AM, and Sunday 12 PM–10 PM. We serve
            events throughout Newton, Newton Centre, and Brookline. From an
            office lunch for 20 to a wedding for 200, we handle everything.
          </p>
        </div>
      </div>
    </section>
  );
}
