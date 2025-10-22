"use client"
import { SignInForm } from '@/app/(auth-group)/sign-in/_components/sign-in.form'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Page() {
  const router = useRouter()
  const [open, setOpen] = useState(true)

  // Reset dialog to open whenever the page mounts
  useEffect(() => {
    setOpen(true)
  }, [])

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen) {
      // Navigate back when dialog closes
      router.back()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange} modal>
      <DialogContent 
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogTitle>
          Sign
        </DialogTitle>
        <DialogHeader>
        </DialogHeader>
        <SignInForm />
      </DialogContent>
    </Dialog>
  )
}