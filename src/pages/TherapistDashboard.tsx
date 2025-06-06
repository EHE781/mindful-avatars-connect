
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, User, Heart, Eye, Palette, TrendingUp } from 'lucide-react';

// Datos simulados de pacientes
const mockPatients = [
  {
    id: '1',
    name: 'Ana García',
    age: 28,
    email: 'ana@email.com',
    lastSession: '2024-06-05',
    progress: 'Positivo',
    drawingsCount: 5,
    notes: 'Muestra mejora en la expresión emocional a través del arte.',
    status: 'active'
  },
  {
    id: '3',
    name: 'Carlos Ruiz',
    age: 34,
    email: 'carlos@email.com',
    lastSession: '2024-06-03',
    progress: 'Estable',
    drawingsCount: 3,
    notes: 'Participación constante en las actividades terapéuticas.',
    status: 'active'
  },
  {
    id: '4',
    name: 'María López',
    age: 22,
    email: 'maria@email.com',
    lastSession: '2024-06-01',
    progress: 'Necesita atención',
    drawingsCount: 1,
    notes: 'Baja participación últimamente. Revisar motivación.',
    status: 'inactive'
  }
];

const TherapistDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedPatient, setSelectedPatient] = useState(mockPatients[0]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getProgressColor = (progress: string) => {
    switch (progress) {
      case 'Positivo': return 'bg-green-100 text-green-800';
      case 'Estable': return 'bg-blue-100 text-blue-800';
      case 'Necesita atención': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              <p className="text-sm text-gray-500">Panel de Terapeuta</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="bg-purple-100 text-purple-600">
                  {user?.name?.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">Terapeuta</p>
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
            Bienvenido, {user?.name?.split(' ')[0]}
          </h2>
          <p className="text-lg text-gray-600">
            Gestiona a tus pacientes y supervisa su progreso terapéutico.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="gentle-shadow border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Pacientes</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <User className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="gentle-shadow border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sesiones Esta Semana</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
                <Heart className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="gentle-shadow border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Dibujos Nuevos</p>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                </div>
                <Palette className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="gentle-shadow border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Progreso Positivo</p>
                  <p className="text-2xl font-bold text-gray-900">67%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Patients Management */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patients List */}
          <Card className="lg:col-span-1 gentle-shadow border-0">
            <CardHeader>
              <CardTitle>Lista de Pacientes</CardTitle>
              <CardDescription>Selecciona un paciente para ver detalles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockPatients.map((patient) => (
                <div
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedPatient.id === patient.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{patient.name}</h4>
                    <Badge className={getProgressColor(patient.progress)}>
                      {patient.progress}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">Última sesión: {patient.lastSession}</p>
                  <p className="text-sm text-gray-600">{patient.drawingsCount} dibujos</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Patient Details */}
          <Card className="lg:col-span-2 gentle-shadow border-0">
            <CardHeader>
              <CardTitle>Detalles del Paciente</CardTitle>
              <CardDescription>{selectedPatient.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Resumen</TabsTrigger>
                  <TabsTrigger value="drawings">Dibujos</TabsTrigger>
                  <TabsTrigger value="notes">Notas</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Nombre</label>
                      <p className="text-gray-900">{selectedPatient.name}</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Edad</label>
                      <p className="text-gray-900">{selectedPatient.age} años</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-gray-900">{selectedPatient.email}</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600">Estado</label>
                      <Badge className={getProgressColor(selectedPatient.progress)}>
                        {selectedPatient.progress}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Progreso Reciente</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">{selectedPatient.notes}</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="drawings" className="space-y-4">
                  <div className="text-center py-8">
                    <Palette className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-medium text-gray-900 mb-2">Dibujos del Paciente</h3>
                    <p className="text-gray-600 mb-4">
                      {selectedPatient.drawingsCount} dibujos creados hasta ahora
                    </p>
                    <Button className="therapeutic-gradient text-white">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Dibujos
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="notes" className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <p className="text-sm text-gray-600 mb-1">06 Jun 2024</p>
                      <p className="text-gray-900">Sesión muy productiva. El paciente mostró mayor apertura emocional.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <p className="text-sm text-gray-600 mb-1">03 Jun 2024</p>
                      <p className="text-gray-900">Progreso notable en la actividad de dibujo. Mayor uso de colores cálidos.</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 py-2">
                      <p className="text-sm text-gray-600 mb-1">01 Jun 2024</p>
                      <p className="text-gray-900">Inicio de nueva estrategia terapéutica con actividades creativas.</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TherapistDashboard;
