
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, User, Save, RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface AvatarFeatures {
  hairStyle: string;
  hairColor: string;
  eyeColor: string;
  eyebrowStyle: string;
  skinTone: string;
  faceShape: string;
}

const Avatar = () => {
  const navigate = useNavigate();
  const [features, setFeatures] = useState<AvatarFeatures>({
    hairStyle: 'short',
    hairColor: '#8B4513',
    eyeColor: '#4A5568',
    eyebrowStyle: 'normal',
    skinTone: '#F7E6D3',
    faceShape: 'oval'
  });

  const hairStyles = [
    { id: 'short', name: 'Corto', emoji: '👦' },
    { id: 'long', name: 'Largo', emoji: '👧' },
    { id: 'curly', name: 'Rizado', emoji: '👨‍🦱' },
    { id: 'braids', name: 'Trenzas', emoji: '👩‍🦱' },
    { id: 'bald', name: 'Calvo', emoji: '👨‍🦲' },
    { id: 'ponytail', name: 'Cola', emoji: '👱‍♀️' }
  ];

  const hairColors = [
    '#8B4513', '#000000', '#654321', '#DAA520', 
    '#FF6347', '#9932CC', '#4169E1', '#32CD32'
  ];

  const eyeColors = [
    '#4A5568', '#8B4513', '#228B22', '#4169E1', 
    '#9932CC', '#FF6347', '#000000', '#808080'
  ];

  const eyebrowStyles = [
    { id: 'normal', name: 'Normal' },
    { id: 'thick', name: 'Gruesas' },
    { id: 'thin', name: 'Finas' },
    { id: 'arched', name: 'Arqueadas' }
  ];

  const skinTones = [
    '#F7E6D3', '#E8B887', '#D2956F', '#C07951', 
    '#A0522D', '#8B4513', '#654321', '#4A2C2A'
  ];

  const faceShapes = [
    { id: 'oval', name: 'Ovalado' },
    { id: 'round', name: 'Redondo' },
    { id: 'square', name: 'Cuadrado' },
    { id: 'heart', name: 'Corazón' }
  ];

  const updateFeature = (feature: keyof AvatarFeatures, value: string) => {
    setFeatures(prev => ({ ...prev, [feature]: value }));
  };

  const resetAvatar = () => {
    setFeatures({
      hairStyle: 'short',
      hairColor: '#8B4513',
      eyeColor: '#4A5568',
      eyebrowStyle: 'normal',
      skinTone: '#F7E6D3',
      faceShape: 'oval'
    });
    toast({
      title: "Avatar reiniciado",
      description: "Se han restaurado las características por defecto",
    });
  };

  const saveAvatar = () => {
    // Aquí se guardaría el avatar en la base de datos
    toast({
      title: "¡Avatar guardado!",
      description: "Tu avatar personalizado ha sido guardado exitosamente",
    });
  };

  const AvatarPreview = () => (
    <div className="relative w-48 h-48 mx-auto bg-gradient-to-b from-blue-100 to-blue-200 rounded-full border-4 border-white shadow-lg overflow-hidden">
      {/* Face */}
      <div 
        className="absolute inset-4 rounded-full"
        style={{ backgroundColor: features.skinTone }}
      >
        {/* Hair */}
        <div 
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-16 rounded-t-full ${
            features.hairStyle === 'bald' ? 'hidden' : ''
          }`}
          style={{ backgroundColor: features.hairColor }}
        />
        
        {/* Eyes */}
        <div className="absolute top-12 left-8 w-4 h-4 rounded-full bg-white">
          <div 
            className="w-3 h-3 rounded-full absolute top-0.5 left-0.5"
            style={{ backgroundColor: features.eyeColor }}
          />
        </div>
        <div className="absolute top-12 right-8 w-4 h-4 rounded-full bg-white">
          <div 
            className="w-3 h-3 rounded-full absolute top-0.5 left-0.5"
            style={{ backgroundColor: features.eyeColor }}
          />
        </div>
        
        {/* Eyebrows */}
        <div 
          className={`absolute top-10 left-7 w-6 h-1 rounded ${
            features.eyebrowStyle === 'thick' ? 'h-2' : 
            features.eyebrowStyle === 'thin' ? 'h-0.5' : 'h-1'
          }`}
          style={{ backgroundColor: features.hairColor }}
        />
        <div 
          className={`absolute top-10 right-7 w-6 h-1 rounded ${
            features.eyebrowStyle === 'thick' ? 'h-2' : 
            features.eyebrowStyle === 'thin' ? 'h-0.5' : 'h-1'
          }`}
          style={{ backgroundColor: features.hairColor }}
        />
        
        {/* Nose */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-black opacity-10 rounded"></div>
        
        {/* Mouth */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-red-400 rounded-full"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/dashboard')}
              className="text-gray-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Personaliza tu Avatar</h1>
              <p className="text-sm text-gray-500">Crea tu cara virtual única</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button onClick={resetAvatar} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reiniciar
            </Button>
            <Button onClick={saveAvatar} className="therapeutic-gradient text-white">
              <Save className="w-4 h-4 mr-2" />
              Guardar
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Avatar Preview */}
          <Card className="lg:col-span-1 gentle-shadow border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-center">
                <User className="w-5 h-5" />
                <span>Tu Avatar</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <AvatarPreview />
              
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-700 font-medium">✨ ¡Looks genial!</p>
                <p className="text-xs text-gray-600 mt-1">
                  Sigue personalizando para hacer tu avatar único
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Customization Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hair Style */}
            <Card className="gentle-shadow border-0">
              <CardHeader>
                <CardTitle>Estilo de Cabello</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {hairStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => updateFeature('hairStyle', style.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                        features.hairStyle === style.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-2xl mb-2">{style.emoji}</div>
                      <p className="text-sm font-medium">{style.name}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hair Color */}
            <Card className="gentle-shadow border-0">
              <CardHeader>
                <CardTitle>Color de Cabello</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-8 gap-2">
                  {hairColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => updateFeature('hairColor', color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                        features.hairColor === color
                          ? 'border-gray-900 scale-110'
                          : 'border-gray-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eye Color */}
            <Card className="gentle-shadow border-0">
              <CardHeader>
                <CardTitle>Color de Ojos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-8 gap-2">
                  {eyeColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => updateFeature('eyeColor', color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                        features.eyeColor === color
                          ? 'border-gray-900 scale-110'
                          : 'border-gray-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eyebrows */}
            <Card className="gentle-shadow border-0">
              <CardHeader>
                <CardTitle>Estilo de Cejas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-3">
                  {eyebrowStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => updateFeature('eyebrowStyle', style.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                        features.eyebrowStyle === style.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <p className="text-sm font-medium">{style.name}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skin Tone */}
            <Card className="gentle-shadow border-0">
              <CardHeader>
                <CardTitle>Tono de Piel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-8 gap-2">
                  {skinTones.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => updateFeature('skinTone', tone)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                        features.skinTone === tone
                          ? 'border-gray-900 scale-110'
                          : 'border-gray-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: tone }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
