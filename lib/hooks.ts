import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName:SectionName,threshold = 0.75){
    const { ref , inView } =useInView({threshold});
  const { setActiveSection , timeOfLastClick} = useActiveSectionContext();
    /**leading for line height in CSS tailwind */

    useEffect(() => {
      if( inView && Date.now() - timeOfLastClick > 1000 ){
        setActiveSection(sectionName);
      }
    },[inView,setActiveSection,timeOfLastClick,sectionName]);

    return {
        ref
    }
}