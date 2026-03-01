export const languages = {
  de: 'Deutsch',
  en: 'English',
};

export const defaultLang = 'de';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export const ui = {
  de: {
    'title': 'Kauf mir einen Spezi',
    'description': 'Kauf Keyruu / Lucas einen Spezi und mach ihn damit verdammt glücklich.',
    'tagLine': 'oder flüssiges',
    'gold': 'Gold',
    'cheesy': `Das Benzin für meinen Motor. Das Öl für meine Kette. Der Treibstoff für meine Seele.
        Kauf mir eine (oder mehrere) und ich bin glücklich. Bitte.`,
    'paypal': 'Kauf mir Spezi',
    'madeBy': 'Erstellt von ',
    'website': 'Webseite',
    'imprint': 'Impressum',
  },
  en: {
    'title': 'Buy me a Spezi',
    'description': 'Buy Keyruu / Lucas a Spezi and make him damn happy with it.',
    'tagLine': 'or liquid',
    'gold': 'Gold',
    'cheesy': `The gasoline for my engine. The oil for my chain. The fuel for my soul.
        Buy me one (or more) and I'll be happy. Please.`,
    'paypal': 'Buy me Spezi',
    'madeBy': 'Made by ',
    'website': 'Website',
    'imprint': 'Imprint',
  },
} as const;
