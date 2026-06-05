import { useRouter } from "vue-router";

export  function useUtils() {
  const router = useRouter();

  const moveSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    router.push("/#" + sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    moveSection,
  };
}
