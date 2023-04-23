import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid h-[calc(100vh-5rem)] place-items-center">
      <div className="flex gap-3">
        <Loader2 className="animate-spin" />
        <h1>Chargement...</h1>
      </div>
    </div>
  );
}
