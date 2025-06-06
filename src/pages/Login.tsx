
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { LogIn, Heart } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    const success = await login(email, password);
    if (success) {
      toast({
        title: "¡Bienvenido!",
        description: "Has iniciado sesión correctamente",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Error de autenticación",
        description: "Email o contraseña incorrectos",
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
            MindCare
          </CardTitle>
          <CardDescription className="text-slate-600 text-lg">
            Accede a tu espacio terapéutico personalizado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-slate-500 border-slate-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700 font-medium">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="transition-all duration-200 focus:ring-2 focus:ring-slate-500 border-slate-300"
              />
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 space-y-2 border border-slate-200">
              <p><strong className="text-slate-800">Cuentas de prueba:</strong></p>
              <p>Paciente: paciente@test.com / 123456</p>
              <p>Terapeuta: terapeuta@test.com / 123456</p>
            </div>

            <Button 
              type="submit" 
              className="w-full cool-gradient text-white font-medium py-3 hover:shadow-lg transition-all duration-200 border-0"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Iniciando sesión...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <LogIn className="w-4 h-4" />
                  <span>Iniciar Sesión</span>
                </div>
              )}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="text-slate-700 hover:text-slate-900 font-medium underline">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
