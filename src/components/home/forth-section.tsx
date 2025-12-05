import { Button } from "../ui/button";
import { SectionLayout } from "./section-layout";
import ViewCard from "./view-list";
export default function ForthSection({items}:{items : any}) {
  return (<SectionLayout title="MARKET PLACE" subtitle="Stories that are researched and written by our editorial team" showSeparator center={true}><ViewCard items={items}/><div><Button variant="outline" className="mx-auto mt-6 block cursor-pointer">View All Stories</Button></div></SectionLayout>);
}
