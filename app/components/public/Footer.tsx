"use client";

import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0A1F44] text-white pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo + Description */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#C9A227]">GADAC</h3>
                        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                            Accompagner vos projets avec une approche rigoureuse,
                            collaborative et durable, pour générer un impact réel et positif.
                        </p>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#C9A227]">Navigation</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><Link href="/" className="hover:text-white transition">Accueil</Link></li>
                            <li><Link href="/about" className="hover:text-white transition">Notre approche</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">Nos services</Link></li>
                            <li><Link href="/projets" className="hover:text-white transition">Références</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#C9A227]">Domaines</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>Conseil & Stratégie</li>
                            <li>Études & Ingénierie</li>
                            <li>Digital & Transformation</li>
                            <li>Formation & Renforcement</li>
                            <li>Développement durable & RSE</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#C9A227]">Contact</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-[#C9A227] mt-1" />
                                <span>Dakar, Sénégal</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-[#C9A227]" />
                                <span>+221 77 123 45 67</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-[#C9A227]" />
                                <span>contact@gadac.com</span>
                            </li>
                        </ul>

                        {/* Réseaux sociaux */}
                        <div className="flex gap-4 mt-4">
                            <Link href="#" className="p-2 rounded-full bg-[#C9A227] text-[#0A1F44] hover:bg-white transition">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-[#C9A227] text-[#0A1F44] hover:bg-white transition">
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-[#C9A227] text-[#0A1F44] hover:bg-white transition">
                                <Linkedin className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 pt-6 pb-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
                    <span>
                        © {new Date().getFullYear()} <span className="text-white">GADAC</span>. Tous droits réservés.
                    </span>

                    <span>
                        Made by{" "}
                        <a
                            href="https://www.noumtech.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#C9A227]"
                        >
                            Noumtech
                        </a>
                    </span>
                </div>

            </div>
        </footer>
    );
}
