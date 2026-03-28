"use client"

import { useState, useEffect } from "react"
import { 
  CheckCircle2, ShieldCheck, Lock, Search, AlertTriangle, 
  Clock, Ghost, Fingerprint, Database, Zap, ArrowRight,
  MessageSquare, Instagram, Heart, EyeOff, Trash2
} from "lucide-react"

export default function RemarketingResultsPage() {
  const [timeLeft, setTimeLeft] = useState(380) // ~6 minutes
  const [progress, setProgress] = useState(0)

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Simulated progress bar entry
  useEffect(() => {
    const interval = setTimeout(() => setProgress(100), 100)
    return () => clearTimeout(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const checkoutLink = "https://pay.mycheckoutt.com/019d05e9-aebd-72bc-a523-1eeac448b138?ref="

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 font-sans selection:bg-rose-500/30 overflow-x-hidden">
      {/* 100% Complete Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-rose-600 h-9 flex items-center justify-center relative overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-rose-500 transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
          <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.25em] text-white animate-pulse">
             CRITICAL DATA RECOVERY: 100% COMPLETE
          </span>
        </div>
      </div>

      <main className="pt-20 pb-40 px-5 max-w-md mx-auto space-y-12">
        
        {/* Main Alarming Headline */}
        <section className="text-center space-y-5 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="inline-block px-3 py-1 bg-rose-500/10 border border-rose-500/30 rounded text-[10px] font-black text-rose-500 tracking-widest uppercase mb-2">
            Investigation Result Prepared
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-[0.9] text-balance">
            3 HIDDEN <br />
            <span className="text-rose-500">PROFILES</span> <br />
            DETECTED.
          </h1>
          <p className="text-slate-400 text-sm font-medium leading-relaxed px-4">
            Our deep scan uncovered activities that match 98% of infidelity red flags. 
            <span className="text-white font-bold"> Stop the guessing game now.</span>
          </p>
        </section>

        {/* Curiosity Gap: Social Discovery Grid */}
        <section className="bg-slate-900/80 border-y border-slate-800 py-8 px-2 space-y-8 animate-in zoom-in duration-700 delay-300">
          <h2 className="text-[11px] font-black tracking-[0.3em] text-slate-600 uppercase text-center">
            SOCIAL FOOTPRINTS FOUND
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {/* WhatsApp Item */}
            <div className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-2xl border border-slate-800">
              <div className="relative">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center blur-[1px]">
                  <MessageSquare className="w-6 h-6 text-emerald-500/40" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-rose-600 rounded-full border-2 border-[#0B1120] text-[10px] font-bold flex items-center justify-center text-white animate-bounce">
                  14
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-black text-white uppercase tracking-wider">WhatsApp Recovery</p>
                <p className="text-[10px] text-slate-500 font-mono">14 Private Conversations (DELETED)</p>
              </div>
              <Lock className="w-4 h-4 text-slate-700" />
            </div>

            {/* Instagram Item */}
            <div className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-2xl border border-slate-800">
              <div className="relative">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center blur-[1px]">
                  <Instagram className="w-6 h-6 text-purple-500/40" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-rose-600 rounded-full border-2 border-[#0B1120] text-[10px] font-bold flex items-center justify-center text-white">
                  3
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-black text-white uppercase tracking-wider">Instagram Activity</p>
                <p className="text-[10px] text-slate-500 font-mono">3 Hidden Profiles Interacted</p>
              </div>
              <Lock className="w-4 h-4 text-slate-700" />
            </div>

            {/* Dating App Item */}
            <div className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-2xl border border-rose-900/30 shadow-[0_0_20px_rgba(244,63,94,0.05)]">
              <div className="relative">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center blur-[1px]">
                  <Heart className="w-6 h-6 text-rose-500/40" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-rose-600 rounded-full border-2 border-[#0B1120] text-[10px] font-bold flex items-center justify-center text-white animate-pulse">
                  !
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-black text-rose-400 uppercase tracking-widest">Dating Network</p>
                <p className="text-[10px] text-rose-200/50 font-mono">ACTIVE PROFILE DETECTED</p>
              </div>
              <Lock className="w-4 h-4 text-rose-800" />
            </div>
          </div>
        </section>

        {/* Aggressive Testimonial */}
        <section className="relative px-4 py-8 rounded-3xl bg-gradient-to-br from-slate-900 to-[#0B1120] border border-slate-800 animate-in fade-in duration-1000 delay-500">
           <div className="flex justify-center mb-6">
             <div className="w-16 h-16 rounded-full border-2 border-rose-500 p-0.5">
               <img src="/images/remarketing/michelle.png" alt="User" className="w-full h-full object-cover rounded-full" />
             </div>
           </div>
           <p className="text-lg font-medium text-slate-200 text-center italic leading-relaxed px-2">
             "I suspected something was happening on IG, but I couldn't prove it. The report showed me **deleted dm logs** I would never have found otherwise. Uncovering the truth was painful, but living a lie was worse."
           </p>
           <div className="text-center mt-6">
              <p className="font-bold text-white text-sm">Michelle, 35</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                 <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                 <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest">REAL CASE • USA</span>
              </div>
           </div>
        </section>

        {/* Modified Protocols (Focus on Social/Recovery) */}
        <section className="grid grid-cols-1 gap-8 pt-6">
          {[
            {
              title: "DELETED MSG RECOVERY",
              desc: "Restore logs of 'archived' and 'permanently deleted' conversations from 50+ chat apps using server-side metadata scrapers.",
              icon: Trash2
            },
            {
              title: "HIDDEN PROFILE FINDER",
              desc: "Identify 'Ghost Accounts' linked to the same IP or device fingerprint, even if they use fake names.",
              icon: EyeOff
            },
            {
              title: "PRIVATE MEDIA SCRAPER",
              desc: "Access cached thumbnails of photos and videos exchanged in private galleries and 'vanish mode' chats.",
              icon: Database
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 animate-in fade-in delay-700">
               <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-inner">
                 <item.icon className="w-7 h-7 text-rose-500" />
               </div>
               <div className="space-y-2">
                  <h4 className="text-[12px] font-black tracking-widest text-white uppercase">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed max-w-[280px]">
                    {item.desc}
                  </p>
               </div>
            </div>
          ))}
        </section>

        {/* Mobile Mockup (Rotate other way for variety) */}
        <section className="relative pt-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"></div>
          <div className="relative z-10 mx-auto max-w-[260px] shadow-[0_0_80px_rgba(244,63,94,0.15)] rounded-[3rem] border-[10px] border-slate-900 overflow-hidden transform rotate-[3deg]">
            <img src="/images/remarketing/scanner.png" alt="Evidence Preview" className="w-full h-auto opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-6">
               <div className="bg-rose-600 text-white text-[8px] font-black px-2 py-1 rounded inline-block w-fit mb-2">EVIDENCE READY</div>
               <p className="text-[10px] text-white font-bold leading-tight">View deep web search results for social accounts.</p>
            </div>
          </div>
        </section>

        {/* Final Convincing CTA */}
        <section className="text-center space-y-10 pb-20">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-xs text-slate-600 italic">Special Remarketing Offer</span>
            <div className="flex items-baseline gap-2">
              <span className="text-slate-500 line-through text-lg font-bold">$37</span>
              <span className="text-8xl font-black text-white tracking-tighter">$27</span>
            </div>
            <div className="bg-rose-500/10 border border-rose-500/30 px-3 py-1 rounded-full">
               <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em]">60% SAVINGS APPLIED</span>
            </div>
          </div>

          <div className="space-y-6">
            <a 
              href={checkoutLink}
              className="group relative block w-full bg-rose-600 hover:bg-rose-500 text-white font-black py-7 rounded-[2rem] shadow-[0_25px_50px_rgba(225,29,72,0.4)] transition-all transform hover:scale-[1.03] active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 text-xl uppercase tracking-[0.15em] flex items-center justify-center gap-3">
                SEE THE TRUTH NOW <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>

            <div className="space-y-4">
              <div className="flex flex-col items-center gap-2 opacity-50">
                 <p className="text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase">
                   BANK-GRADE ENCRYPTION • 100% PRIVATE
                 </p>
                 <div className="flex gap-4">
                   <ShieldCheck className="w-4 h-4" />
                   <Lock className="w-4 h-4" />
                   <Fingerprint className="w-4 h-4" />
                 </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-900">
                 <Clock className="w-5 h-5 text-rose-500 animate-[spin_10s_linear_infinite]" />
                 <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-left">EVIDENCE LOCKING IN</p>
                    <p className="font-mono text-2xl text-white font-bold leading-none">{formatTime(timeLeft)}</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 animate-in slide-in-from-bottom-10 h-16 origin-bottom">
         <a 
           href={checkoutLink}
           className="flex items-center justify-between bg-white text-[#0B1120] font-black px-6 h-full rounded-2xl shadow-2xl hover:bg-slate-100 transition-colors"
         >
           <span className="uppercase tracking-widest text-sm pt-0.5">Reveal Secret Activity</span>
           <Zap className="w-5 h-5 fill-[#0B1120] animate-pulse" />
         </a>
      </div>

    </div>
  )
}
