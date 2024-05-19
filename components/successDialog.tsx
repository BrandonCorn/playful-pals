/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Achl1KPTsll
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function successDialog({
  open,
  message,
  onOpenChange
}: {
  open?: boolean;
  message: string;
  onOpenChange?: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]" asChild>
        <DialogHeader>
          <DialogTitle>Success!</DialogTitle>
          <DialogDescription>
            Your form has been submitted successfully. Thank you for your
            submission. {message}
          </DialogDescription>
        </DialogHeader>
        <DialogClose>
          <DialogFooter className="justify-end">
            <Button variant="outline">Close</Button>
          </DialogFooter>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
