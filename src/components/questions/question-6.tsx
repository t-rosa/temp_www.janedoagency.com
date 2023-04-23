import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Data = {
  question6: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function Question6(props: Props) {
  return (
    <>
      <div>
        <div className="pb-1 text-sm font-medium text-zinc-400 underline">
          06.
        </div>
        <Label htmlFor="question-6" className="text-4xl font-semibold">
          Sur quels réseaux es-tu déjà présent ?
          <span className="text-accent">*</span>
        </Label>
      </div>
      <Input
        placeholder="Entrez votre réponse..."
        autoFocus
        required
        type="text"
        value={props.question6}
        onChange={(e) => props.updateFields({ question6: e.target.value })}
      />
    </>
  );
}
