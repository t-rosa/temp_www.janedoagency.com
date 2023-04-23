import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Jane Do - Contact",
};

export default function ContactPage() {
  return (
    <div className="grid min-h-[calc(100vh-5rem)] place-items-center px-3">
      <ContactForm />
    </div>
  );
}
