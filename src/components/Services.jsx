import React from 'react';
import { Scale, FileText, Search, ShieldCheck } from 'lucide-react';

const services = [
  { title: 'Peritaje Judicial', icon: <Scale />, desc: 'Informes técnicos rigurosos para procesos judiciales.' },
  { title: 'Asesoría Jurídica', icon: <ShieldCheck />, desc: 'Consultoría especializada en derecho civil y penal.' },
  { title: 'Análisis de Documentos', icon: <FileText />, desc: 'Verificación y autentificación de documentos legales.' },
  { title: 'Investigación Pericial', icon: <Search />, desc: 'Recolección de pruebas técnicas con validez legal.' },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-deep-black px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gold-primary font-serif text-3xl md:text-5xl text-center mb-16">Especialidades Periciales</h2>
        
        {/* Grid Responsivo (Paso de 1 a 4 columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-soft-gray p-8 border border-white/5 hover:border-gold-primary/50 transition-all duration-500 group">
              <div className="text-gold-primary mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(s.icon, { size: 40 })}
              </div>
              <h3 className="text-white font-serif text-xl mb-4">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;