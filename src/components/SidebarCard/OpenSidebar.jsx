import { Icons } from "../../icons/icons";
import { ExploreCard } from "./ExploreCard";
import { Subscriptions } from "./Subscriptions";
import { YourCard } from "./YourCard";

export const OpenSidebar = () => {
  return (
    <div className="h-screen w-48 overflow-y-scroll no-scrollbar">
      <Icons input={"Home"} />
      <Icons input={"Subscription"} />
      <hr />

      <YourCard />

      <Subscriptions />

      <ExploreCard />
    </div>
  );
};
