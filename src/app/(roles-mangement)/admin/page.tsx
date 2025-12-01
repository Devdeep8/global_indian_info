import { checkRole } from "@/lib/rbac";
import { UserRole, PostStatus, MagazineStatus } from "@/generated/client";
import { ArticleService } from "@/services/article.service";
import { MagazineService } from "@/services/magazine.service";
import { UserService } from "@/services/user.service";
import { approveArticleAction, rejectArticleAction, approveMagazineAction } from "./_actions/admin.actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export default async function AdminPage() {
  await checkRole([UserRole.ADMIN]);

  const { articles: pendingArticles } = await ArticleService.getAllArticles(1, 50, { status: PostStatus.DRAFT }); // Assuming DRAFT needs approval or we can add PENDING status
  const { magazines: pendingMagazines } = await MagazineService.getAllMagazines(1, 50, { status: MagazineStatus.DRAFT });
  const { meta: userMeta } = await UserService.getAllUsers(1, 1);
  const { meta: articleMeta } = await ArticleService.getAllArticles(1, 1);

  return (
    <main className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userMeta.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articleMeta.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingArticles.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Magazines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingMagazines.length}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="articles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="articles">Pending Articles</TabsTrigger>
          <TabsTrigger value="magazines">Pending Magazines</TabsTrigger>
        </TabsList>
        <TabsContent value="articles" className="space-y-4">
          <div className="grid gap-4">
            {pendingArticles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{article.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        By {article.author.name} • {format(new Date(article.createdAt), "PPP")}
                      </p>
                    </div>
                    <Badge>{article.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex gap-2">
                    <form action={approveArticleAction.bind(null, article.id)}>
                      <Button size="sm" variant="default">Approve</Button>
                    </form>
                    <form action={rejectArticleAction.bind(null, article.id)}>
                      <Button size="sm" variant="destructive">Reject</Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            ))}
            {pendingArticles.length === 0 && (
              <p className="text-muted-foreground">No pending articles.</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="magazines" className="space-y-4">
          <div className="grid gap-4">
            {pendingMagazines.map((magazine) => (
              <Card key={magazine.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{magazine.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Editor: {magazine.editor?.name} • {format(new Date(magazine.createdAt), "PPP")}
                      </p>
                    </div>
                    <Badge>{magazine.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{magazine.description}</p>
                  <div className="flex gap-2">
                    <form action={approveMagazineAction.bind(null, magazine.id)}>
                      <Button size="sm" variant="default">Approve</Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            ))}
            {pendingMagazines.length === 0 && (
              <p className="text-muted-foreground">No pending magazines.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}