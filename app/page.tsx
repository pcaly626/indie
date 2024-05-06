import { Home } from "./home/containers/Home";
import { InvestigationBox  } from "./investigation/components/InvestigationBox";
import { Quotes } from "./quotes/containers/Quotes";

export default function IndexPage() {
  let modules = [<InvestigationBox/>];

  return <Home modules={modules} />;
}