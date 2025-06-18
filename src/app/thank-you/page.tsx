import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F3EE] px-4">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl px-8 py-16 flex flex-col items-center animate-fade-in">
        <h1 className="heading-display text-4xl sm:text-5xl font-extrabold text-[#15304B] mb-4 text-center">Thank You!</h1>
        <p className="body-sans text-lg sm:text-xl text-[#15304B] mb-8 text-center max-w-xl">
          Your information has been received. A qualified California disability attorney will reach out to you soon for your free consultation.
        </p>
        <Link href="/" className="button bg-[#F7B32B] text-[#15304B] font-bold rounded-full px-8 py-4 text-lg shadow-xl border-none outline-none focus:ring-2 focus:ring-[#F7B32B] focus:ring-offset-2 hover:bg-[#FFD369] transition-all duration-200">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 