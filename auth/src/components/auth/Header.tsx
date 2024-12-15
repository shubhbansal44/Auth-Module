import { cn } from "@/lib/utils";

interface headerProps {
  label: string;
}

export const Header = ({ label }: headerProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl montserrat-bold")}>🔐 Authentication</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
