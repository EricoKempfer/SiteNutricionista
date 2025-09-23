// Arquivo para configuração do Google Analytics e Search Console
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Google Analytics ID
export const GA_TRACKING_ID = 'G-92GX47LHHY'; // Substitua pelo seu ID

// Google Search Console
export const GOOGLE_SITE_VERIFICATION = 'vO3xBDukAEKKJtesPCusU52j2v1Mfcwbz_B3m4gFSZ8'; // Substitua pela sua verificação

// Função para rastrear page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Função para rastrear eventos
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Hook para rastrear mudanças de rota
export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

// Eventos específicos para o site da nutricionista
export const trackConsultationClick = () => {
  event({
    action: 'click',
    category: 'Consultation',
    label: 'WhatsApp Button',
  });
};

export const trackSocialMediaClick = (platform) => {
  event({
    action: 'click',
    category: 'Social Media',
    label: platform,
  });
};

export const trackSectionView = (section) => {
  event({
    action: 'view',
    category: 'Section',
    label: section,
  });
};
