function Footer() {
  return (
    <footer className="py-6 md:py-8 px-4 border-t border-cyan-500/10">
      <div className="max-w-4xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 md:mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center border border-cyan-500/30">
              <span className="text-cyan-400 font-orbitron font-bold text-xs md:text-sm">N</span>
            </div>
            <span className="font-orbitron text-sm md:text-base text-cyan-100">$NEURO</span>
          </div>

          {/* Contract address */}
          <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-black/40 rounded-lg border border-cyan-500/10">
            <span className="text-[10px] md:text-xs text-gray-500">CA:</span>
            <code className="text-[10px] md:text-xs text-cyan-400/80 font-mono">0x...coming soon</code>
          </div>

          {/* Network badge */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-[8px] md:text-[10px] font-bold">B</span>
            </div>
            <span className="text-xs md:text-sm text-gray-400">Built on Base</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] md:text-xs text-gray-600 text-center mb-4 md:mb-6 max-w-xl mx-auto">
          $NEURO is a meme token with no intrinsic value or expectation of financial return.
          Always do your own research. NFA.
        </p>

        {/* Attribution footer */}
        <div className="text-center pt-4 md:pt-6 border-t border-cyan-500/5">
          <p className="text-[10px] md:text-xs text-gray-600">
            Requested by{' '}
            <a
              href="https://x.com/neuroaibase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              @neuroaibase
            </a>
            {' '}·{' '}
            Built by{' '}
            <a
              href="https://x.com/clonkbot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              @clonkbot
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
