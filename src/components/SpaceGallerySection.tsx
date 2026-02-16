"use client";

import { motion } from "framer-motion";
import { ImageGallery } from "@/components/ImageGallery";
import { spaceGalleryImages } from "@/data/spaceGalleryImages";

interface SpaceGallerySectionProps {
  sectionId?: string;
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  showIntro?: boolean;
}

export function SpaceGallerySection({
  sectionId,
  title = "Nasza przestrzeń",
  subtitle = "Gabinety zaprojektowane z myślą o najmłodszych – kolorowe, przestronne i wypełnione specjalistycznym sprzętem",
  columns = 3,
  showIntro = true,
}: SpaceGallerySectionProps) {
  return (
    <section id={sectionId} className="py-12 md:py-20 bg-polana-straw scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showIntro && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-polana-dark-green mb-4">
              {title}
            </h2>
            <p className="text-lg text-polana-dark-green/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        )}

        <ImageGallery images={spaceGalleryImages} columns={columns} />
      </div>
    </section>
  );
}
