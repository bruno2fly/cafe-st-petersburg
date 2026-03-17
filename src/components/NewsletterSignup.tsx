"use client";

export function NewsletterSignup() {
  return (
    <section className="bg-[#3B5323] py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-[#F5F0E8] sm:text-4xl">
          Newsletter
        </h2>
        <p className="mt-4 text-lg text-[#F5F0E8]/90">
          Get news, event updates, and special offers from Cafe St. Petersburg.
          Subscribe below.
        </p>
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Your email"
            className="min-w-0 flex-1 rounded-md border border-[#2C1810]/20 bg-white px-4 py-3 text-[#2C1810] placeholder:text-[#2C1810]/50 focus:border-[#C4A35A] focus:outline-none focus:ring-2 focus:ring-[#C4A35A]/40 sm:max-w-[280px]"
            required
          />
          <button
            type="submit"
            className="shrink-0 rounded-md bg-[#C4A35A] px-6 py-3 font-semibold text-[#2C1810] transition hover:bg-[#d4b86a]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
