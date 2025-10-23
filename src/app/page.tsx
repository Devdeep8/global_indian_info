import CategoriesTabs from "@/components/layout/categories-tabs";
import MainHeader from "@/components/layout/Header";

export default async function HomePage() {
  return (
    <div className="">
      <MainHeader />
      <div>
        <CategoriesTabs/>
      </div>

    </div>
  );
}
