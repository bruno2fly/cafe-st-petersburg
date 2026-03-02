import Link from "next/link";

export const metadata = {
  title: "Sign In",
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center sm:px-6">
      <h1 className="font-serif text-4xl font-bold text-amber-950">Sign In</h1>
      <p className="mt-4 text-amber-900/80">
        Sign in to your Cafe St. Petersburg Rewards account to earn points and redeem
        free items.
      </p>
      <p className="mt-8 text-sm text-amber-800/80">
        Rewards sign-in is coming soon. In the meantime,{" "}
        <Link href="/menu" className="font-medium text-amber-700 hover:underline">
          order online
        </Link>{" "}
        to enjoy our cuisine.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-full bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
      >
        Back to Home
      </Link>
    </div>
  );
}
