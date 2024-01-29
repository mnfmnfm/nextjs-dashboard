import { fetchRevenue } from "../lib/data";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";

export default async function Page() {
  const revenue = await fetchRevenue();
  return <main>
    <h1 className={`${lusitana.className}`}>
      Dashboard
    </h1>
    <div>
      top div
    </div>
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <RevenueChart revenue={revenue} />
    </div>
  </main>;
}
