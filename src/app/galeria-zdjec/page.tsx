import { PageHeader } from "@/components/PageHeader";
import { SpaceGallerySection } from "@/components/SpaceGallerySection";

export default function GaleriaZdjecPage() {
  return (
    <>
      <PageHeader
        title="Galeria zdjęć"
        subtitle="Zobacz wnętrza Polany Przygody i naszą codzienną przestrzeń pracy z dziećmi."
      />
      <SpaceGallerySection showIntro={false} />
    </>
  );
}
