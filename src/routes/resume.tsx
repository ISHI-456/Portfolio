import { createFileRoute, Link } from "@tanstack/react-router";

const RESUME_PDF = "/Ishika_Joshi_Resume.pdf";
const RESUME_PAGE = "/resume-page-1.png";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Ishika Joshi — Resume" },
      { name: "description", content: "Resume of Ishika Joshi — Data Science, AI / ML and MERN stack engineer." },
      { property: "og:title", content: "Ishika Joshi — Resume" },
      { property: "og:description", content: "Resume of Ishika Joshi — Data Science, AI / ML and MERN stack engineer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="min-h-screen h-screen bg-background text-foreground flex flex-col">
      <div className="h-16 shrink-0 border-b border-border flex items-center justify-between px-6">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back to portfolio</Link>
        <a
          href={RESUME_PDF}
          download="Ishika_Joshi_Resume.pdf"
          className="text-sm rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-accent transition-colors"
        >
          Download PDF
        </a>
      </div>
      <div className="flex-1 overflow-auto p-6">
        <img
          src={RESUME_PAGE}
          alt="Ishika Joshi — Resume"
          className="mx-auto w-full max-w-3xl rounded-lg shadow-lg bg-white"
        />
      </div>
    </main>
  );
}
