import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Data = {
  question5: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function Question5(props: Props) {
  return (
    <>
      <div>
        <div className="pb-1 text-sm font-medium text-zinc-400 underline">
          05.
        </div>
        <Label htmlFor="question-5" className="text-4xl font-semibold">
          Quels sont les artistes avec un univers similaire au tien ?
          <span className="text-accent">*</span>
        </Label>
      </div>
      <Input
        placeholder="Entrez votre réponse..."
        autoFocus
        required
        type="text"
        value={props.question5}
        onChange={(e) => props.updateFields({ question5: e.target.value })}
      />
    </>
  );
}
