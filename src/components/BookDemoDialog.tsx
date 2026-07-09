import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookDemoDialog = ({ open, onOpenChange }: BookDemoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden bg-background p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Book a Demo</DialogTitle>
        </DialogHeader>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSdjoXXqg7lPDfgdJe85x5qtGEdcfOYienu_g_mQu2O4UFZx1g/viewform?embedded=true" 
          frameBorder="0" 
          width="100%" 
          height="600px"
          style={{ border: 'none', minHeight: '600px' }}
          title="Book a Demo Form"
        />
      </DialogContent>
    </Dialog>
  );
};
