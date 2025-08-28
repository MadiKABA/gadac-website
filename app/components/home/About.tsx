"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    CheckCircleIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    GlobeAltIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";

import * as React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export type ValueItem = {
    title: string;
    description: string;
    icon?: React.ReactNode;
};

export interface AboutGADACProps {
    heading?: string;
    subheading?: string;
    mission?: string;
    vision?: string;
    values?: ValueItem[];
    imageSrc?: string;
    imageAlt?: string;
    cta?: { label: string; href: string };
    className?: string;
}

const defaultValues: ValueItem[] = [
    {
        title: "Professionnalisme",
        description:
            "Offrir un service de haute qualité basé sur la rigueur et l’excellence.",
        icon: <CheckCircleIcon className="h-6 w-6 text-blue-900" aria-hidden="true" />,
    },
    {
        title: "Innovation",
        description:
            "Proposer des solutions modernes et digitales pour transformer les organisations.",
        icon: <LightBulbIcon className="h-6 w-6 text-blue-900" aria-hidden="true" />,
    },
    {
        title: "Intégrité",
        description:
            "Travailler avec transparence et éthique dans toutes nos interventions.",
        icon: <ShieldCheckIcon className="h-6 w-6 text-blue-900" aria-hidden="true" />,
    },
    {
        title: "Impact durable",
        description:
            "Mettre en avant le développement responsable et la RSE.",
        icon: <GlobeAltIcon className="h-6 w-6 text-blue-900" aria-hidden="true" />,
    },
    {
        title: "Collaboration",
        description:
            "Co-construire avec nos clients et partenaires pour des résultats tangibles.",
        icon: <UsersIcon className="h-6 w-6 text-blue-900" aria-hidden="true" />,
    },
];



export default function AboutGADAC({
    heading = "Qui sommes-nous ?",
    subheading = "Le <strong>Groupe ADA Consulting (GADAC)</strong> est un cabinet de conseil pluridisciplinaire basé à Conakry, en République de Guinée. Depuis sa création, GADAC s’est donné pour mission d’accompagner les entreprises privées, les institutions publiques, les ONG et les bailleurs de fonds dans la réalisation de leurs projets de développement.",
    mission = "Nous intervenons à l’intersection du conseil stratégique, des études et de l’ingénierie, du digital et de la transformation organisationnelle, ainsi que du renforcement des capacités et de l’accompagnement en matière de développement durable et RSE",
    vision = "Cette diversité de compétences nous permet de proposer une approche intégrée et des solutions concrètes, répondant efficacement aux défis complexes auxquels sont confrontées les organisations d’aujourd’hui.",
    values = defaultValues,
    imageSrc = "/images/about.jpg",
    imageAlt = "Équipe GADAC en session de travail",
    cta = { label: "Nous contacter", href: "/contact" },
    className = "",
}: AboutGADACProps) {
    return (
        <section
            aria-labelledby="about-gadac-title"
            className={`relative isolate overflow-hidden bg-white py-16 sm:py-20 ${className}`}
        >
            {/* Decorative background shapes */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                {/* Cercle bleu marine */}
                <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#0A1F44]/10 blur-3xl" />
                {/* Cercle doré */}
                <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#C9A227]/10 blur-2xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Image column LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative h-80 w-full overflow-hidden rounded-3xl border-4 border-[#0A1F44]/20 shadow-lg sm:h-96 lg:h-[520px]"
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="(min-width: 124px) 80vw, 100vw"
                        />
                        {/* Bandeau doré décoratif */}
                        <div className="absolute bottom-0 left-0 h-2 w-1/3 bg-[#C9A227]" />
                    </motion.div>

                    {/* Text column RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <p className="mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-[#0A1F44] border-[#0A1F44]/30">
                            GADAC • Conseil | Études | Digital | Formation | RSE
                        </p>
                        <h2
                            id="about-gadac-title"
                            className="flex items-center gap-3 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl"
                        >
                            <span className="h-1.5 w-10 rounded-full bg-[#C9A227]" />
                            {heading}
                        </h2>
                        <p
                            className="mt-4 text-base leading-7 text-gray-700"
                            dangerouslySetInnerHTML={{ __html: subheading }}
                        />

                        <div className="mt-8 space-y-6">
                            <div className="rounded-2xl border border-[#0A1F44]/20 bg-white/80 p-5 shadow-sm">
                                <h3 className="text-lg font-semibold text-blue-900">
                                    Mission
                                </h3>
                                <p className="mt-2 text-gray-700">{mission}</p>
                            </div>
                            <div className="rounded-2xl border border-[#0A1F44]/20 bg-white/80 p-5 shadow-sm">
                                <h3 className="text-lg font-semibold text-blue-900">
                                    Vision
                                </h3>
                                <p className="mt-2 text-gray-700">{vision}</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href={cta.href}
                                className="inline-flex items-center justify-center gap-2 rounded-2xl border  bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#E6C200] focus:outline-none focus:ring-2 focus:ring-[#C9A227]/50"
                            >
                                {cta.label}
                                <motion.span
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <ArrowRight className="h-6 w-10" aria-hidden="true" />
                                </motion.span>
                            </a>
                        </div>
                    </motion.div>
                </div>


            </div>
            {/* Values */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative isolate overflow-hidden bg-gradient-to-br from-[#0A1F44] to-[#142C60] py-16 sm:py-20 mt-15"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h3 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        <span className="h-1.5 w-10 rounded-full bg-[#C9A227]" />
                        Nos valeurs
                    </h3>
                    <p className="mt-2 text-gray-200">
                        Ce qui guide nos actions au quotidien.
                    </p>

                    <ul className="mt-10 flex flex-wrap justify-center gap-6">
                        {values.map((v, i) => (
                            <li
                                key={i}
                                className="group w-full max-w-sm sm:w-[45%] lg:w-[30%] rounded-2xl border border-white/20 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="rounded-xl border border-[#C9A227]/40 bg-[#C9A227]/10 p-2 text-red-900 transition group-hover:bg-[#C9A227]/20">
                                        {v.icon ?? (
                                            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold text-[#0A1F44]">
                                            {v.title}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-700">
                                            {v.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>



                </div>
            </motion.div>


            {/* subtle bottom divider */}
            <div className="mx-auto mt-16 h-px max-w-7xl bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
        </section>
    );
}
