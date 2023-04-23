import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Data = {
  question3: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function Question3(props: Props) {
  return (
    <>
      <div>
        <div className="pb-1 text-sm font-medium text-zinc-400 underline">
          03.
        </div>
        <Label htmlFor="question-3" className="text-4xl font-semibold">
          Quel est ton budget ?<span className="text-gold">*</span>
        </Label>
      </div>
      <Input
        placeholder="Entrez votre réponse..."
        autoFocus
        required
        type="text"
        value={props.question3}
        onChange={(e) => props.updateFields({ question3: e.target.value })}
      />
    </>
  );
}
