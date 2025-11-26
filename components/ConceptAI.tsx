import React, { useState } from 'react';
import { Sparkles, Loader2, Lightbulb, Image as ImageIcon, Box, BatteryCharging } from 'lucide-react';
import { generateVisualConcepts } from '../services/geminiService';
import { ConceptSuggestion, ConceptStatus } from '../types';

const ConceptAI: React.FC = () => {
  const [abstract, setAbstract] = useState('');
  const [status, setStatus] = useState<ConceptStatus>(ConceptStatus.IDLE);
  const [concepts, setConcepts] = useState<ConceptSuggestion[]>([]);

  const handleGenerate = async () => {
    if (!abstract.trim()) return;
    
    setStatus(ConceptStatus.LOADING);
    setConcepts([]);
    
    try {
      const results = await generateVisualConcepts(abstract);
      setConcepts(results);
      setStatus(ConceptStatus.SUCCESS);
    } catch (error) {
      setStatus(ConceptStatus.ERROR);
    }
  };

  const getIconForStyle = (style: string) => {
    if (style.toLowerCase().includes('realistic')) return <ImageIcon className="text-science-500" />;
    if (style.toLowerCase().includes('meta')) return <Lightbulb className="text-energy-500" />;
    return <Box className="text-volt-500" />;
  };

  return (
    <section id="concept-ai" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
       {/* Ambient Glow */}
       <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-science-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Input */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-energy-500 to-science-600 rounded-lg shadow-lg shadow-energy-500/20">
                <Sparkles size={24} className="text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold">Concept Generator</h2>
            </div>
            
            <p className="text-slate-300 mb-8 text-lg">
              Struggling to visualize your new cathode material or solid electrolyte? Paste your abstract, and I'll generate illustration concepts tailored for energy journals.
            </p>
            
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl">
              <label htmlFor="abstract" className="block text-sm font-medium text-slate-300 mb-2">
                Research Abstract / Summary
              </label>
              <textarea
                id="abstract"
                rows={8}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-energy-500 focus:border-transparent transition-all"
                placeholder="Paste your abstract here (e.g., 'We report a sulfide-based solid electrolyte with high ionic conductivity...')"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
              />
              
              <div className="mt-6">
                <button
                  onClick={handleGenerate}
                  disabled={status === ConceptStatus.LOADING || !abstract.trim()}
                  className={`w-full flex items-center justify-center py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                    status === ConceptStatus.LOADING || !abstract.trim()
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-energy-600 to-science-600 hover:from-energy-500 hover:to-science-500 text-white shadow-lg hover:shadow-energy-500/25'
                  }`}
                >
                  {status === ConceptStatus.LOADING ? (
                    <>
                      <Loader2 className="animate-spin mr-3" /> Processing Materials...
                    </>
                  ) : (
                    <>
                      <BatteryCharging className="mr-2" /> Generate Concepts
                    </>
                  )}
                </button>
              </div>
              {status === ConceptStatus.ERROR && (
                <p className="mt-4 text-red-400 text-sm text-center">
                  Something went wrong. Please check your text and try again.
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Output */}
          <div className="lg:pl-8">
            {status === ConceptStatus.IDLE && (
              <div className="h-full flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl p-12 min-h-[400px]">
                <Lightbulb size={48} className="mb-4 opacity-50 text-energy-500" />
                <p className="text-center">Your visualization concepts will appear here.</p>
              </div>
            )}

            {status === ConceptStatus.LOADING && (
              <div className="space-y-6 animate-pulse">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 h-48"></div>
                 ))}
              </div>
            )}

            {status === ConceptStatus.SUCCESS && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-4">Suggested Directions</h3>
                {concepts.map((concept, idx) => (
                  <div key={idx} className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-energy-500 transition-colors shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                        {getIconForStyle(concept.style)}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-energy-400 mb-2">{concept.style}</h4>
                        <p className="text-slate-300 text-sm mb-3 leading-relaxed">{concept.description}</p>
                        <div className="text-xs font-mono text-slate-400 bg-slate-950 p-3 rounded border border-slate-800">
                          <span className="text-science-400 font-bold">Strategy:</span> {concept.rationale}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-science-900/30 rounded-xl border border-science-500/30 text-center">
                  <p className="text-science-200 text-sm">
                    Ready to visualize this? Mention the style in the contact form!
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConceptAI;