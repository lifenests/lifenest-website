import { SITE } from "@/lib/site";

type LegalPageProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function LegalPage({ title, description, children }: LegalPageProps) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-indigo-600">{SITE.name}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      ) : null}
      <p className="mt-2 text-sm text-slate-500">Last updated: {SITE.lastUpdated}</p>
      <article className="legal-content mt-10 space-y-6 text-slate-700 leading-relaxed [&_a]:font-medium [&_a]:text-indigo-600 [&_a]:underline-offset-2 hover:[&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_li]:ml-5 [&_ol]:list-decimal [&_ul]:list-disc">
        {children}
      </article>
    </main>
  );
}
