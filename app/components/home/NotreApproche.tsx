"use client";

import { motion } from "framer-motion";
import { Search, Users, Rocket, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function NotreApproche() {
    const steps = [
        {
            title: "Analyse & Diagnostic",
            description:
                "Comprendre votre environnement, vos enjeux et vos défis grâce à une étude approfondie et personnalisée.",
            icon: <Search className="h-6 w-6 text-white" aria-hidden="true" />,
        },
        {
            title: "Co-construction des solutions",
            description:
                "Développer ensemble des stratégies et des plans d’action adaptés, en impliquant vos équipes à chaque étape.",
            icon: <Users className="h-6 w-6 text-white" aria-hidden="true" />,
        },
        {
            title: "Mise en œuvre opérationnelle",
            description:
                "Déployer efficacement les solutions, assurer le suivi et transférer les compétences nécessaires pour la réussite.",
            icon: <Rocket className="h-6 w-6 text-white" aria-hidden="true" />,
        },
        {
            title: "Suivi & Impact durable",
            description:
                "Évaluer, ajuster et optimiser nos interventions afin de garantir un impact réel et durable sur vos projets.",
            icon: <TrendingUp className="h-6 w-6 text-white" aria-hidden="true" />,
        },
    ];

    return (
        <section className="relative bg-[#0A1F44] py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                {/* Haut : texte + image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-10">
                    {/* Texte */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col justify-center"
                    >
                        <div className="mb-4 h-1 w-12 rounded-full bg-[#C9A227]" />
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Notre approche
                        </h2>
                        <p className="mt-4 text-md text-white leading-relaxed">
                            Une méthodologie collaborative et durable, conçue pour accompagner
                            vos projets de bout en bout avec rigueur, innovation et impact.
                            Chez <span className="font-semibold text-white">GADAC</span>,
                            nous plaçons l’écoute et la compréhension des besoins de nos
                            partenaires au cœur de notre démarche. Chaque projet fait l’objet
                            d’une analyse approfondie afin de proposer des solutions sur mesure,
                            réalistes et adaptées au contexte local et international.
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/images/notre-approche.png"
                            alt="Notre approche"
                            fill
                            className="rounded-2xl object-cover shadow-lg"
                        />
                    </motion.div>
                </div>


                {/* Étapes */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="flex flex-col items-center text-center px-6"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] shadow-lg mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-300">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
