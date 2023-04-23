import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Data = {
  email: string;
};

type Props = Data & {
  updateFields: (fields: Partial<Data>) => void;
};

export function Question8(props: Props) {
  return (
    <>
      <div>
        <div className="pb-1 text-sm font-medium text-zinc-400 underline">
          08.
        </div>
        <Label htmlFor="question-7" className="text-4xl font-semibold">
          Pour finir, ton adresse e-mail ?<span className="text-gold">*</span>
        </Label>
      </div>
      <Input
        placeholder="Entrez votre réponse..."
        autoFocus
        required
        type="email"
        value={props.email}
        onChange={(e) => props.updateFields({ email: e.target.value })}
      />
    </>
  );
}
