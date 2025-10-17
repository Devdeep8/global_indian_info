"use client"
import { SignInForm } from '@/app/(auth-group)/sign-in/_components/sign-in.form'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'

export default function Page() {
  return (
    <Dialog defaultOpen={true} modal>
      <DialogContent 
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
        </DialogHeader>
        <SignInForm />
      </DialogContent>
    </Dialog>
  )
}