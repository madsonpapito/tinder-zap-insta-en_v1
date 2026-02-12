"use client"

import { useState, useRef, useEffect } from "react"
import { CheckCircle, AlertTriangle, Lock, LockOpen, Heart, MessageCircle, Info } from "lucide-react"
import { useFacebookTracking } from "@/hooks/useFacebookTracking"

// ==========================================================
// DATA MOCKS (From previous u2m.html)
// ==========================================================

const defaultMatchesData = [
  { name: "Mila", age: 26, lastSeen: "6h ago", avatar: "/images/male/tinder/5.jpg", verified: true, identity: "Bisexual", distance: "2 km", bio: "Part dreamer, part doer, all about good vibes. Ready to make some memories?", zodiac: "Virgo", mbti: "KU", passion: "Coffee", interests: ["Hiking", "Green Living", "Live Music", "Pottery"] },
  { name: "John", age: 25, lastSeen: "4h ago", avatar: "/images/female/tinder/5.jpg", verified: true, identity: "Bisexual", distance: "2 km", bio: "Half adrenaline junkie, half cozy blanket enthusiast. What’s your vibe?", zodiac: "Leo", mbti: "BU", passion: "Fitness", interests: ["Meditation", "Books", "Wine", "Music"] },
  { name: "Harper", age: 21, lastSeen: "3h ago", avatar: "/images/male/tinder/3.jpg", verified: false, identity: "Woman", distance: "5 km", bio: "Just a girl who loves sunsets and long walks on the beach. Looking for someone to share adventures with.", zodiac: "Leo", mbti: "UVA", passion: "Yoga", interests: ["Travel", "Photography", "Podcasts"] },
  { name: "Will", age: 23, lastSeen: "2h ago", avatar: "/images/female/tinder/3.jpg", verified: true, identity: "Man", distance: "8 km", bio: "Fluent in sarcasm and movie quotes. Let's find the best pizza place in town.", zodiac: "Gemini", mbti: "OHY", passion: "Baking", interests: ["Concerts", "Netflix", "Dogs"] }
]

const femaleMatchesData = [
  { name: "Elizabeth", age: 24, lastSeen: "1h ago", avatar: "/images/male/tinder/1.jpg", verified: true, identity: "Woman", distance: "3 km", bio: "Seeking new adventures and a great cup of coffee. Let's explore the city together.", zodiac: "Aries", mbti: "ENFP", passion: "Traveling", interests: ["Art", "History", "Podcasts"] },
  { name: "Victoria", age: 27, lastSeen: "5h ago", avatar: "/images/male/tinder/2.jpg", verified: false, identity: "Woman", distance: "1 km", bio: "Bookworm and aspiring chef. Tell me about the last great book you read.", zodiac: "Taurus", mbti: "ISFJ", passion: "Cooking", interests: ["Reading", "Yoga", "Documentaries"] },
  { name: "Charlotte", age: 22, lastSeen: "Online", avatar: "/images/male/tinder/3.jpg", verified: true, identity: "Woman", distance: "6 km", bio: "Lover of live music and spontaneous road trips. What's our first destination?", zodiac: "Sagittarius", mbti: "ESFP", passion: "Music", interests: ["Concerts", "Photography", "Hiking"] },
  { name: "Emily", age: 25, lastSeen: "3h ago", avatar: "/images/male/tinder/4.jpg", verified: true, identity: "Woman", distance: "4 km", bio: "Fitness enthusiast who's equally happy on the couch with a good movie.", zodiac: "Virgo", mbti: "ISTJ", passion: "Fitness", interests: ["Movies", "Healthy Eating", "Dogs"] },
  { name: "Grace", age: 28, lastSeen: "8h ago", avatar: "/images/male/tinder/5.jpg", verified: false, identity: "Woman", distance: "7 km", bio: "Creative soul with a love for painting and poetry. Looking for meaningful conversations.", zodiac: "Pisces", mbti: "INFP", passion: "Art", interests: ["Museums", "Writing", "Coffee Shops"] },
  { name: "Olivia", age: 23, lastSeen: "2h ago", avatar: "/images/male/tinder/6.jpg", verified: true, identity: "Woman", distance: "2 km", bio: "Sarcasm is my second language. Let's find the best taco spot in town.", zodiac: "Gemini", mbti: "ENTP", passion: "Comedy", interests: ["Foodie", "Travel", "Stand-up"] }
]

const maleMatchesData = [
  { name: "William", age: 26, lastSeen: "Online", avatar: "/images/female/tinder/1.jpg", verified: true, identity: "Man", distance: "2 km", bio: "Engineer by day, musician by night. Let's talk about tech and tunes.", zodiac: "Capricorn", mbti: "INTJ", passion: "Guitar", interests: ["Technology", "Live Music", "Brewing"] },
  { name: "James", age: 29, lastSeen: "4h ago", avatar: "/images/female/tinder/2.jpg", verified: true, identity: "Man", distance: "5 km", bio: "Outdoors enthusiast looking for someone to hike with. My dog will probably like you.", zodiac: "Leo", mbti: "ESTP", passion: "Hiking", interests: ["Camping", "Dogs", "Bonfires"] },
  { name: "Henry", age: 25, lastSeen: "1h ago", avatar: "/images/female/tinder/3.jpg", verified: false, identity: "Man", distance: "3 km", bio: "Film buff and history nerd. Can recommend a movie for any mood.", zodiac: "Cancer", mbti: "INFJ", passion: "Movies", interests: ["History", "Reading", "Chess"] },
  { name: "Oliver", age: 27, lastSeen: "6h ago", avatar: "/images/female/tinder/4.jpg", verified: true, identity: "Man", distance: "8 km", bio: "Just a guy who enjoys good food, good company, and exploring new places.", zodiac: "Libra", mbti: "ESFJ", passion: "Foodie", interests: ["Travel", "Cooking", "Sports"] },
  { name: "Thomas", age: 30, lastSeen: "2h ago", avatar: "/images/female/tinder/5.jpg", verified: true, identity: "Man", distance: "4 km", bio: "Trying to find someone who won't steal my fries. Kidding... mostly.", zodiac: "Scorpio", mbti: "ISTP", passion: "Traveling", interests: ["Photography", "Motorcycles", "Gym"] },
  { name: "Edward", age: 24, lastSeen: "7h ago", avatar: "/images/female/tinder/6.jpg", verified: false, identity: "Man", distance: "6 km", bio: "Fluent in sarcasm and bad jokes. Looking for a partner in crime.", zodiac: "Aquarius", mbti: "ENTP", passion: "Gaming", interests: ["Comedy", "Sci-Fi", "Concerts"] }
]

const defaultCensoredPhotos = ["/images/censored/photo1.jpg", "/images/censored/photo2.jpg", "/images/censored/photo3.jpg", "/images/censored/photo4.jpg"]
const femaleCensoredPhotos = ["/images/male/tinder/censored/censored-f-1.jpg", "/images/male/tinder/censored/censored-f-2.jpg", "/images/male/tinder/censored/censored-f-3.jpg", "/images/male/tinder/censored/censored-f-4.jpg"]
const maleCensoredPhotos = ["/images/female/tinder/censored/censored-h-1.jpg", "/images/female/tinder/censored/censored-h-2.jpg", "/images/female/tinder/censored/censored-h-3.jpg", "/images/female/tinder/censored/censored-h-4.jpg"]

// ==========================================================

export default function DatingScanner() {
  const [step, setStep] = useState(1)
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [imageUploaded, setImageUploaded] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [location, setLocation] = useState("your city")
  const [timeLeft, setTimeLeft] = useState(5 * 60)
  const [selectedMatch, setSelectedMatch] = useState<any | null>(null)

  const { trackEvent, trackInitiateCheckout } = useFacebookTracking()

  useEffect(() => {
    // Corrected location fetch
    fetch("/api/location")
      .then((res) => res.json())
      .then((data) => {
        if (data.city) setLocation(data.city)
      })
      .catch((err) => console.log("Location fetch error", err))
  }, [])

  useEffect(() => {
    if (step === 3 && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [step, timeLeft])

  const formatTime = (seconds: number) => {
    if (seconds <= 0) return "00:00"
    const m = Math.floor(seconds / 60).toString().padStart(2, "0")
    const s = (seconds % 60).toString().padStart(2, "0")
    return `${m}:${s}`
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        setImagePreview(ev.target?.result as string)
        setImageUploaded(true)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const startInvestigation = () => {
    setStep(2)

    // Tracking
    const userGender = selectedGender === 'male' ? 'female' : selectedGender === 'female' ? 'male' : undefined;
    trackEvent('ViewContent', { gender: userGender }, {
      content_name: 'Dating Analysis Started',
      content_category: 'Engagement',
      target_gender: selectedGender,
    });

    // Simulate Loading
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 500)

    setTimeout(() => {
      setStep(3)
    }, 4000)
  }

  const getActiveData = () => {
    if (selectedGender === 'male') return { matches: femaleMatchesData, photos: femaleCensoredPhotos }
    if (selectedGender === 'female') return { matches: maleMatchesData, photos: maleCensoredPhotos }
    return { matches: defaultMatchesData, photos: defaultCensoredPhotos }
  }

  const { matches, photos } = getActiveData()

  // --------------------------------------------------------
  // RENDER STEP 1: INPUT
  // --------------------------------------------------------
  const renderInputStep = () => (
    <div className="space-y-6 animate-fade-in w-full text-center">
      <p className="text-lg text-gray-800 pt-2">
        <span className="font-bold text-red-600">ATTENTION!</span> Our system has identified that this user is registered on dating apps. Use our image scanner to verify.
      </p>

      {/* Upload Box */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Upload Their Photo for Facial Recognition</h2>
        <label className="w-40 h-40 mx-auto flex items-center justify-center border-2 border-dashed border-blue-400 rounded-xl cursor-pointer hover:bg-blue-50 transition-colors relative overflow-hidden">
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          {imagePreview ? (
            <img src={imagePreview} className="w-full h-full object-cover absolute" />
          ) : (
            <div className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
            </div>
          )}
        </label>
        <p className="text-sm text-gray-500 mt-4">We'll scan across all dating platforms to find matching profiles - even ones they think are hidden.</p>
      </div>

      {/* Gender Selector */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">What gender are they?</h2>
        <div className="grid grid-cols-3 gap-4">
          {['male', 'female', 'non-binary'].map(g => (
            <button
              key={g}
              onClick={() => setSelectedGender(g)}
              className={`p-4 border rounded-xl transition-all duration-200 ${selectedGender === g ? 'border-blue-500 bg-blue-100 ring-2 ring-blue-300' : 'border-gray-200 hover:border-gray-400'}`}
            >
              <span className="text-4xl mb-2 block">{g === 'male' ? '👨🏻' : g === 'female' ? '👩🏻' : '🧑🏻'}</span>
              <span className="font-semibold text-gray-700 capitalize">{g.replace('-', ' ')}</span>
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          This helps us track their device activity and cross-reference with dating app usage patterns.
        </p>
      </div>

      <button
        onClick={startInvestigation}
        disabled={!imageUploaded || !selectedGender}
        className="w-full text-white font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed bg-red-600 hover:bg-red-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        <span>START INVESTIGATION - FIND THE TRUTH</span>
      </button>
    </div>
  )

  // --------------------------------------------------------
  // RENDER STEP 2: LOADING
  // --------------------------------------------------------
  const renderLoadingStep = () => (
    <div className="text-center animate-fade-in space-y-4 py-10">
      <div className="mx-auto w-16 h-16 animate-spin text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800">Searching...</h2>
      <p className="text-gray-600">Cross-referencing image with millions of profiles.<br />This may take a moment.</p>
    </div>
  )

  // --------------------------------------------------------
  // RENDER STEP 3: RESULTS
  // --------------------------------------------------------
  const renderResultsStep = () => (
    <div className="space-y-4 animate-fade-in w-full text-left">

      {/* Alert Banners */}
      <div className="bg-red-600 text-white p-3 rounded-lg shadow-lg flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
        <div>
          <h1 className="font-bold text-base">PROFILE FOUND - THEY ARE ACTIVE ON TINDER</h1>
          <p className="text-xs text-red-200">Last seen: <span className="font-semibold">Online now</span></p>
        </div>
      </div>

      <div className="bg-orange-500 text-white p-3 rounded-lg shadow-lg flex items-center gap-3">
        <AlertTriangle className="w-6 h-6 shrink-0" />
        <p className="text-sm font-semibold">
          <span className="font-bold">ATTENTION: ACTIVE PROFILE FOUND!</span> We confirm this number is linked to an ACTIVE Tinder profile. Latest usage records detected in <span className="font-bold">{location}</span>.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-3 text-center">
        {[
          { val: 6, label: "MATCHES (7 DAYS)", color: "text-red-600" },
          { val: 30, label: "LIKES (7 DAYS)", color: "text-orange-500" },
          { val: 4, label: "ACTIVE CHATS", color: "text-purple-600" },
          { val: "18h", label: "LAST ACTIVE", color: "text-gray-800" },
        ].map((s, i) => (
          <div key={i} className="bg-white p-3 rounded-lg shadow-md">
            <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
            <p className="text-[10px] text-gray-500 font-semibold">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Matches List */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 text-white p-5 rounded-lg shadow-2xl">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.3.3.5.6.8.9.6.6 2 .9 2.1 2.9z" /></svg>
          <h2 className="text-lg font-bold">RECENT MATCHES FOUND</h2>
        </div>
        <p className="text-sm text-gray-400 mb-5">Tap on a match to view more information</p>
        <div className="space-y-4">
          {matches.map((m, i) => (
            <div key={i} onClick={() => setSelectedMatch(m)} className="flex items-center gap-4 bg-slate-700/50 p-3 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors">
              <img src={m.avatar} alt={m.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-600" onError={(e) => e.currentTarget.src = '/placeholder.svg'} />
              <div className="flex-grow">
                <p className="font-bold">{m.name}, {m.age}</p>
                <p className="text-xs text-gray-400">Last seen: {m.lastSeen}</p>
                <p className="text-xs font-semibold text-green-400">Active chat: frequently online</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Censored Photos Carousel */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 text-white p-5 rounded-lg shadow-2xl relative">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
          <h2 className="text-lg font-bold">CENSORED PHOTOS</h2>
        </div>
        <p className="text-sm text-gray-400 mb-4">See all their profile photos (including the ones you've never seen)</p>

        <div className="flex overflow-x-auto gap-2 scrollbar-hide snap-x">
          {photos.map((src, i) => (
            <div key={i} className="relative flex-[0_0_80%] aspect-video bg-gray-700 rounded-lg overflow-hidden snap-center">
              <img src={src} className="w-full h-full object-cover filter blur-md" onError={(e) => e.currentTarget.src = '/placeholder.svg'} />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <Lock className="w-8 h-8" />
                <span className="font-bold mt-1 text-sm tracking-widest">BLOCKED</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unlock Widget */}
      <div className="bg-white p-5 rounded-lg shadow-xl text-center">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center mb-4">
          <LockOpen className="text-white w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-gray-800"><span className="text-yellow-600">🔓</span> UNLOCK COMPLETE REPORT</h2>
        <p className="text-gray-600 mt-1">Get instant access to the full report with all the matches and photos exchanged</p>

        <div className="bg-red-100 border-2 border-red-500 text-red-800 p-4 rounded-lg mt-5 mb-5">
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="text-red-600 w-5 h-5" />
            <h3 className="font-bold">THE REPORT WILL BE DELETED IN:</h3>
          </div>
          <p className="text-4xl font-mono font-bold my-1">{formatTime(timeLeft)}</p>
          <p className="text-xs text-red-700">After the time expires, this report will be permanently deleted for privacy reasons. This offer cannot be recovered at a later date.</p>
        </div>

        {/* CHECKOUT BUTTON - Retained from original file */}
        <a
          href="https://pay.mycheckoutt.com/0198c1be-98b4-7315-a3bc-8c0fa9120e5c?ref="
          onClick={() => {
            const userGender = selectedGender === 'male' ? 'female' : selectedGender === 'female' ? 'male' : undefined;
            trackInitiateCheckout(37, 'USD', { gender: userGender });
          }}
          className="mt-6 block w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          🔓 YES, I WANT THE COMPLETE REPORT
        </a>
      </div>
    </div>
  )

  // --------------------------------------------------------
  // MATCH DETAIL MODAL
  // --------------------------------------------------------
  const renderMatchModal = () => {
    if (!selectedMatch) return null;
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={() => setSelectedMatch(null)}>
        <div className="bg-white rounded-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setSelectedMatch(null)} className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
          </button>
          <img src={selectedMatch.avatar} alt="Match" className="w-full h-80 object-cover rounded-t-2xl" />
          <div className="p-5 text-left">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold text-gray-800">{selectedMatch.name}</h1>
              {selectedMatch.verified && <CheckCircle className="text-blue-500 w-7 h-7" fill="white" />}
            </div>
            <div className="flex flex-col gap-1 text-gray-600 mt-2 text-sm">
              <div className="flex items-center gap-1.5"><p>{selectedMatch.identity}</p></div>
              <div className="flex items-center gap-1.5"><p>Lives in {location}</p></div>
              <div className="flex items-center gap-1.5"><p>📍 {selectedMatch.distance} away</p></div>
            </div>
            <div className="mt-6">
              <h2 className="font-bold text-gray-800">About Me</h2>
              <p className="text-gray-600 mt-1">{selectedMatch.bio}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              {[selectedMatch.zodiac, selectedMatch.mbti, selectedMatch.passion].map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <div className="mt-6">
              <h2 className="font-bold text-gray-800">My Interests</h2>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {selectedMatch.interests.map((int: string, i: number) => (
                  <span key={i} className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full">{int}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 grid grid-cols-2 gap-4 bg-white p-4 border-t border-gray-200">
            <button onClick={() => setSelectedMatch(null)} className="bg-gray-200 text-gray-800 font-bold py-3 rounded-full hover:bg-gray-300 transition-colors">Pass</button>
            <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 rounded-full hover:opacity-90 transition-opacity">Like</button>
          </div>
        </div>
      </div>
    )
  }

  // --------------------------------------------------------
  // MAIN RENDER
  // --------------------------------------------------------
  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <main className="w-full max-w-md mx-auto">
        {step === 1 && renderInputStep()}
        {step === 2 && renderLoadingStep()}
        {step === 3 && renderResultsStep()}
      </main>
      <footer className="py-4 mt-4">
        <p className="text-xs text-gray-500">© 2024. All rights reserved.</p>
      </footer>
      {renderMatchModal()}
    </div>
  )
}
