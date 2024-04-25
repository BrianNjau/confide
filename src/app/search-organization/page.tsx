import { routes } from "@/config/routes";
import PageHeader from "@/app/shared/page-header";
import ProductsGrid from "@/app/shared/explore-listing";
import ListingFilters from "@/app/shared/explore-listing/listing-filters";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject("Search For Your Organization"),
};

const pageHeader = {
  title: "Search For Your Organization",
  breadcrumb: [
    {
      href: "/",
      name: "Home",
    },
    {
      name: "Organization Search",
    },
  ],
};

export default function SearchOrganizationPage() {
  return (
    <div className="@container m-16">
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <ListingFilters className="mb-6" />
      <ProductsGrid />
    </div>
  );
}
