"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Phone, Mail, MapPin, Wrench, Car, Shield, Star } from "lucide-react"
import Image from "next/image"

export default function GarageLanding() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Fonction pour le scroll smooth vers les sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const services = [
    { name: "Révision complète", price: "À partir de 120€", icon: Wrench },
    { name: "Diagnostic électronique", price: "À partir de 80€", icon: Car },
    { name: "Réparation carrosserie", price: "Devis gratuit", icon: Shield },
  ]

  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"]

  const testimonials = [
    {
      name: "Marie Dubois",
      rating: 5,
      comment: "Service impeccable, équipe professionnelle. Ma voiture n'a jamais été aussi bien entretenue !",
      car: "Peugeot 308",
    },
    {
      name: "Pierre Martin",
      rating: 5,
      comment: "Diagnostic précis et réparation rapide. Je recommande vivement ce garage !",
      car: "Renault Clio",
    },
    {
      name: "Sophie Laurent",
      rating: 5,
      comment: "Tarifs transparents et travail de qualité. Un garage de confiance !",
      car: "Citroën C3",
    },
  ]

  const galleryImages = [
    { src: "/modern-car-engine-repair.png", alt: "Réparation moteur", category: "Mécanique" },
    { src: "/car-diagnostic-computer.png", alt: "Diagnostic électronique", category: "Diagnostic" },
    { src: "/car-bodywork-painting.png", alt: "Peinture carrosserie", category: "Carrosserie" },
    { src: "/brake-system-repair.png", alt: "Système de freinage", category: "Freinage" },
    { src: "/car-maintenance-tools.png", alt: "Outils professionnels", category: "Équipement" },
    { src: "/car-interior-cleaning.png", alt: "Nettoyage intérieur", category: "Entretien" },
    { src: "/transmission-repair-shop.png", alt: "Réparation transmission", category: "Transmission" },
    { src: "/wheel-alignment-3d-gallery.png", alt: "Géométrie 3D", category: "Géométrie" },
  ]

  return (
    <div className="min-h-screen bg-blue-50 font-body">
      {/* Header */}
      <header className="bg-jetour-navy text-on-dark sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo-garage.png"
                alt="AutoExpert Logo"
                width={32}
                height={32}
                className="flex-shrink-0"
                priority
              />
              <span className="text-2xl brand-name tracking-tight">AutoExpert</span>
            </div>
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Navigation principale">
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-jetour-light-blue transition-colors font-medium cursor-pointer bg-transparent border-none outline-none focus:outline-none"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="hover:text-jetour-light-blue transition-colors font-medium cursor-pointer bg-transparent border-none outline-none focus:outline-none"
              >
                Réalisations
              </button>
              <button
                onClick={() => scrollToSection("booking")}
                className="hover:text-jetour-light-blue transition-colors font-medium cursor-pointer bg-transparent border-none outline-none focus:outline-none"
              >
                Réservation
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-jetour-light-blue transition-colors font-medium cursor-pointer bg-transparent border-none outline-none focus:outline-none"
              >
                Contact
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline font-mono text-sm font-semibold tracking-wider">01 23 45 67 89</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: "#f8f9fa" }} role="banner">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-jetour-brown text-on-dark px-4 py-2 font-mono text-xs font-semibold tracking-widest uppercase">
                  +15 ans d'expertise
                </Badge>
                <h1 className="heading-display text-5xl lg:text-6xl text-balance" style={{ color: "#1a1a1a" }}>
                  Votre garage de
                  <span style={{ color: "#404040" }}> confiance</span>
                </h1>
                <p className="text-elegant text-xl max-w-2xl" style={{ color: "#1a1a1a" }}>
                  Expertise technique de pointe, équipements dernière génération et service personnalisé pour
                  l'entretien et la réparation de votre véhicule.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-accessible bg-jetour-brown hover:bg-jetour-red text-on-dark px-8 py-4 text-lg focus-accessible font-heading"
                  aria-label="Prendre rendez-vous avec AutoExpert"
                  onClick={() => scrollToSection("booking")}
                >
                  <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                  Prendre rendez-vous
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-accessible px-8 py-4 text-lg bg-transparent focus-accessible font-heading"
                  style={{
                    borderColor: "#ff6b35",
                    color: "#ff6b35",
                    "--tw-ring-color": "#ff8c42",
                  }}
                  aria-label="Demander un devis gratuit"
                  onClick={() => scrollToSection("contact")}
                >
                  Devis gratuit
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4" role="region" aria-label="Statistiques de l'entreprise">
                <div className="text-center">
                  <div className="text-3xl font-heading font-black" style={{ color: "#ff6b35" }}>
                    500+
                  </div>
                  <div className="text-sm font-body font-medium tracking-wide" style={{ color: "#1a1a1a" }}>
                    Clients satisfaits
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-black" style={{ color: "#ff6b35" }}>
                    15+
                  </div>
                  <div className="text-sm font-body font-medium tracking-wide" style={{ color: "#1a1a1a" }}>
                    Années d'expérience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-black" style={{ color: "#ff6b35" }}>
                    24h
                  </div>
                  <div className="text-sm font-body font-medium tracking-wide" style={{ color: "#1a1a1a" }}>
                    Délai moyen
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/garage-workshop-interior.png"
                alt="Intérieur moderne de l'atelier AutoExpert avec équipements professionnels"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-jetour-brown text-on-dark p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8" aria-hidden="true" />
                  <div>
                    <div className="font-heading font-bold text-lg">Garantie</div>
                    <div className="text-sm font-mono tracking-wider">12 mois</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white" role="region" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gray-100 text-jetour-navy-accessible px-4 py-2 mb-4 font-mono text-xs font-semibold tracking-widest uppercase">
              Nos services
            </Badge>
            <h2 id="services-heading" className="section-heading text-4xl text-jetour-navy mb-4">
              Expertise technique complète
            </h2>
            <p className="text-elegant text-xl text-muted-accessible max-w-3xl mx-auto">
              De la révision périodique aux réparations complexes, notre équipe de mécaniciens certifiés maîtrise toutes
              les technologies automobiles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg focus-within:ring-2 focus-within:ring-jetour-light-blue"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-jetour-red transition-colors">
                    <service.icon className="h-8 w-8 text-jetour-orange" aria-hidden="true" />
                  </div>
                  <CardTitle className="card-heading text-xl text-jetour-navy-accessible">{service.name}</CardTitle>
                  <CardDescription className="text-lg font-mono font-semibold text-jetour-brown tracking-wide">
                    {service.price}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="section-heading text-3xl text-jetour-navy">
                Équipements de diagnostic dernière génération
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div
                    className="w-4 h-4 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#ff6b35" }}
                    aria-hidden="true"
                  ></div>
                  <div>
                    <h4 className="font-bold text-jetour-navy-accessible">Diagnostic électronique avancé</h4>
                    <p className="text-elegant text-muted-accessible">
                      Identification précise des pannes grâce à nos outils de diagnostic professionnels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-4 h-4 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#ff6b35" }}
                    aria-hidden="true"
                  ></div>
                  <div>
                    <h4 className="font-bold text-jetour-navy-accessible">Banc de géométrie 3D</h4>
                    <p className="text-elegant text-muted-accessible">
                      Réglage précis de la géométrie pour une conduite optimale et une usure uniforme des pneus.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div
                    className="w-4 h-4 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#ff6b35" }}
                    aria-hidden="true"
                  ></div>
                  <div>
                    <h4 className="font-bold text-jetour-navy-accessible">Station de climatisation</h4>
                    <p className="text-elegant text-muted-accessible">
                      Entretien complet des systèmes de climatisation avec récupération et recyclage du fluide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/wheel-alignment-3d.png"
                alt="Équipement de géométrie 3D moderne pour l'alignement des roues dans notre garage"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50" role="region" aria-labelledby="gallery-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gray-100 text-jetour-navy-accessible px-4 py-2 mb-4 font-mono text-xs font-semibold tracking-widest uppercase">
              Nos réalisations
            </Badge>
            <h2 id="gallery-heading" className="section-heading text-4xl text-jetour-navy mb-4">
              Portfolio de nos interventions
            </h2>
            <p className="text-elegant text-xl text-muted-accessible max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations récentes qui témoignent de notre savoir-faire et de notre
              attention aux détails.
            </p>
          </div>

          {/* Creative Grid Layout */}
          <div
            className="grid grid-cols-12 gap-4 auto-rows-[200px]"
            role="img"
            aria-label="Galerie des réalisations du garage"
          >
            {galleryImages.map((image, index) => {
              const gridClasses = [
                "col-span-12 md:col-span-8 row-span-2", // Large featured
                "col-span-12 md:col-span-4", // Stacked 1
                "col-span-12 md:col-span-4", // Stacked 2
                "col-span-12 md:col-span-4", // Equal 1
                "col-span-12 md:col-span-4", // Equal 2
                "col-span-12 md:col-span-4", // Equal 3
                "col-span-12 md:col-span-8", // Wide
                "col-span-12 md:col-span-4", // Tall
              ]

              return (
                <div
                  key={index}
                  className={`${gridClasses[index]} relative group overflow-hidden rounded-xl focus-within:ring-2 focus-within:ring-jetour-light-blue`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`${image.alt} - Intervention de type ${image.category} réalisée par AutoExpert`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                    aria-hidden="true"
                  ></div>
                  <div className="absolute bottom-4 left-4 text-on-dark">
                    <Badge className="bg-jetour-blue mb-2 font-mono text-xs font-semibold tracking-wider">
                      {image.category}
                    </Badge>
                    <h3
                      className={`${
                        index === 0 ? "text-xl" : index === 6 ? "text-lg" : "text-sm"
                      } font-heading font-bold`}
                    >
                      {image.alt}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white" role="region" aria-labelledby="booking-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-gray-100 text-jetour-navy-accessible px-4 py-2 mb-4 font-mono text-xs font-semibold tracking-widest uppercase">
                Réservation
              </Badge>
              <h2 id="booking-heading" className="section-heading text-4xl text-jetour-navy mb-4">
                Prenez rendez-vous en ligne
              </h2>
              <p className="text-elegant text-xl text-muted-accessible">
                Réservez votre créneau en quelques clics. Nous vous confirmerons votre rendez-vous rapidement.
              </p>
            </div>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="card-heading text-2xl text-center text-jetour-navy">
                  Calendrier de réservation
                </CardTitle>
                <CardDescription className="text-center text-muted-accessible font-body">
                  Sélectionnez une date et un horaire qui vous conviennent
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form role="form" aria-label="Formulaire de prise de rendez-vous">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="booking-date" className="block text-sm font-bold mb-2 text-jetour-navy">
                        Date souhaitée *
                      </label>
                      <Input
                        id="booking-date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full border-jetour-blue focus:border-jetour-navy focus-accessible font-mono"
                        required
                        aria-describedby="date-help"
                      />
                      <div id="date-help" className="text-sm text-muted-accessible mt-1 font-body">
                        Sélectionnez une date à partir d'aujourd'hui
                      </div>
                    </div>
                    <div>
                      <fieldset>
                        <legend className="block text-sm font-bold mb-2 text-jetour-navy">Horaire *</legend>
                        <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-required="true">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              type="button"
                              variant={selectedTime === time ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedTime(time)}
                              className={
                                selectedTime === time
                                  ? "btn-accessible bg-jetour-blue hover:bg-jetour-navy text-on-dark focus-accessible font-mono"
                                  : "btn-accessible border-jetour-blue text-jetour-navy hover:bg-jetour-blue hover:text-white focus-accessible font-mono"
                              }
                              role="radio"
                              aria-checked={selectedTime === time}
                              aria-label={`Créneaux horaire ${time}`}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-bold mb-2 text-jetour-navy">
                        Nom complet *
                      </label>
                      <Input
                        id="full-name"
                        placeholder="Votre nom et prénom"
                        className="border-jetour-blue focus:border-jetour-navy focus-accessible font-body"
                        required
                        aria-describedby="name-help"
                      />
                      <div id="name-help" className="text-sm text-muted-accessible mt-1 font-body">
                        Entrez votre nom et prénom complets
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold mb-2 text-jetour-navy">
                        Téléphone *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Votre numéro de téléphone"
                        className="border-jetour-blue focus:border-jetour-navy focus-accessible font-mono"
                        required
                        aria-describedby="phone-help"
                      />
                      <div id="phone-help" className="text-sm text-muted-accessible mt-1 font-mono text-xs">
                        Format: 01 23 45 67 89
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold mb-2 text-jetour-navy">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        className="border-jetour-blue focus:border-jetour-navy focus-accessible font-mono"
                        required
                        aria-describedby="email-help"
                      />
                      <div id="email-help" className="text-sm text-muted-accessible mt-1 font-body">
                        Nous vous enverrons une confirmation par email
                      </div>
                    </div>
                    <div>
                      <label htmlFor="vehicle" className="block text-sm font-bold mb-2 text-jetour-navy">
                        Véhicule *
                      </label>
                      <Input
                        id="vehicle"
                        placeholder="Marque et modèle"
                        className="border-jetour-blue focus:border-jetour-navy focus-accessible font-body"
                        required
                        aria-describedby="vehicle-help"
                      />
                      <div id="vehicle-help" className="text-sm text-muted-accessible mt-1 font-mono text-xs">
                        Ex: Peugeot 308, Renault Clio
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-bold mb-2 text-jetour-navy">
                      Description de l'intervention
                    </label>
                    <textarea
                      id="description"
                      className="w-full p-3 border border-jetour-blue rounded-md resize-none focus:border-jetour-navy focus-accessible font-body"
                      rows={4}
                      placeholder="Décrivez brièvement le problème ou le type d'intervention souhaité..."
                      aria-describedby="description-help"
                    ></textarea>
                    <div id="description-help" className="text-sm text-muted-accessible mt-1 font-body">
                      Optionnel: Décrivez votre demande pour nous aider à mieux vous servir
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="btn-accessible w-full bg-jetour-brown hover:bg-jetour-red text-on-dark py-4 text-lg focus-accessible font-heading"
                    disabled={!selectedDate || !selectedTime}
                    aria-describedby="submit-help"
                  >
                    <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                    Confirmer le rendez-vous
                  </Button>
                  <div id="submit-help" className="text-sm text-muted-accessible mt-2 text-center font-body">
                    {!selectedDate || !selectedTime
                      ? "Veuillez sélectionner une date et un horaire pour continuer"
                      : "Cliquez pour confirmer votre rendez-vous"}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" role="region" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gray-100 text-jetour-navy-accessible px-4 py-2 mb-4 font-mono text-xs font-semibold tracking-widest uppercase">
              Témoignages
            </Badge>
            <h2 id="testimonials-heading" className="section-heading text-4xl text-jetour-navy mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-elegant text-xl text-muted-accessible max-w-3xl mx-auto">
              La satisfaction de nos clients est notre priorité. Découvrez leurs retours d'expérience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg focus-within:ring-2 focus-within:ring-jetour-light-blue">
                <CardContent className="p-6">
                  <div
                    className="flex items-center mb-4"
                    role="img"
                    aria-label={`Note: ${testimonial.rating} étoiles sur 5`}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-jetour-brown fill-current" aria-hidden="true" />
                    ))}
                    <span className="sr-only">{testimonial.rating} étoiles sur 5</span>
                  </div>
                  <blockquote className="text-elegant text-muted-accessible mb-4 italic">
                    "{testimonial.comment}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <cite className="font-bold text-jetour-navy-accessible not-italic font-heading">
                      {testimonial.name}
                    </cite>
                    <div className="text-sm text-muted-accessible font-mono tracking-wide">{testimonial.car}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-jetour-navy text-on-dark"
        role="region"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 id="contact-heading" className="section-heading text-4xl mb-6">
                Contactez-nous
              </h2>
              <p className="text-elegant text-xl text-white mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans
                l'entretien de votre véhicule.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-jetour-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-bold">Adresse</div>
                    <div className="text-white font-body">123 Avenue de la République, 75011 Paris</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-jetour-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-bold">Téléphone</div>
                    <a href="tel:0123456789" className="text-white link-accessible focus-accessible font-mono">
                      01 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-jetour-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-bold">Email</div>
                    <a
                      href="mailto:contact@autoexpert.fr"
                      className="text-white link-accessible focus-accessible font-mono"
                    >
                      contact@autoexpert.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-jetour-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-bold">Horaires</div>
                    <div className="text-white font-mono text-sm tracking-wide">
                      Lun-Ven: 8h-18h
                      <br />
                      Sam: 8h-12h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-jetour-blue border-jetour-blue">
                <CardHeader>
                  <CardTitle className="card-heading text-on-dark font-heading">Demande de devis</CardTitle>
                  <CardDescription className="text-red-100 font-body">
                    Obtenez un devis personnalisé gratuitement
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form role="form" aria-label="Formulaire de demande de devis">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="quote-firstname" className="sr-only">
                          Prénom
                        </label>
                        <Input
                          id="quote-firstname"
                          placeholder="Prénom"
                          className="bg-white border-red-300 text-gray-900 placeholder:text-gray-500 focus:border-red-500 focus-accessible font-body"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="quote-lastname" className="sr-only">
                          Nom
                        </label>
                        <Input
                          id="quote-lastname"
                          placeholder="Nom"
                          className="bg-white border-red-300 text-gray-900 placeholder:text-gray-500 focus:border-red-500 focus-accessible font-body"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="quote-email" className="sr-only">
                          Email
                        </label>
                        <Input
                          id="quote-email"
                          type="email"
                          placeholder="Email"
                          className="bg-white border-red-300 text-gray-900 placeholder:text-gray-500 focus:border-red-500 focus-accessible font-mono"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="quote-phone" className="sr-only">
                          Téléphone
                        </label>
                        <Input
                          id="quote-phone"
                          type="tel"
                          placeholder="Téléphone"
                          className="bg-white border-red-300 text-gray-900 placeholder:text-gray-500 focus:border-red-500 focus-accessible font-mono"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="quote-vehicle" className="sr-only">
                          Véhicule
                        </label>
                        <Input
                          id="quote-vehicle"
                          placeholder="Véhicule (marque, modèle, année)"
                          className="bg-white border-red-300 text-gray-900 placeholder:text-gray-500 focus:border-red-500 focus-accessible font-body"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="quote-description" className="sr-only">
                          Description de votre demande
                        </label>
                        <textarea
                          id="quote-description"
                          className="w-full p-3 bg-white border border-red-300 rounded-md text-gray-900 placeholder:text-gray-500 resize-none focus:border-red-500 focus-accessible font-body"
                          rows={4}
                          placeholder="Décrivez votre demande..."
                          required
                        ></textarea>
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="btn-accessible w-full bg-red-500 hover:bg-red-600 text-on-dark py-4 text-lg focus-accessible font-heading"
                        aria-label="Envoyer la demande de devis"
                      >
                        <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                        Envoyer la demande
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
