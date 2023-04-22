import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  direction: string;
  inView: boolean;
}
export function Highlighter(props: Props) {
  if (props.direction === "left") {
    return (
      <span
        data-in-view={props.inView}
        className="
          relative 
          before:absolute
          before:-z-10 
          before:inline
          before:-skew-x-12 
          before:bg-gradient-to-l 
          before:from-violet/0
          before:to-rose/80
          data-in-view:before:animate-highlight-left
        "
      >
        &nbsp;{props.children}&nbsp;
      </span>
    );
  }

  return (
    <span
      data-in-view={props.inView}
      className="
          relative 
          before:absolute
          before:-z-10 
          before:inline
          before:-skew-x-12 
          before:bg-gradient-to-r 
          before:from-violet/0
          before:to-rose/80
          data-in-view:before:animate-highlight-right
        "
    >
      {props.children}&nbsp;
    </span>
  );
}
