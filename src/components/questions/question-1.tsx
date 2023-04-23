import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Data = {
  question1: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function Question1(props: Props) {
  return (
    <>
      <div>
        <div className="pb-1 text-sm font-medium text-zinc-400 underline">
          01.
        </div>
        <Label htmlFor="question-1" className="text-4xl font-semibold">
          Quel est ton nom d&apos;artiste ?<span className="text-gold">*</span>
        </Label>
      </div>
      <Input
        placeholder="Entrez votre réponse..."
        autoFocus
        required
        type="text"
        value={props.question1}
        onChange={(e) => props.updateFields({ question1: e.target.value })}
        className=""
      />
    </>
  );
}
