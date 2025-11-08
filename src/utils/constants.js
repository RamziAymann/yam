// src/utils/constants.js
export const CATEGORIES = [
  {
    icon: '⚡',
    title: 'Énergie',
    description: 'Comparez les offres d\'électricité et de gaz pour réduire vos factures mensuelles.',
    link: '#energie'
  },
  {
    icon: '📱',
    title: 'Box & Mobile',
    description: 'Trouvez les forfaits internet et mobile les plus avantageux du marché.',
    link: '#box-mobile'
  },
  {
    icon: '💰',
    title: 'Finance',
    description: 'Comparez les services bancaires, assurances et crédits pour optimiser vos finances.',
    link: '#finance'
  },
  {
    icon: '🏠',
    title: 'Immobilier',
    description: 'Comparez les offres immobilières et les services associés pour votre projet.',
    link: '#immobilier'
  }
];

export const STEPS = [
  {
    number: 1,
    title: 'Choisissez une catégorie',
    description: 'Sélectionnez le type de service que vous recherchez parmi nos différentes catégories.'
  },
  {
    number: 2,
    title: 'Répondez aux questions',
    description: 'Indiquez vos besoins spécifiques pour que nous puissions vous proposer des offres personnalisées.'
  },
  {
    number: 3,
    title: 'Comparez et choisissez',
    description: 'Visualisez toutes les offres disponibles et sélectionnez celle qui correspond le mieux à vos critères.'
  }
];

export const TESTIMONIALS = [
  {
    text: "Grâce à ce comparateur, j'ai économisé 30% sur ma facture d'électricité. Le processus est simple et les résultats sont impressionnants.",
    author: "Amadou Konaté",
    location: "Ouagadougou",
    initials: "AK"
  },
  {
    text: "Je cherchais un nouveau forfait mobile et j'ai trouvé exactement ce qu'il me fallait en quelques minutes. Service très utile !",
    author: "Fatimata Sawadogo",
    location: "Bobo-Dioulasso",
    initials: "FS"
  },
  {
    text: "Comparer les services financiers n'a jamais été aussi simple. J'ai pu trouver une assurance adaptée à mon budget rapidement.",
    author: "Boubacar Sanou",
    location: "Koudougou",
    initials: "BS"
  }
];

export const FOOTER_LINKS = {
  categories: [
    { name: 'Énergie', href: '#energie' },
    { name: 'Box & Mobile', href: '#box-mobile' },
    { name: 'Finance', href: '#finance' },
    { name: 'Immobilier', href: '#immobilier' }
  ],
  about: [
    { name: 'Qui sommes-nous ?', href: '#qui-sommes-nous' },
    { name: 'Comment ça marche', href: '#comment-ca-marche' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ],
  legal: [
    { name: 'Politique de confidentialité', href: '#confidentialite' },
    { name: 'Cookies', href: '#cookies' },
    { name: 'Conditions d\'utilisation', href: '#conditions' },
    { name: 'Mentions légales', href: '#mentions-legales' }
  ]
};

export const NAVIGATION = [
  {
    name: 'Énergie',
    href: '#energie'
  },
  {
    name: 'Box & Mobile',
    href: '#box-mobile',
    submenu: [
      { name: 'Meilleure box internet', href: '#box-internet' },
      { name: 'Forfaits mobile', href: '#forfaits-mobile' },
      { name: 'Fibre optique', href: '#fibre-optique' },
      { name: 'Comparatif box', href: '#comparatif-box' }
    ]
  },
  {
    name: 'Finance',
    href: '#finance'
  },
  {
    name: 'Immobilier',
    href: '#immobilier'
  }
];