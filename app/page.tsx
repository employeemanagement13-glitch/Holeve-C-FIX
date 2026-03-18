import FeatureBlock from "@/Components/General/FeatureBlock";
import Showcase from "@/Components/General/ShowCase";
import OurMasterpieces from "@/Components/Home/MasterPieces";
import HomeLanding from "@/Components/Home/HomeLanding";
import { demo2Props, demo3Props, demo4Props, demo5Props, fetchMappedUpdates } from "@/lib/data";
import { supabase } from "@/utils/supabaseClient";
import Feedbacks from "@/Components/Home/Feedbacks";
import Insights from "@/Components/Home/Insights";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const rowsdata = await fetchMappedUpdates(supabase);
  const demo1Props = rowsdata.length > 0 ? rowsdata[0] : null;
  const updatesdata = rowsdata.length > 0 ? rowsdata.filter((_, index) => index !== 0) : [];


  return (
    <main>
      <HomeLanding />
      <Showcase />
      {demo1Props && <FeatureBlock {...demo1Props} className="" />}
      <OurMasterpieces />

      {updatesdata.map((update, index) => (
        <FeatureBlock {...update} key={index} className="" />
      ))}

      {/* <ParallelCards projects={insights} title="Insights From Clients" subtitle="Explore our diverse projects that showcase our quality and designs. " className="w-full mx-auto"/> */}
      <Insights />
      <FeatureBlock {...demo4Props} className="" layout="right" />
      <Feedbacks />
      <FeatureBlock {...demo5Props} className="" layout="left" />
    </main>
  );
}
