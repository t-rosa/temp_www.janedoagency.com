import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Data = {
  question2: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function Question2(props: Props) {
  return (
    <>
      <div>
        <div className="pb-1 text-sm font-medium text-zinc-400 underline">
          02.
        </div>
        <Label htmlFor="question-2" className="text-4xl font-semibold">
          Depuis quand fais-tu de la musique ?
          <span className="text-accent">*</span>
        </Label>
      </div>
      <Input
        placeholder="Entrez votre réponse..."
        autoFocus
        required
        type="text"
        value={props.question2}
        onChange={(e) => props.updateFields({ question2: e.target.value })}
      />
    </>
  );
}
