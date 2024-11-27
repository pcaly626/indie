import { Home } from "./home/containers/Home";
import { InvestigationBox  } from "./investigation/components/InvestigationBox";
import { QuoteBox } from "./quotes/components/QuoteBox";
import { CheckInBox } from "./checkin/components/CheckInBox";
import { YearEndReview } from "./year_end_review/components/YearEndReview";


export default function IndexPage() {
  let modules = [<InvestigationBox/>, <QuoteBox/>, <CheckInBox/>, <YearEndReview/>];

  return <Home modules={modules} />;
}