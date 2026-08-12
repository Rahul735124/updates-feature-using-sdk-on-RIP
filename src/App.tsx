import { useState } from 'react';
import { 
  Megaphone, 
  X, 
  Bot, 
  Code2, 
  FileText, 
  BarChart3, 
  Bookmark,
  Rocket,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Widget Modal */}
      {isOpen && (
        <div className="pointer-events-auto relative w-[400px] bg-[#0f111a] rounded-[24px] overflow-hidden border border-white/5 shadow-2xl flex flex-col h-[600px] max-h-[80vh] mb-4 animate-in slide-in-from-bottom-4 fade-in duration-300">
          
          {/* Header - Fixed */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#2d2165]/80 via-[#181335]/40 to-transparent pointer-events-none z-0" />
          
          <div className="relative z-10 px-6 py-5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] shrink-0">
                <Megaphone className="w-5 h-5 text-indigo-400" fill="currentColor" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white tracking-tight">What's New</h2>
                <p className="text-[#a1a1aa] text-xs mt-0.5">Latest updates to boost your prep</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors border border-white/5 shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="relative z-10 flex-1 overflow-y-auto px-6 pb-6 custom-scrollbar scroll-smooth">
            <div className="space-y-3">
              
              {/* Card 1 */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
                  <Bot className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 text-[9px] font-bold tracking-wider uppercase border border-teal-500/20 shrink-0">New Feature</span>
                    <span className="text-[#71717a] text-xs font-medium truncate ml-2">May 22</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-1.5 mb-1">
                    <h3 className="text-[15px] font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">AI Mock Interview 2.0</h3>
                    <span className="px-2 py-0.5 rounded-full bg-teal-500 text-white text-[10px] font-bold shadow-[0_0_10px_rgba(20,184,166,0.5)] shrink-0">NEW</span>
                  </div>
                  <p className="text-[#a1a1aa] text-[13px] leading-snug line-clamp-2">Enhanced AI now adapts to your answers and provides deeper real-time feedback.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                  <Code2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 text-[9px] font-bold tracking-wider uppercase border border-violet-500/20 shrink-0">Improvement</span>
                    <span className="text-[#71717a] text-xs font-medium truncate ml-2">May 20</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-1.5 mb-1">
                    <h3 className="text-[15px] font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">Environment Upgrade</h3>
                    <span className="px-2 py-0.5 rounded-full bg-violet-500 text-white text-[10px] font-bold shadow-[0_0_10px_rgba(139,92,246,0.5)] shrink-0">UPDATE</span>
                  </div>
                  <p className="text-[#a1a1aa] text-[13px] leading-snug line-clamp-2">Smoother compiler, real-time error hints, and 20+ new test cases.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(2fb,191,36,0.2)]">
                  <FileText className="w-6 h-6 text-white" fill="currentColor" strokeWidth={1} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[9px] font-bold tracking-wider uppercase border border-amber-500/20 shrink-0">New Content</span>
                    <span className="text-[#71717a] text-xs font-medium truncate ml-2">May 18</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-1.5 mb-1">
                    <h3 className="text-[15px] font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">50+ New DSA Questions</h3>
                    <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-bold shadow-[0_0_10px_rgba(249,115,22,0.5)] shrink-0">NEW</span>
                  </div>
                  <p className="text-[#a1a1aa] text-[13px] leading-snug line-clamp-2">Curated problem set with detailed solutions and complexity analysis.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <BarChart3 className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-bold tracking-wider uppercase border border-blue-500/20 shrink-0">Feature Update</span>
                    <span className="text-[#71717a] text-xs font-medium truncate ml-2">May 15</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-1.5 mb-1">
                    <h3 className="text-[15px] font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">Performance Analytics</h3>
                    <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold shadow-[0_0_10px_rgba(37,99,235,0.5)] shrink-0">UPDATE</span>
                  </div>
                  <p className="text-[#a1a1aa] text-[13px] leading-snug line-clamp-2">Track your progress with advanced analytics and personalized insights.</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(244,114,182,0.2)]">
                  <Bookmark className="w-6 h-6 text-white" fill="currentColor" strokeWidth={1} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 text-[9px] font-bold tracking-wider uppercase border border-pink-500/20 shrink-0">Resource</span>
                    <span className="text-[#71717a] text-xs font-medium truncate ml-2">May 12</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-1.5 mb-1">
                    <h3 className="text-[15px] font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">Interview Cheat Sheets</h3>
                    <span className="px-2 py-0.5 rounded-full bg-pink-600 text-white text-[10px] font-bold shadow-[0_0_10px_rgba(219,39,119,0.5)] shrink-0">NEW</span>
                  </div>
                  <p className="text-[#a1a1aa] text-[13px] leading-snug line-clamp-2">Quick reference guides for top topics in Software Engineering.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Footer - Fixed */}
          <div className="relative z-10 p-4 bg-gradient-to-r from-[#181236] via-[#241a4a] to-[#181236] border-t border-white/5 shrink-0 flex items-center justify-center gap-2 mt-auto">
            <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <Rocket className="w-3.5 h-3.5 text-white" fill="currentColor" strokeWidth={1} />
            </div>
            <span className="text-[#e4e4e7] text-sm font-medium">We're constantly improving to help you succeed!</span>
            
            {/* Decorative stars in footer */}
            <div className="absolute top-4 right-8 w-1 h-1 bg-white rounded-full shadow-[0_0_4px_2px_rgba(255,255,255,0.4)] blur-[0.5px]"></div>
            <div className="absolute bottom-3 right-16 w-1.5 h-1.5 bg-indigo-300 rounded-full shadow-[0_0_6px_2px_rgba(165,180,252,0.5)] blur-[0.5px]"></div>
          </div>
        </div>
      )}

      {/* Floating Action Button (Toggle) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto relative group flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full shadow-[0_8px_30px_rgb(99,102,241,0.4)] hover:shadow-[0_8px_40px_rgb(99,102,241,0.6)] hover:scale-105 transition-all duration-300 border border-white/10"
      >
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
        
        {isOpen ? (
          <X className="w-9 h-9 text-white relative z-10 animate-in spin-in-90 duration-200" />
        ) : (
          <>
            <Megaphone className="w-9 h-9 text-white relative z-10 animate-in zoom-in duration-200" fill="currentColor" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-[#09090b] flex items-center justify-center animate-bounce">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </>
        )}
      </button>
      
    </div>
  );
}
