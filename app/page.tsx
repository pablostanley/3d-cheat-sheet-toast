"use client"

import { toast, type ToastT } from "sonner"
import { Button } from "@/components/ui/button"
import { Keyboard, X } from "lucide-react"

// The content of the cheat sheet
const CheatSheetContent = () => (
  <div>
    <h3 className="text-base font-semibold text-foreground">3D Cheat Sheet</h3>
    <div className="mt-4 grid grid-cols-[auto_auto] items-center gap-x-4 gap-y-3">
      <p className="text-sm text-muted-foreground">Pan</p>
      <kbd className="justify-self-start pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        Shift + Drag
      </kbd>
      <p className="text-sm text-muted-foreground">Zoom</p>
      <kbd className="justify-self-start pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        Pinch
      </kbd>
      <p className="text-sm text-muted-foreground">Rotate</p>
      <kbd className="justify-self-start pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        Click + Drag
      </kbd>
    </div>
  </div>
)

// A custom toast component that includes our content and a close button
const CheatSheetToast = ({ t }: { t: ToastT }) => (
  <div className="relative w-full bg-background border rounded-lg shadow-lg p-4 pr-10">
    <CheatSheetContent />
    <button
      onClick={() => toast.dismiss(t.id)}
      className="absolute top-2 right-2 rounded-full p-1 text-muted-foreground opacity-50 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="Dismiss"
    >
      <X className="h-4 w-4" />
    </button>
  </div>
)

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button
        variant="outline"
        onClick={() =>
          toast.custom((t) => <CheatSheetToast t={t} />, {
            id: "cheat-sheet", 
          })
        }
      >
        <Keyboard className="mr-2 h-4 w-4" />
        Show Cheat Sheet
      </Button>
    </div>
  )
}
