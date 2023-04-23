"use client";

import { useMultiStepForm } from "@/hooks/use-multi-step-form";
import { useState, FormEvent } from "react";
import { Question1 } from "@/components/questions/question-1";
import { Question2 } from "@/components/questions/question-2";
import { Question3 } from "@/components/questions/question-3";
import { Question4 } from "@/components/questions/question-4";
import { Question5 } from "@/components/questions/question-5";
import { Question6 } from "@/components/questions/question-6";
import { Question7 } from "@/components/questions/question-7";
import { Button } from "@/components/ui/button";
import { ChevronLast, ChevronLeft } from "lucide-react";

type FormData = {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
};

const INITIAL_DATA: FormData = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  question7: "",
};

export function ContactForm() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
    <Question1 key={0} {...data} updateFields={updateFields} />,
    <Question2 key={1} {...data} updateFields={updateFields} />,
    <Question3 key={2} {...data} updateFields={updateFields} />,
    <Question4 key={3} {...data} updateFields={updateFields} />,
    <Question5 key={4} {...data} updateFields={updateFields} />,
    <Question6 key={5} {...data} updateFields={updateFields} />,
    <Question7 key={6} {...data} updateFields={updateFields} />,
  ]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Email envoyé avec succès.");
      } else {
        console.error(
          "Erreur lors de l'envoi de l'email:",
          response.statusText
        );
      }
    } catch (e) {
      console.error("Erreur! lors de l'envoi de l'email:", e);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-7">
      {step}
      <Button
        type="submit"
        className="flex gap-3 self-start rounded-none border border-foreground py-7 text-xl font-medium hover:border-gold hover:bg-zinc-800 hover:text-foreground"
      >
        {isLastStep ? "Terminer" : "Suivant"} <ChevronLast />
      </Button>
      <div>
        {!isFirstStep && (
          <Button
            type="button"
            variant="outline"
            className="flex gap-3 self-start rounded-none border-foreground py-7 text-xl font-medium hover:border-gold hover:bg-transparent hover:text-gold"
            onClick={back}
          >
            <ChevronLeft /> Retour
          </Button>
        )}
        <button type="submit"></button>
      </div>
    </form>
  );
}
