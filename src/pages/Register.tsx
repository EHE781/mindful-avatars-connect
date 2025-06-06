
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';
import { UserPlus, Heart, User, Users } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'patient' as 'patient' | 'therapist'
  });
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        variant: "destructive"
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Error",
        description: "La contraseña debe tener al menos 6 caracteres",
        variant: "destructive"
      });
      return;
    }

    const success = await register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role
    });

    if (success) {
      toast({
        title: "¡Cuenta creada!",
        description: "Te has registrado correctamente",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Error",
        description: "No se pudo crear la cuenta",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center navy-gradient p-4">
      <Card className="w-full max-w-md deep-shadow border-0">
        <CardHeader className="text-center space-y-6 pb-8">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-300 rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-10 h-10 text-slate-800" />
          </div>
          <CardTitle className="text-3xl font-bold text-slate-800">
            Únete a MindCare
          </CardTitle>
          <CardDescription className="text-slate-600 text-lg">
            Crea tu cuenta y comienza tu viaje terapéutico
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-700 font-medium">Nombre completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="transition-all duration-200 focus:ring-2 focus:ring-slate-500 border-slate-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="transition-all duration-200 focus:ring-2 focus:ring-slate-500 border-slate-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700 font-medium">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="transition-all duration-200 focus:ring-2 focus:ring-slate-500 border-slate-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-slate-700 font-medium">Confirmar contraseña</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Repite tu contraseña"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="transition-all duration-200 focus:ring-2 focus:ring-slate-500 border-slate-300"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-slate-700 font-medium">Tipo de cuenta</Label>
              <RadioGroup 
                value={formData.role} 
                onValueChange={(value) => setFormData({...formData, role: value as 'patient' | 'therapist'})}
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
                  <RadioGroupItem value="patient" id="patient" />
                  <User className="w-5 h-5 text-slate-600" />
                  <div>
                    <Label htmlFor="patient" className="font-medium cursor-pointer text-slate-800">Paciente</Label>
                    <p className="text-sm text-slate-600">Accede a herramientas terapéuticas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
                  <RadioGroupItem value="therapist" id="therapist" />
                  <Users className="w-5 h-5 text-slate-600" />
                  <div>
                    <Label htmlFor="therapist" className="font-medium cursor-pointer text-slate-800">Terapeuta</Label>
                    <p className="text-sm text-slate-600">Gestiona pacientes y seguimiento</p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              className="w-full cool-gradient text-white font-medium py-3 hover:shadow-lg transition-all duration-200 border-0"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creando cuenta...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <UserPlus className="w-4 h-4" />
                  <span>Crear Cuenta</span>
                </div>
              )}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-slate-700 hover:text-slate-900 font-medium underline">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
