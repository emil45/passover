import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">צור קשר</DialogTitle>
          <DialogDescription className="text-center">
            אנחנו פתוחים לשמוע הצעות, לתקן טעויות או לכל דבר אחר
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-4">
          <div className="flex items-center gap-2 text-lg">
            <span className="font-bold">עמנואל</span>
          </div>

          <div className="flex items-center gap-2 text-primary">
            <Mail className="h-5 w-5" />
            <a
              href="mailto:emil45@gmail.com"
              className="text-lg font-medium hover:underline"
              dir="ltr"
            >
              emil45@gmail.com
            </a>
          </div>

          <p className="text-center text-muted-foreground mt-2">
            אשמח לשמוע מכם על כל הצעה לשיפור, דיווח על טעויות, או שאלות לגבי
            הכשרת כלים לפסח.
          </p>
        </div>

        <DialogFooter className="sm:justify-center">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            סגור
          </Button>
          <Button
            onClick={() => {
              window.location.href = "mailto:emil45@gmail.com";
              onOpenChange(false);
            }}
          >
            שלח אימייל
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
