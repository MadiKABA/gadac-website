"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
    {
        id: "conseil",
        title: "Conseil & Stratégie",
        description:
            "Nous accompagnons les entreprises et institutions dans la définition, la planification et la mise en œuvre de stratégies de croissance et de transformation. Notre approche repose sur une analyse approfondie du contexte, l’identification des leviers de performance et la proposition de solutions sur mesure pour assurer un impact durable.",
        image: "/images/services/Conseil-Stratégie.jpg",
        link: "/services/conseil",
    },
    {
        id: "etudes",
        title: "Études & Ingénierie",
        description:
            "Nos équipes réalisent des études de faisabilité, des diagnostics organisationnels et des analyses sectorielles pour éclairer la prise de décision. Nous proposons également des solutions techniques et opérationnelles adaptées aux réalités locales, tout en intégrant les meilleures pratiques internationales.",
        image: "/images/services/etudes-engenierie.jpg",
        link: "/services/etudes",
    },
    {
        id: "digital",
        title: "Digital & Transformation",
        description:
            "Nous aidons les organisations à tirer parti du digital pour optimiser leurs processus, améliorer leur productivité et renforcer leur compétitivité. De la mise en place de solutions numériques innovantes à l’accompagnement du changement organisationnel, nous favorisons une transformation digitale inclusive et durable.",
        image: "/images/services/Digital-Transformation.jpg",
        link: "/services/digital",
    },
    {
        id: "formation",
        title: "Formation & Renforcement des capacités",
        description:
            "Nous concevons et animons des programmes de formation adaptés aux besoins des équipes, en mettant l’accent sur le transfert de compétences et l’apprentissage pratique. Notre objectif est de renforcer les capacités individuelles et collectives afin de préparer les organisations à relever efficacement les défis actuels et futurs.",
        image: "/images/services/Formation-Renforcement-des-capacités.jpg",
        link: "/services/formation",
    },
    {
        id: "durable",
        title: "Développement durable & RSE",
        description:
            "Nous accompagnons les acteurs publics et privés dans l’intégration des principes de durabilité et de responsabilité sociétale dans leurs activités. Qu’il s’agisse de politiques RSE, d’initiatives vertes ou de projets à fort impact social, nous favorisons des approches équilibrées entre performance économique et responsabilité environnementale et sociale.",
        image: "/images/services/Developpement-durable-RSE.jpg",
        link: "/services/durable",
    },
    {
        id: "projets",
        title: "Références / Projets",
        description:
            "À travers nos projets réalisés avec divers partenaires, nous mettons en avant notre savoir-faire et notre capacité à répondre à des enjeux complexes. Cette section évolutive présentera des études de cas, des missions réussies et des témoignages illustrant la valeur ajoutée de notre expertise.",
        image: "/images/services/References-Projets.jpg",
        link: "/services/projets",
    },
];


export default function ServicesTabs() {
    const [activeTab, setActiveTab] = useState(services[0]);

    return (

        <section className="relative isolate bg-white py-8 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Titre section */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="flex items-center justify-center gap-3 text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl">
                        <span className="h-1.5 w-10 rounded-full bg-[#C9A227]" />
                        Nos services
                    </h2>
                    <p className="mt-3 text-base text-gray-700">
                        Découvrez nos principaux domaines d’intervention.
                    </p>
                </div>

                <div className="mt-10 overflow-x-auto custom-scroll">
                    <div className="flex gap-4 min-w-max border-b border-gray-200 pb-2">
                        {services.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setActiveTab(s)}
                                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition ${activeTab.id === s.id
                                        ? "bg-blue-900 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {s.title}
                            </button>
                        ))}
                    </div>
                </div>





                {/* Contenu service actif */}
                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                    {/* Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.id}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src={activeTab.image}
                                alt={activeTab.title}
                                className="w-full h-72 object-cover lg:h-[400px]"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Texte + CTA */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.title}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold text-[#0A1F44]">
                                {activeTab.title}
                            </h3>
                            <p className="mt-4 text-gray-600 text-base leading-relaxed">
                                {activeTab.description}
                            </p>

                            {/* CTA */}
                            <a
                                href={activeTab.link}
                                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#E6C200]"
                            >
                                En savoir plus
                                <motion.span
                                    initial={{ x: 0 }}
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <ArrowRight className="h-5 w-5" />
                                </motion.span>
                            </a>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
