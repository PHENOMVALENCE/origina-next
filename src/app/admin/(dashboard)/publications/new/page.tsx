import Link from "next/link";
import { PublicationForm } from "@/components/admin/PublicationForm";

export default function NewPublicationPage() {
  return (
    <section className="panel">
      <div className="panel-head">
        <h2>Add publication</h2>
        <Link className="btn-admin secondary" href="/admin/publications">
          Back
        </Link>
      </div>
      <PublicationForm />
    </section>
  );
}
