import { Button } from "../ui/button";
import { SectionLayout } from "./section-layout";
import ViewCard from "./view-list";

export default function ThirdSection({items}:{items : any}) {
  return (
    <SectionLayout
      title="GLOBAL INDIAN YOUTH | COVER STORIES"
      subtitle="Stories that are researched and written by our editorial team"
      showSeparator
      center ={true}
    >
        <ViewCard items={items}/>


        <div>
            <Button variant="outline" className="mx-auto mt-6 block cursor-pointer">
                View All Stories
            </Button>
        </div>
    </SectionLayout>
  );
}
