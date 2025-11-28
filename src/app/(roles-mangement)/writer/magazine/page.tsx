import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getMagazines } from "@/services/magazine";
import { Plus, Edit, Trash } from "lucide-react";

export default async function MagazineListPage() {
  const magazines = await getMagazines();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Magazines</h1>
        <Link href="/writer/magazine/create">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Magazine
          </Button>
        </Link>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Published At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {magazines.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No magazines found. Create one to get started.
                </TableCell>
              </TableRow>
            ) : (
              magazines.map((magazine) => (
                <TableRow key={magazine.id}>
                  <TableCell className="font-medium">{magazine.title}</TableCell>
                  <TableCell>#{magazine.issueNumber}</TableCell>
                  <TableCell>{magazine.status}</TableCell>
                  <TableCell>
                    {magazine.publishedAt ? new Date(magazine.publishedAt).toLocaleDateString() : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/writer/magazine/${magazine.id}/edit`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      {/* Delete button would go here, likely a client component or form action */}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
