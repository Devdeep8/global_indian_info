import { Button } from "../ui/button";
import { SectionLayout } from "./section-layout";
import { GridSection } from "./grid-section";
export default function ThirdSection({items}:{items : any}) {
  return (<SectionLayout title="GLOBAL INDIAN YOUTH | COVER STORIES" subtitle="Inspiring the next generation of leaders" showSeparator center={true}><GridSection items={items}/><div><Button variant="outline" className="mx-auto mt-8 block cursor-pointer rounded-full px-8">View All Stories</Button></div></SectionLayout>);
}
