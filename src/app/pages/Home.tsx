import { NewHero } from "../components/home/NewHero";
import { OurEducationalConcepts } from "../components/home/OurEducationalConcepts";
import { EducationalFramework } from "../components/EducationalFramework";
import { RiskManagementEducation } from "../components/RiskManagementEducation";
import { AcademicExplanation } from "../components/AcademicExplanation";
import { WhatYouWillLearn } from "../components/WhatYouWillLearn";

export function Home() {
  return (
    <>
      <NewHero />
      <OurEducationalConcepts />
      <EducationalFramework />
      <RiskManagementEducation />
      <AcademicExplanation />
      <WhatYouWillLearn />
    </>
  );
}