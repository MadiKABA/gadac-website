"use client";

import React from "react";
import { ArrowRight, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
            {/* Motifs géométriques animés */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Grille décorative */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            </div>

            {/* Overlay subtil */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="
            flex flex-col lg:flex-row 
            items-center lg:items-center
            justify-center lg:justify-between
            min-h-screen lg:min-h-[100vh] gap-12
          "
                >
                    {/* Contenu textuel animé */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // arrive par le bas
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
                    >
                        {/* Titre principal */}
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold leading-tight">
                                Expertise Conseil pour
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">
                                    Votre Croissance
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Groupe ADA Consulting vous accompagne dans tous vos projets de développement
                                à travers le <span className="text-amber-300 font-medium">conseil</span>, les{" "}
                                <span className="text-amber-300 font-medium">études</span>, la{" "}
                                <span className="text-amber-300 font-medium">formation</span> et
                                l&apos;<span className="text-amber-300 font-medium">ingénierie</span>.
                            </p>
                        </div>

                        {/* Boutons CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="/contact"
                                className="group inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-blue-900 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Nous contacter
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                            <a
                                href="/services"
                                className="inline-flex items-center justify-center border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                            >
                                Découvrir nos services
                            </a>
                        </div>
                    </motion.div>

                    {/* Section visuelle (masquée sur mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="hidden lg:flex lg:w-1/2 justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Image principale */}
                            <div className="relative w-full max-w-lg">
                                <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-blue-400/20 rounded-3xl blur-xl"></div>
                                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-inner flex items-center justify-center">
                                        <div className="text-center p-8">
                                            {/* Logo GADAC */}
                                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                                                <span className="text-white font-bold text-2xl">G</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-blue-900 mb-2">GADAC</h3>
                                            <p className="text-blue-700 text-sm leading-relaxed">
                                                Cabinet de conseil pluridisciplinaire basé à Conakry
                                            </p>
                                            <div className="flex justify-center space-x-2 mt-6">
                                                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Éléments flottants */}
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl shadow-lg flex items-center justify-center transform -rotate-12 animate-pulse">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center transform rotate-12 animate-pulse delay-1000">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Vague décorative */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    className="w-full h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,120 C120,90 240,60 360,75 C480,90 600,105 720,90 C840,75 960,45 1080,60 C1140,67.5 1170,82.5 1200,120 L1200,120 L0,120 Z"
                        opacity="0.1"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
