import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Data = {
  question4: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function Question4(props: Props) {
  return (
    <>
      <div>
        <div className="pb-1 text-sm font-medium text-zinc-400 underline">
          04.
        </div>
        <Label htmlFor="question-4" className="text-4xl font-semibold">
          Quel est ton univers musical ?<span className="text-gold">*</span>
        </Label>
      </div>
      <Input
        placeholder="Entrez votre réponse..."
        autoFocus
        required
        type="text"
        value={props.question4}
        onChange={(e) => props.updateFields({ question4: e.target.value })}
      />
    </>
  );
}
