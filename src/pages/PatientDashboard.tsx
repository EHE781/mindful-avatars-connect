
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, Pencil, User, Heart, Palette, Smile } from 'lucide-react';

const PatientDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MindCare</h1>
              <p className="text-sm text-gray-500">Tu espacio seguro</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  {user?.name?.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">Paciente</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Hola, {user?.name?.split(' ')[0]}! 👋
          </h2>
          <p className="text-lg text-gray-600">
            ¿Cómo te sientes hoy? Explora las actividades que tenemos para ti.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Drawing Activity */}
          <Card className="gentle-shadow hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-pink-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Crea tu Arte
              </CardTitle>
              <CardDescription className="text-gray-600">
                Expresa tus emociones a través del dibujo. Una forma divertida y terapéutica de comunicarte.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={() => navigate('/drawing')}
                className="w-full warm-gradient text-white font-medium py-3 hover:shadow-lg transition-all duration-200"
              >
                <Pencil className="w-5 h-5 mr-2" />
                Empezar a Dibujar
              </Button>
            </CardContent>
          </Card>

          {/* Avatar Customization */}
          <Card className="gentle-shadow hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Tu Avatar
              </CardTitle>
              <CardDescription className="text-gray-600">
                Personaliza tu cara virtual. Cambia tu cabello, ojos, cejas y más para crear tu avatar único.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={() => navigate('/avatar')}
                className="w-full therapeutic-gradient text-white font-medium py-3 hover:shadow-lg transition-all duration-200"
              >
                <User className="w-5 h-5 mr-2" />
                Personalizar Avatar
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Progress Section */}
        <Card className="gentle-shadow border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Tu Progreso</CardTitle>
            <CardDescription>Un resumen de tus actividades recientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">5</div>
                <p className="text-sm text-green-700">Dibujos Creados</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
                <p className="text-sm text-blue-700">Avatares Personalizados</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
                <p className="text-sm text-purple-700">Días Activo</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PatientDashboard;
