"use client"

import { useState, useEffect } from "react"
import { 
  CheckCircle2, ShieldCheck, Lock, Search, AlertTriangle, 
  Clock, Ghost, Fingerprint, Database, Zap, ArrowRight 
} from "lucide-react"
import Image from "next/image"

export default function RemarketingResultsPage() {
  const [timeLeft, setTimeLeft] = useState(420) // 7 minutes
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
    <div className="min-h-screen bg-[#0B1120] text-slate-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* 100% Complete Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-emerald-500 h-8 flex items-center justify-center relative overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-emerald-400 transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
          <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B1120]">
            100% COMPLETE
          </span>
        </div>
      </div>

      <main className="pt-16 pb-32 px-4 max-w-md mx-auto space-y-12">
        
        {/* Main Headline */}
        <section className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
            WAIT! YOUR <br />
            <span className="text-emerald-400">SCAN IS 100%</span> <br />
            COMPLETE.
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Your result is ready, but your session is about to expire.
          </p>
        </section>

        {/* Discount Badge */}
        <div className="flex justify-center animate-in zoom-in duration-1000 delay-300">
          <div className="bg-emerald-500/10 border border-emerald-500/50 px-6 py-2 rounded-full flex items-center gap-2 group hover:bg-emerald-500/20 transition-all">
            <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400 animate-pulse" />
            <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest leading-none pt-0.5">
              $10 DISCOUNT APPLIED: ONLY <span className="text-white">$27</span>
            </span>
          </div>
        </div>

        {/* Social Proof Stats */}
        <section className="text-center space-y-6 animate-in fade-in duration-1000 delay-500">
          <h2 className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
            WHY 5,000+ PEOPLE CHOSE CLARITY THIS WEEK
          </h2>
          <div className="flex -space-x-2 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B1120] bg-slate-800 overflow-hidden">
                <img 
                  src={`/images/female/tinder/${i + 2}.jpg`} 
                  alt="user" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/remarketing/michelle.png";
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Quote */}
        <section className="relative bg-slate-900/50 border border-slate-800 p-8 rounded-3xl space-y-6 overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700 delay-700">
          <div className="absolute top-4 right-6 opacity-10">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 8.89543 14.017 10V13H11.017V10C11.017 7.23858 13.2556 5 16.017 5H19.017C20.1216 5 21.017 5.89543 21.017 7V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 8.89543 3.017 10V13H0.017V10C0.017 7.23858 2.25558 5 5.017 5H8.017C9.12157 5 10.017 5.89543 10.017 7V15C10.017 18.3137 7.33044 21 4.017 21H3.017Z"/></svg>
          </div>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
          </div>
          <p className="text-lg md:text-xl font-medium text-slate-200 text-center leading-relaxed">
            "I was terrified he'd find out. I was wrong. 5 minutes later, I had the dossier. He had a hidden IG just to follow his ex."
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-emerald-500 p-0.5">
              <img src="/images/remarketing/michelle.png" alt="Michelle" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="text-center">
              <p className="font-bold text-white text-sm">Michelle, 35</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Verified User • 2 Hours Ago</p>
            </div>
          </div>
        </section>

        {/* Feature Checkmarks */}
        <section className="grid grid-cols-1 gap-3">
          {[
            { label: "REAL-TIME DATA", icon: Zap },
            { label: "VERIFIED RESULTS", icon: CheckCircle2 },
            { label: "100% ANONYMOUS", icon: ShieldCheck }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800/80 p-5 rounded-2xl flex items-center gap-4 group hover:border-emerald-500/30 transition-all">
              <div className="bg-emerald-500/10 p-2 rounded-lg">
                <item.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-[11px] font-black tracking-widest text-slate-300 group-hover:text-white transition-colors uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </section>

        {/* Forensic Protocols */}
        <section className="space-y-12">
          <div className="text-center">
            <h3 className="text-[10px] font-black tracking-[0.4em] text-slate-600 uppercase">
              FORENSIC PROTOCOLS ENABLED
            </h3>
          </div>

          {[
            {
              title: "GHOST PROTOCOL",
              desc: "Zero footprints left. No app installation required. Complete digital invisibility during and after scan.",
              icon: Ghost
            },
            {
              title: "DEEP METADATA EXTRACTION",
              desc: "Expose hidden Tinder accounts and indirect cloud records using our proprietary scrapers.",
              icon: Database
            },
            {
              title: "LEGAL & SECURE ACCESS",
              desc: "Direct proprietary API access for legal metadata retrieval. 256-bit bank encryption.",
              icon: Lock
            }
          ].map((item, idx) => (
            <div key={idx} className="text-center space-y-4 animate-in fade-in delay-[1000ms] duration-1000">
              <div className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-xl mx-auto flex items-center justify-center">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-black tracking-widest text-white uppercase">{item.title}</h4>
                <p className="text-[11px] text-slate-500 mt-2 max-w-[280px] mx-auto leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Scanner Mockup Illustration */}
        <section className="relative py-12">
          <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full"></div>
          <div className="relative z-10 mx-auto max-w-[280px] shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[3rem] border-[8px] border-slate-800 overflow-hidden transform rotate-[-2deg]">
            <img src="/images/remarketing/scanner.png" alt="Scanner App" className="w-full h-auto" />
          </div>
        </section>

        {/* Final Price Block */}
        <section className="text-center space-y-8 pb-12">
          <div className="space-y-1">
            <span className="text-sm text-slate-500 line-through">$37</span>
            <div className="flex items-center justify-center gap-4">
              <span className="text-7xl font-black text-white tracking-tighter">$27</span>
              <div className="bg-rose-500 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest animate-pulse">
                TODAY ONLY
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <a 
              href={checkoutLink}
              className="group relative block w-full bg-emerald-500 hover:bg-emerald-400 text-[#0B1120] font-black py-6 rounded-3xl shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all transform hover:scale-[1.02] active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 text-lg uppercase tracking-widest flex items-center justify-center gap-2">
                UNLOCK REPORT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>

            <div className="flex flex-col items-center gap-3">
              <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase flex items-center gap-2">
                <Lock className="w-3 h-3 text-emerald-500" /> SECURE 256-BIT ENCRYPTED CHECKOUT
              </p>
              <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-crosshair">
                <img src="/images/secure-payment-badge.png" alt="Visa" className="h-4" />
                <img src="/images/secure-payment-badge2.png" alt="MC" className="h-4" />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-rose-500">
               <Clock className="w-4 h-4 animate-spin-slow" />
               <p className="text-xs font-bold uppercase tracking-widest">
                 OFFER EXPIRES IN: <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
               </p>
            </div>
          </div>
        </section>

      </main>

      {/* Sticky Bottom Footer (Optional but good for mobile) */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-[#0B1120]/80 backdrop-blur-xl border-t border-slate-800 z-40 transform translate-y-0 transition-transform md:hidden">
         <a 
           href={checkoutLink}
           className="block w-full bg-emerald-500 text-[#0B1120] font-black py-4 rounded-2xl text-center uppercase tracking-widest text-xs shadow-lg"
         >
           Check Secret Activity Now
         </a>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
