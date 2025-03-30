import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Check } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("emil45@gmail.com");
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogDescription className="text-center">
            שְׁגִיאוֹת מִי־יָבִין מִנִּסְתָּרוֹת נַקֵּנִי
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-4">
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 text-primary hover:underline transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="text-base font-medium" dir="ltr">
              emil45@gmail.com
            </span>
            {copied && (
              <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                <Check className="h-4 w-4" />
                הועתק
              </span>
            )}
          </button>

          <p className="text-center text-muted-foreground mt-2">
            אשמח לשמוע מכם על כל הצעה לשיפור, דיווח על טעויות, וכו', עמנואל.
          </p>
        </div>

        <DialogFooter className="sm:justify-center">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            סגור
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
