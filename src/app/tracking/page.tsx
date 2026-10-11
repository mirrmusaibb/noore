import Link from "next/link";
import { PackageSearch } from "lucide-react";

export default async function TrackingPage({ searchParams }: { searchParams: Promise<{ reference?: string }> }) {
  const { reference = "" } = await searchParams;
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Tracking</span></div><div className="simple-page-heading"><PackageSearch size={22} strokeWidth={1.3} /><span className="eyebrow">Shipment tracking · interface preview</span><h1>Follow the<br /><em>journey.</em></h1><p>No live shipment data is connected to this storefront preview.</p></div><form className="tracking-form" action="/tracking" method="get"><label htmlFor="tracking-reference">Order or tracking reference</label><div><input id="tracking-reference" name="reference" defaultValue={reference} placeholder="Enter a reference" /><button className="button button-primary" type="submit">Look up preview</button></div></form>{reference && <div className="tracking-result" role="status"><span className="eyebrow">Demonstration response · {reference}</span><h2>No live tracking is available.</h2><p>A carrier connection and a real shipment reference are required before events can be shown.</p></div>}</section>;
}
