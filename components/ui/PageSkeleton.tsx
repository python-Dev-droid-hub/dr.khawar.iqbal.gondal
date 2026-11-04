import Container from "@/components/ui/Container";

export default function PageSkeleton() {
  return (
    <div className="min-h-screen bg-cream pb-20 pt-28" aria-busy="true" aria-live="polite">
      <div className="bg-teal-hero pb-16 pt-10">
        <Container>
          <div className="skeleton mb-4 h-3 w-40 bg-white/10" />
          <div className="skeleton mb-3 h-10 w-[66%] max-w-xl bg-white/10" />
          <div className="skeleton h-4 w-full max-w-lg bg-white/10" />
        </Container>
      </div>

      <Container className="mt-10 space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="skeleton aspect-[4/5] rounded-card" />
          <div className="space-y-4 py-4">
            <div className="skeleton h-4 w-28" />
            <div className="skeleton h-8 w-[75%]" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-[92%]" />
            <div className="skeleton h-4 w-[80%]" />
            <div className="skeleton mt-6 h-11 w-40 rounded-pill" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="skeleton h-36 rounded-card" />
          ))}
        </div>
      </Container>
      <span className="sr-only">Loading page content</span>
    </div>
  );
}
