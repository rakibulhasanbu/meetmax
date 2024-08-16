import RecentEvent from "./RecentEvent";
import LikedEvents from "./LikedEvents";
import BirthDayEvents from "./BirthdayCard";

const FeedRightEvents = () => {
  return (
    <div className="space-y-8">
      {/* want to linkes card  */}
      <LikedEvents />

      {/* recent event cards  */}
      <RecentEvent />

      {/* birthdays events card  */}
      <BirthDayEvents />
    </div>
  );
};

export default FeedRightEvents;
