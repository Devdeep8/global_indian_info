// app/page.tsx

import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import HomeContent from "@/components/home/home-client-componenet";

export default function Home() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12"><div className="space-y-4"><Skeleton className="h-12 w-64" /><div className="grid grid-cols-1 lg:grid-cols-3 gap-8"><div className="lg:col-span-2 space-y-8">{[1, 2, 3].map((i) => (<div key={i} className="space-y-4"><Skeleton className="h-6 w-32" /><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-3/4" /></div>))}</div><div><Skeleton className="h-6 w-32 mb-4" /><div className="flex flex-wrap gap-2">{[1, 2, 3, 4].map((i) => (<Skeleton key={i} className="h-8 w-20" />))}</div></div></div></div></div>}>
      <div className="space-y-12">
        {/* <MagazineSection /> */}
        <HomeContent />
      </div>
    </Suspense>
  );
}