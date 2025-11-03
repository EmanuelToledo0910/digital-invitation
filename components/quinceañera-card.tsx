import { HeaderSection } from "./sections/header-section"
  import { EventDetailsSection } from "./sections/event-details-section"
  import LocationSection from "./sections/location-section"
  import { PersonalMessageSection } from "./sections/personal-message-section"
  import { PrePartyPhotosSection } from "./sections/pre-party-photos-section"
  import { TimelinePhotosSection } from "./sections/timeline-photos-section"

  export function QuinceañeraCard() {
    return (
      <div className="w-full">
        <div className="md:container md:mx-auto md:px-4 md:py-8 md:max-w-4xl">
          <div className="md:bg-card md:shadow-2xl md:overflow-hidden md:rounded-lg">
            <div className="w-full">
              <HeaderSection />
              <EventDetailsSection />
              <LocationSection />
              <PrePartyPhotosSection />
              <PersonalMessageSection />
              <TimelinePhotosSection />
            </div>
          </div>
        </div>
      </div>
    )
  }
