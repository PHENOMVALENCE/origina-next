import Link from "next/link";
import { notFound } from "next/navigation";
import { PublicationForm } from "@/components/admin/PublicationForm";
import { getPublicationById } from "@/lib/publications/admin";

export default async function EditPublicationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const publicationId = Number(id);

  if (!Number.isFinite(publicationId) || publicationId <= 0) {
    notFound();
  }

  const publication = await getPublicationById(publicationId);
  if (!publication) {
    notFound();
  }

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>Edit publication</h2>
        <Link className="btn-admin secondary" href="/admin/publications">
          Back
        </Link>
      </div>
      <PublicationForm publication={publication} />
    </section>
  );
}
