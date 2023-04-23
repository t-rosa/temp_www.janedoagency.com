import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Data = {
  question7: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function Question7(props: Props) {
  return (
    <>
      <div>
        <div className="pb-1 text-sm font-medium text-zinc-400 underline">
          07.
        </div>
        <Label htmlFor="question-7" className="text-4xl font-semibold">
          T&apos;es-tu inscrit à la SACEM ?
          <span className="text-accent">*</span>
        </Label>
      </div>
      <Input
        placeholder="Entrez votre réponse..."
        autoFocus
        required
        type="text"
        value={props.question7}
        onChange={(e) => props.updateFields({ question7: e.target.value })}
      />
    </>
  );
}
