import { Button } from "../ui/button";
import { SectionLayout } from "./section-layout";
import { HighlightSection } from "./highlight-section";

export default function SecondSection({items}:{items : any}) {
  return (
    <SectionLayout
      title="GLOBAL INDIAN | COVER STORIES"
      subtitle="Stories that are researched and written by our editorial team"
      showSeparator
      center ={true}
    >
        <HighlightSection items={items}/>

        <div>
            <Button variant="outline" className="mx-auto mt-8 block cursor-pointer rounded-full px-8">
                View All Stories
            </Button>
        </div>
    </SectionLayout>
  );
}
