import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";

interface Props extends React.TimeHTMLAttributes<HTMLTimeElement> {
  dateString?: string;
}

export default function Date({ dateString, className, ...props }: Props) {
  if (!dateString) return null;

  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className={cn(className)} {...props}>
      {format(date, "dd/LL/yyyy")}
    </time>
  );
}
