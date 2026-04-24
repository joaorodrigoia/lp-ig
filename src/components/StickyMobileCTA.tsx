import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/content';

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > window.innerHeight * 0.55);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          {/* Frosted border top */}
          <div className="border-t border-gold/20 bg-bg/90 backdrop-blur-xl px-4 py-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-sweep relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gold-gradient py-4 text-base font-semibold text-bg shadow-gold-glow active:scale-[0.97] transition-transform duration-150"
              aria-label="Abrir conversa no WhatsApp"
            >
              <MessageCircle className="h-5 w-5 flex-none" />
              <span>Falar no WhatsApp</span>
              {/* Online dot */}
              <span className="relative flex h-2.5 w-2.5 flex-none">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
