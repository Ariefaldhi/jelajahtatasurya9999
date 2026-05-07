import React, { useState } from 'react'

function App() {
  // Stages: 'hero', 'menu', 'materi', 'kuis'
  const [stage, setStage] = useState('hero')
  const [answerStatus, setAnswerStatus] = useState(null) // null, 'correct', 'wrong'

  const resetStage = () => {
    setStage('menu')
    setAnswerStatus(null)
  }

  const checkAnswer = (choice) => {
    if (choice === 'Jupiter') {
      setAnswerStatus('correct')
    } else {
      setAnswerStatus('wrong')
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#050b18] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background stars effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-150"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
      </div>

      <div className="max-w-md w-full z-10">
        
        {/* SECTION: HERO */}
        {stage === 'hero' && (
          <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
            <h1 className="text-5xl font-black tracking-tight leading-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Jelajah Tata Surya
            </h1>
            <p className="text-gray-400 text-lg">
              Mari berpetualang menembus cakrawala dan temukan rahasia luar biasa di balik planet-planet tetangga kita!
            </p>
            <button
              onClick={() => setStage('menu')}
              className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-xl shadow-[0_0_25px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Mulai Belajar
            </button>
          </div>
        )}

        {/* SECTION: MENU (Baca Materi / Kuis) */}
        {(stage === 'menu' || stage === 'materi' || stage === 'kuis') && (
          <div className="space-y-6">
            
            {/* Stage Title for context */}
            <div className="text-center mb-8">
               <h2 className="text-2xl font-bold text-gray-300">Penjelajahan Dimulai</h2>
            </div>

            {/* Stage Buttons - Only show if not in sub-stage or show as navigation */}
            {stage === 'menu' && (
              <div className="flex flex-row space-x-4 animate-in slide-in-from-bottom-5 duration-300">
                <button
                  onClick={() => setStage('materi')}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-bold text-lg border-b-4 border-blue-800 active:border-b-0 active:translate-y-1 transition-all"
                >
                  📖 Baca Materi
                </button>
                <button
                  onClick={() => setStage('kuis')}
                  className="flex-1 bg-purple-600 hover:bg-purple-500 py-4 rounded-2xl font-bold text-lg border-b-4 border-purple-800 active:border-b-0 active:translate-y-1 transition-all"
                >
                  ❓ Kuis
                </button>
              </div>
            )}

            {/* SECTION: BACA MATERI (Jupiter Card) */}
            {stage === 'materi' && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-10 duration-500">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-600 relative flex items-center justify-center">
                  <div className="text-8xl">🪐</div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-bold text-yellow-400">Jupiter</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Jupiter adalah <strong>planet terbesar</strong> di Tata Surya kita. Begitu besarnya, sehingga semua planet lain bisa dimasukkan ke dalamnya! 
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Planet ini adalah raksasa gas yang tidak memiliki permukaan padat, dan terkenal dengan "Bintik Merah Besar"-nya yang merupakan badai raksasa.
                  </p>
                  <button
                    onClick={() => setStage('menu')}
                    className="w-full mt-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-colors border border-white/10"
                  >
                    Kembali ke Menu
                  </button>
                </div>
              </div>
            )}

            {/* SECTION: KUIS */}
            {stage === 'kuis' && (
              <div className="bg-slate-800/80 backdrop-blur-md border border-blue-500/30 p-8 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-left-10 duration-500 text-center">
                <div className="mb-6">
                  <div className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold uppercase mb-4 tracking-wider">
                    Pertanyaan Cepat
                  </div>
                  <h3 className="text-2xl font-bold">Apakah planet terbesar di tata surya kita?</h3>
                </div>

                <div className="space-y-3">
                  <button
                    disabled={answerStatus !== null}
                    onClick={() => checkAnswer('Bumi')}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg border border-white/10 transition-all 
                      ${answerStatus === 'wrong' ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-white/5 hover:bg-white/10'}
                      ${answerStatus === 'correct' ? 'opacity-50' : ''}
                    `}
                  >
                    🌍 A. Bumi
                  </button>
                  <button
                    disabled={answerStatus !== null}
                    onClick={() => checkAnswer('Jupiter')}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg border border-white/10 transition-all
                      ${answerStatus === 'correct' ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-white/5 hover:bg-white/10'}
                      ${answerStatus === 'wrong' ? 'opacity-50' : ''}
                    `}
                  >
                    🪐 B. Jupiter
                  </button>
                </div>

                {answerStatus && (
                  <div className="mt-8 animate-in fade-in slide-in-from-bottom-2">
                    <p className={`text-xl font-bold ${answerStatus === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
                      {answerStatus === 'correct' ? '✨ Hebat! Kamu Benar!' : '🚀 Hampir tepat! Coba lagi ya.'}
                    </p>
                    <button
                      onClick={resetStage}
                      className="mt-4 text-blue-400 hover:text-blue-300 underline font-medium"
                    >
                      Coba Menu Lain
                    </button>
                  </div>
                )}
                
                {!answerStatus && (
                  <button
                    onClick={() => setStage('menu')}
                    className="mt-8 text-gray-500 hover:text-gray-400 text-sm underline"
                  >
                    Nanti saja, kembali ke menu
                  </button>
                )}
              </div>
            )}

          </div>
        )}

        {/* FOOTER */}
        <div className="mt-12 text-center text-gray-600 text-xs uppercase tracking-[0.2em]">
          Media Pembelajaran Interaktif &bull; 2024
        </div>

      </div>
    </div>
  )
}

export default App
