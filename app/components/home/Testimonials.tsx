"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Fatou Ndiaye",
            role: "Directrice RH, Entreprise X",
            feedback:
                "GADAC nous a accompagnés avec professionnalisme et écoute. Leur méthodologie a eu un impact concret sur nos projets.",
            image: "/images/testimonial/1.jpg",
        },

        {
            name: "Mamadou Diallo",
            role: "CEO, Startup Y",
            feedback:
                "Une équipe engagée, innovante et à l’écoute. Grâce à eux, nous avons pu accélérer notre transformation digitale.",
            image: "/images/testimonial/2.jpg",
        },
        {
            name: "Fatou Ndiaye",
            role: "Directrice RH, Entreprise X",
            feedback:
                "GADAC nous a accompagnés avec professionnalisme et écoute. Leur méthodologie a eu un impact concret sur nos projets.",
            image: "/images/testimonial/1.jpg",
        },
        {
            name: "Awa Diop",
            role: "Consultante indépendante",
            feedback:
                "J’ai apprécié leur approche collaborative et la qualité du suivi. GADAC est un partenaire de confiance.",
            image: "/images/testimonial/1.jpg",
        },
    ];

    return (
        <section className="relative bg-gray-50 py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="flex items-center justify-center gap-3 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                        <span className="h-1.5 w-10 rounded-full bg-[#C9A227]" />
                        Ils nous font confiance
                    </h2>
                    <p className="mt-4 text-gray-800">
                        Découvrez les témoignages de nos partenaires et clients qui ont
                        bénéficié de notre expertise.
                    </p>
                </div>

                {/* Carousel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative w-80 h-80 mx-auto flex flex-col items-center justify-center rounded-full shadow-lg text-center px-6 py-8 overflow-hidden bg-white">
                                {/* Avatar */}
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover border-4 border-gray-50 mb-4"
                                />

                                {/* Feedback */}
                                <p className="text-gray-700 italic text-sm leading-relaxed mb-4">
                                    “{t.feedback}”
                                </p>

                                {/* Name */}
                                <h3 className="text-lg font-semibold text-blue-900">{t.name}</h3>
                                <span className="text-sm text-gray-500">{t.role}</span>

                                {/* Arc décoratif */}
                                <div className="absolute inset-0 rounded-full">
                                    <div className="absolute inset-0 rounded-full"
                                        style={{
                                            border: "2px solid transparent",
                                            borderBottomColor: "#C9A227",
                                            borderRightColor: "#C9A227",
                                            borderRadius: "50%",
                                            transform: "rotate(10deg)",
                                        }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
