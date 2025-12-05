// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Navbar05 } from "@/components/ui/shadcn-io/navbar-05";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AppSidebar } from "./_components/app-sidebar";

export default async function WriterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch session
  const session = await auth()
    
  if (!session ) {
    redirect("/sign-in");
  }

  // Prepare user data with proper null checks
  const userData = {
    username : session.user.username || "", // Ensure username is a string
    name: session.user.name || "", // Ensure name is a string
    email: session.user.email || "", // Ensure email is a string
    role: session.user.role,
  };


  // Otherwise, show onboarding form
  return (
    <div className="min-h-screen ">
      <SidebarProvider>
        <AppSidebar  user={userData}/>
        <SidebarInset>
          <header className="flex flex-col h-16 shrink-0  gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <Navbar05 />
            <div className="flex gap-2 items-center px-4">
              <SidebarTrigger className="" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
             
            </div>
          </header>

          <div className="my-10">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
