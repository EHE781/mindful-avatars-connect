
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, User, Users, Palette, Smile, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            {/* Logo */}
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MindCare
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Plataforma terapéutica innovadora que conecta pacientes y terapeutas 
              a través de herramientas creativas y seguimiento personalizado
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="therapeutic-gradient text-white px-8 py-3 text-lg hover:shadow-lg transition-all duration-200">
                  Comenzar Ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="px-8 py-3 text-lg border-2 hover:bg-gray-50">
                  Iniciar Sesión
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Diseñado para el bienestar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Herramientas especializadas para cada tipo de usuario, 
            creando un ambiente terapéutico seguro y efectivo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Patient Features */}
          <Card className="gentle-shadow border-0 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Para Pacientes
              </CardTitle>
              <CardDescription className="text-gray-600">
                Interfaz amigable y herramientas terapéuticas innovadoras
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Palette className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Herramienta de dibujo terapéutico</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smile className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Personalización de avatar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Seguimiento de progreso emocional</span>
              </div>
            </CardContent>
          </Card>

          {/* Therapist Features */}
          <Card className="gentle-shadow border-0 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Para Terapeutas
              </CardTitle>
              <CardDescription className="text-gray-600">
                Panel profesional de gestión y seguimiento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Gestión de lista de pacientes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Palette className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Visualización de dibujos de pacientes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Seguimiento de progreso y notas</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu viaje?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a MindCare y descubre una nueva forma de abordar el bienestar mental
          </p>
          <Link to="/register">
            <Button className="bg-white text-blue-600 px-8 py-3 text-lg hover:bg-gray-100 font-semibold">
              Crear Cuenta Gratuita
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900">MindCare</span>
          </div>
          <p className="text-gray-600">
            © 2024 MindCare. Diseñado con ❤️ para el bienestar mental.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
