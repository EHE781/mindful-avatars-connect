
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, User, Users, Palette, Smile, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden navy-gradient">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center space-y-8">
            {/* Logo */}
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-300 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-12 h-12 text-slate-800" />
            </div>
            
            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              MindCare
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Plataforma terapéutica que conecta pacientes y terapeutas 
              a través de herramientas creativas y seguimiento personalizado
            </p>
            
            {/* Inspirational Quote */}
            <div className="max-w-4xl mx-auto py-12">
              <blockquote className="text-lg md:text-xl text-slate-200 italic text-center">
                "La recuperación no se trata de cambiar quién eres; se trata de dejar ir quien no eres."
              </blockquote>
              <p className="text-slate-400 text-sm mt-4 text-center">- Dr. Anita Johnston Press</p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link to="/register">
                <Button className="teal-accent-gradient text-slate-800 px-10 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 border-0">
                  🎨 Dibujar desde Cero
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="px-10 py-4 text-lg border-2 border-slate-300 text-slate-100 hover:bg-slate-700 hover:border-slate-200">
                  👤 Usar Avatares Existentes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Diseñado para el bienestar
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Herramientas especializadas para cada tipo de usuario, 
            creando un ambiente terapéutico seguro y efectivo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Patient Features */}
          <Card className="deep-shadow border-0 hover:shadow-2xl transition-all duration-300 bg-white">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-20 h-20 cool-gradient rounded-full flex items-center justify-center mb-6 shadow-lg">
                <User className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800">
                Para Pacientes
              </CardTitle>
              <CardDescription className="text-slate-600 text-lg">
                Interfaz amigable y herramientas terapéuticas innovadoras
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                <span className="text-slate-700 text-lg">Herramienta de dibujo terapéutico</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-slate-700 text-lg">Personalización de avatar</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                <span className="text-slate-700 text-lg">Seguimiento de progreso emocional</span>
              </div>
            </CardContent>
          </Card>

          {/* Therapist Features */}
          <Card className="deep-shadow border-0 hover:shadow-2xl transition-all duration-300 bg-white">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-20 h-20 navy-gradient rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800">
                Para Terapeutas
              </CardTitle>
              <CardDescription className="text-slate-600 text-lg">
                Panel profesional de gestión y seguimiento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
                <span className="text-slate-700 text-lg">Gestión de lista de pacientes</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-slate-700 text-lg">Visualización de dibujos de pacientes</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-slate-700 text-lg">Seguimiento de progreso y notas</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="navy-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para comenzar tu viaje?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Únete a MindCare y descubre una nueva forma de abordar el bienestar mental
          </p>
          <Link to="/register">
            <Button className="bg-white text-slate-800 px-12 py-4 text-lg hover:bg-slate-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Crear Cuenta Gratuita
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-300 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-slate-800" />
            </div>
            <span className="font-bold text-white text-xl">MindCare</span>
          </div>
          <p className="text-slate-400 text-lg">
            © 2024 MindCare. Diseñado con ❤️ para el bienestar mental.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
