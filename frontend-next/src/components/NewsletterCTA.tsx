export default function NewsletterCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="bg-brand-dark text-brand-yellow border-2 border-brand-dark rounded-[3rem] p-16 text-center shadow-[12px_12px_0px_0px_rgba(201,207,254,1)] relative overflow-hidden">
        <h2 className="text-5xl font-display font-extrabold mb-6">Stay in the loop.</h2>
        <p className="text-xl font-medium opacity-80 mb-10 text-white max-w-lg mx-auto">Get facilitation tips and new templates sent straight to your inbox every week.</p>
        <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-4">
          <input type="email" placeholder="Email address" className="px-6 py-4 rounded-xl border-2 border-brand-dark font-medium text-brand-dark focus:outline-none focus:ring-4 focus:ring-brand-pink/50 flex-1" />
          <button className="px-8 py-4 bg-brand-pink text-brand-dark font-bold rounded-xl border-2 border-brand-dark hover:bg-white transition-colors">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
