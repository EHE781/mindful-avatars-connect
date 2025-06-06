
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Palette, Eraser, Download, RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Drawing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#3B82F6');
  const [brushSize, setBrushSize] = useState(5);
  const [isErasing, setIsErasing] = useState(false);
  const navigate = useNavigate();

  const colors = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B', 
    '#8B5CF6', '#EC4899', '#6366F1', '#84CC16',
    '#F97316', '#06B6D4', '#64748B', '#000000'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Fondo blanco
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (isErasing) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = brushSize * 2;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = brushSize;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const saveDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `dibujo-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();

    toast({
      title: "¡Dibujo guardado!",
      description: "Tu creación ha sido descargada exitosamente.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
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
              <h1 className="text-xl font-bold text-gray-900">Crea tu Arte</h1>
              <p className="text-sm text-gray-500">Expresa tus emociones a través del dibujo</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button onClick={saveDrawing} className="warm-gradient text-white">
              <Download className="w-4 h-4 mr-2" />
              Guardar
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tools Panel */}
          <Card className="lg:col-span-1 gentle-shadow border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>Herramientas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Colors */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">Colores</label>
                <div className="grid grid-cols-4 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setCurrentColor(color);
                        setIsErasing(false);
                      }}
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                        currentColor === color && !isErasing 
                          ? 'border-gray-900 scale-110' 
                          : 'border-gray-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Brush Size */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-3 block">
                  Tamaño del pincel: {brushSize}px
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={brushSize}
                  onChange={(e) => setBrushSize(parseInt(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              {/* Tools */}
              <div className="space-y-2">
                <Button
                  onClick={() => setIsErasing(!isErasing)}
                  variant={isErasing ? "default" : "outline"}
                  className="w-full"
                >
                  <Eraser className="w-4 h-4 mr-2" />
                  {isErasing ? 'Desactivar Borrador' : 'Borrador'}
                </Button>
                
                <Button
                  onClick={clearCanvas}
                  variant="outline"
                  className="w-full text-red-600 hover:text-red-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Limpiar Todo
                </Button>
              </div>

              {/* Motivational Messages */}
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700 font-medium">💡 Consejo</p>
                <p className="text-xs text-gray-600 mt-1">
                  No hay dibujos buenos o malos, solo expresiones únicas. ¡Diviértete creando!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Canvas */}
          <Card className="lg:col-span-3 gentle-shadow border-0">
            <CardContent className="p-6">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <canvas
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className="w-full h-96 cursor-crosshair"
                  style={{ touchAction: 'none' }}
                />
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Haz clic y arrastra para dibujar. Usa las herramientas de la izquierda para personalizar tu creación.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Drawing;
