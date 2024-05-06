import { Home } from "./home/containers/Home";
import { InvestigationBox  } from "./investigation/components/InvestigationBox";
import { QuoteBox } from "./quotes/components/QuoteBox";

export default function IndexPage() {
  let modules = [<InvestigationBox/>, <QuoteBox/>];

  return <Home modules={modules} />;
}