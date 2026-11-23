export type Language = 'ka' | 'en';
export type GalleryCategory = 'all' | 'interior' | 'exterior';
export type MenuTab = 'both' | 'buffet' | 'sweet';

export interface LocalizedText {
  ka: string;
  en: string;
}

export interface MenuItemData {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
}

export interface GalleryPhotoItem {
  id: string;
  src: string;
}

export interface FaqItemData {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export const FEATURED_LOGO_URL = 'https://i.postimg.cc/JzJ6T3Y4/Main-Logo-Vertical-SVG.png';

export const CONTACT_LINKS = {
  phoneDisplay: '+995 591 437 711',
  phoneHref: 'tel:+995591437711',
  locationHref: 'https://maps.app.goo.gl/XoTxB6m78HbqYgKE6',
  facebookHref: 'https://www.facebook.com/share/1JBJiM9b6n/?mibextid=wwXIfr',
  instagramHref: 'https://www.instagram.com/chaletbulachauri?jplx=MTllb2ZjOXRkYW50Yg==',
  tiktokHref: 'https://www.tiktok.com/@chaletbulachauri?_r=1&_t=ZS-9BcbAZltcm4',
  whatsappHref: 'https://wa.me/995591437711',
};

export const UI_COPY = {
  navAriaLabel: {
    ka: 'მთავარი ნავიგაცია',
    en: 'Main Navigation',
  },
  navLabels: {
    home: { ka: 'მთავარი', en: 'Home' },
    about: { ka: 'ჩვენ შესახებ', en: 'About Us' },
    gallery: { ka: 'გალერეა', en: 'Gallery' },
    menu: { ka: 'მენიუ', en: 'Menu' },
    faq: { ka: 'FAQ', en: 'FAQ' },
    contact: { ka: 'კონტაქტი', en: 'Contact' },
  },
  logoFallback: {
    ka: 'ლოგო მიუწვდომელია',
    en: 'Logo preview unavailable',
  },
  about: {
    heading: { ka: 'ჩვენ შესახებ', en: 'About Us' },
    photoAlt: { ka: 'ხის შალე წიწვოვან ტყეში', en: 'Timber chalet nestled in a pine forest' },
    photoFallback: { ka: 'შალეს ფოტო', en: 'Chalet Photo' },
    paragraphs: [
      {
        ka: 'შალე ბულაჩაური აერთიანებს სიმშვიდეს, პრემიუმ ხარისხს, სრულყოფილ მომსახურებასა და ბუნებრივ ელეგანტურობას. თითოეული დეტალი გააზრებულად არის შექმნილი, რათა სტუმრებს დახვეწილი, მყუდრო და განსაკუთრებული ატმოსფერო შეუქმნას, სადაც კომფორტი, ესთეტიკა და ბუნებრივი სილამაზე ჰარმონიულად ერწყმის ერთმანეთს.',
        en: 'Chalet Bulachauri unites tranquility, premium quality, impeccable service, and natural elegance. Every detail is thoughtfully crafted to offer guests a refined, welcoming, and extraordinary atmosphere where comfort, aesthetics, and natural beauty exist in complete harmony.',
      },
      {
        ka: 'ეს არის სივრცე განსაკუთრებული შეხვედრებისთვის, მნიშვნელოვანი დღეებისა და დაუვიწყარი მომენტებისთვის. გარემო, სადაც მაღალი ხარისხის მომსახურება, ბუნებრივი ელეგანტურობა და გამორჩეული ატმოსფერო ერთიანდება, რათა თითოეული სტუმრობის გამოცდილება განსაკუთრებული გახდეს.',
        en: 'It is a destination for meaningful gatherings, milestone celebrations, and unforgettable moments — a setting where elevated service, natural elegance, and a distinctive atmosphere come together to make every visit truly memorable.',
      },
    ],
    tagline: {
      ka: 'შალე ბულაჩაური განსაკუთრებული მომენტებისთვის',
      en: 'Chalet Bulachauri — For Special Moments',
    },
  },
  gallery: {
    heading: { ka: 'გალერეა', en: 'Gallery' },
    openPrefix: { ka: 'ფოტოს გახსნა', en: 'Open photo' },
    photoAltPrefix: { ka: 'შალე ბულაჩაური — ფოტო', en: 'Chalet Bulachauri — Photo' },
    close: { ka: 'დახურვა', en: 'Close' },
    prev: { ka: 'წინა ფოტო', en: 'Previous photo' },
    next: { ka: 'შემდეგი ფოტო', en: 'Next photo' },
    prevPage: { ka: 'წინა გვერდი', en: 'Previous page' },
    nextPage: { ka: 'შემდეგი გვერდი', en: 'Next page' },
    pageAriaPrefix: { ka: 'გვერდი', en: 'Page' },
  },
  menu: {
    heading: { ka: 'მენიუ', en: 'Menu' },
    buffetHeading: { ka: 'ფურშეტის მენიუ', en: 'Buffet Menu' },
    sweetHeading: { ka: 'ტკბილი მენიუ', en: 'Sweet Menu' },
    viewFullMenu: { ka: 'სრული მენიუს ნახვა', en: 'View Full Menu' },
    closeModal: { ka: 'დახურვა', en: 'Close' },
  },
  faq: {
    heading: { ka: 'FAQ', en: 'FAQ' },
  },
  contact: {
    heading: { ka: 'კონტაქტი', en: 'Contact' },
    phoneLabel: { ka: 'ტელეფონის ნომერი', en: 'Phone Number' },
    copyPhoneAria: { ka: 'ნომრის კოპირება', en: 'Copy phone number' },
    locationEyebrow: { ka: 'ლოკაცია', en: 'Location' },
    locationTitle: { ka: 'შალეს მდებარეობა', en: 'Chalet Location' },
    locationAction: { ka: 'რუკაზე გახსნა', en: 'Open on Map' },
    socialsLabel: { ka: 'სოციალური ქსელები', en: 'Social Networks' },
    socialHandles: {
      facebook: { ka: 'Facebook გვერდი', en: 'Facebook Page' },
      instagram: { ka: 'Instagram გვერდი', en: 'Instagram Page' },
      tiktok: { ka: 'TikTok გვერდი', en: 'TikTok Page' },
      whatsapp: { ka: 'პირდაპირი მიწერა', en: 'Direct Message' },
    },
  },
  languageToggleAria: {
    ka: 'ენის შეცვლა ინგლისურზე',
    en: 'Switch language to Georgian',
  },
  mobileActions: {
    readMore: { ka: 'ვრცლად ნახვა', en: 'Read More' },
    viewAllPhotos: { ka: 'ყველა ფოტოს ნახვა', en: 'View All Photos' },
    viewAllFaq: { ka: 'ყველა კითხვის ნახვა', en: 'View All Questions' },
    viewAllContact: { ka: 'საკონტაქტო ინფორმაცია', en: 'All Contact Details' },
    close: { ka: 'დახურვა', en: 'Close' },
  },
} as const;

export const GALLERY_PHOTOS: GalleryPhotoItem[] = [
  { id: 'photo-1', src: 'https://i.postimg.cc/ZKbjthWW/1.png' },
  { id: 'photo-2', src: 'https://i.postimg.cc/85gBy88v/2.png' },
  { id: 'photo-3', src: 'https://i.postimg.cc/1tSwGp6L/18.png' },
  { id: 'photo-4', src: 'https://i.postimg.cc/SK6zxJ5j/3.png' },
  { id: 'photo-5', src: 'https://i.postimg.cc/FKV7QwdL/4.png' },
  { id: 'photo-6', src: 'https://i.postimg.cc/rsKmxmhv/5.png' },
  { id: 'photo-7', src: 'https://i.postimg.cc/654qQ84T/6.png' },
  { id: 'photo-8', src: 'https://i.postimg.cc/k5qgww1M/7.png' },
  { id: 'photo-9', src: 'https://i.postimg.cc/B6wZS3qm/8.png' },
  { id: 'photo-10', src: 'https://i.postimg.cc/wxZxn94B/9.png' },
  { id: 'photo-11', src: 'https://i.postimg.cc/cLMsKwx6/10.png' },
  { id: 'photo-12', src: 'https://i.postimg.cc/Ss5q0Gr2/11.png' },
  { id: 'photo-13', src: 'https://i.postimg.cc/WtcvzbxT/12.png' },
  { id: 'photo-14', src: 'https://i.postimg.cc/BZrLH50N/13.png' },
  { id: 'photo-15', src: 'https://i.postimg.cc/x1RcwWbv/14.png' },
  { id: 'photo-16', src: 'https://i.postimg.cc/QtRtgDv0/15.png' },
  { id: 'photo-17', src: 'https://i.postimg.cc/NfvF5g62/16.png' },
  { id: 'photo-18', src: 'https://i.postimg.cc/K8J8qBds/17.png' },
  { id: 'photo-19', src: 'https://i.postimg.cc/tJ3Xhx3g/19.png' },
];

export const BUFFET_MENU_ITEMS: MenuItemData[] = [
  {
    id: 'buffet-1',
    name: { ka: 'ქართული და ევროპული ყველის ასორტი', en: 'Georgian & European Cheese Platter' },
    description: {
      ka: 'მთის თაფლით, ნიგვზით, ყურძნითა და გამომცხვარი გრისინით',
      en: 'Served with mountain honey, walnuts, fresh grapes, and baked grissini',
    },
  },
  {
    id: 'buffet-2',
    name: { ka: 'ბრუსკეტები შებოლილი ორაგულით', en: 'Smoked Salmon Bruschetta' },
    description: {
      ka: 'ნაღების ყველით, კაპერსითა და ლიმონის ცედრით',
      en: 'Topped with whipped cream cheese, capers, and fresh lemon zest',
    },
  },
  {
    id: 'buffet-3',
    name: { ka: 'მინი ხაჭაპური და ლობიანი', en: 'Mini Khachapuri & Lobiani' },
    description: {
      ka: 'თბილი, ფენოვანი ცომით ფურშეტის ფორმატში',
      en: 'Warm flaky puff-pastry bites served fresh for buffet gatherings',
    },
  },
  {
    id: 'buffet-4',
    name: { ka: 'ქათმის რულეტი პესტოთი', en: 'Pesto Chicken Roulade' },
    description: {
      ka: 'მზეზე გამომშრალი პომიდვრითა და მწვანილის სოუსით',
      en: 'Filled with sun-dried tomatoes and paired with fresh herb sauce',
    },
  },
  {
    id: 'buffet-5',
    name: { ka: 'ფხალის კანაპეების ასორტი', en: 'Assorted Pkhali Canapés' },
    description: {
      ka: 'ისპანახისა და ბადრიჯნის ფხალი ბროწეულითა და ნიგვზით',
      en: 'Spinach and roasted eggplant walnut spreads garnished with pomegranate',
    },
  },
  {
    id: 'buffet-6',
    name: { ka: 'პროშუტოსა და ხორცეულის დაფა', en: 'Prosciutto & Charcuterie Board' },
    description: {
      ka: 'ზეთისხილით, მარინადებითა და მდოგვის სოუსით',
      en: 'Cured meats accompanied by olives, pickles, and whole-grain mustard',
    },
  },
  {
    id: 'buffet-7',
    name: { ka: 'ბადრიჯნის რულეტები ნიგვზით', en: 'Eggplant Rolls with Walnut Filling' },
    description: {
      ka: 'სუნელებით შეზავებული ნიგვზის პასტითა და ბროწეულის მარცვლებით',
      en: 'Chargrilled eggplant rolled with spiced Georgian walnut paste and pomegranate',
    },
  },
  {
    id: 'buffet-8',
    name: { ka: 'კაპრეზეს შამფურები', en: 'Caprese Skewers' },
    description: {
      ka: 'მინი მოცარელა, ჩერი პომიდორი, რეჰანი და ბალზამიკოს გლაზური',
      en: 'Mini mozzarella, cherry tomatoes, fresh basil, and balsamic glaze',
    },
  },
  {
    id: 'buffet-9',
    name: { ka: 'როსტბიფის კანაპე', en: 'Roast Beef Canapés' },
    description: {
      ka: 'შავ პურზე, კარამელიზებული ხახვითა და პირშუშხას კრემით',
      en: 'Tender roast beef on rye crostini with caramelized onion and horseradish cream',
    },
  },
  {
    id: 'buffet-10',
    name: { ka: 'კრევეტების კანაპე ავოკადოს მუსით', en: 'Prawn & Avocado Mousse Canapés' },
    description: {
      ka: 'გრილზე შემწვარი კრევეტი ლიმონის წვეთითა და მწვანე მიკრომწვანილით',
      en: 'Grilled prawns over avocado mousse with citrus zest and microgreens',
    },
  },
  {
    id: 'buffet-11',
    name: { ka: 'მინი ბურგერები საქონლის ხორცით', en: 'Mini Beef Sliders' },
    description: {
      ka: 'ბრიოშის ფუნთუშაში, ჩედარის ყველითა და სპეციალური სოუსით',
      en: 'Juicy beef patties in brioche buns with melted cheddar and house sauce',
    },
  },
  {
    id: 'buffet-12',
    name: { ka: 'მინი კრუასანები ქათმითა და რუკოლით', en: 'Savory Chicken & Arugula Mini Croissants' },
    description: {
      ka: 'ფხვიერი ფრანგული კრუასანი ნაზი ქათმის ფილეთი და პარმეზანით',
      en: 'Flaky butter croissants filled with roasted chicken, arugula, and parmesan',
    },
  },
  {
    id: 'buffet-13',
    name: { ka: 'ტარტალეტკები სოკოს ჟულიენით', en: 'Mushroom Julienne Tartlets' },
    description: {
      ka: 'ნაღების სოუსში მომზადებული ტყის სოკო ოქროსფერი ყველის ქერქით',
      en: 'Savory pastry cups filled with creamy forest mushrooms and gratinated cheese',
    },
  },
  {
    id: 'buffet-14',
    name: { ka: 'ქათმის სატე არაქისის სოუსით', en: 'Chicken Satay Skewers' },
    description: {
      ka: 'ნაზად შემწვარი ქათმის შამფურები სეზამითა და სანელებლებიანი სოუსით',
      en: 'Chargrilled chicken skewers finished with sesame and aromatic dip',
    },
  },
  {
    id: 'buffet-15',
    name: { ka: 'კუსკუსისა და გამომცხვარი ბოსტნეულის ჭიქები', en: 'Roasted Vegetable & Couscous Cups' },
    description: {
      ka: 'გრილზე შემწვარი ბოსტნეული, ფეტა და ზეითუნის ზეთის დრესინგი',
      en: 'Individual portions of herb couscous, grilled seasonal vegetables, and feta',
    },
  },
  {
    id: 'buffet-16',
    name: { ka: 'სალათი „ცეზარი“ პორციულ ჭიქებში', en: 'Caesar Salad Cups' },
    description: {
      ka: 'რომენის სალათი, გრილზე შემწვარი ქათამი, პარმეზანი და კრუტონები',
      en: 'Crisp romaine, grilled chicken strips, shaved parmesan, and garlic croutons',
    },
  },
  {
    id: 'buffet-17',
    name: { ka: 'მჭადის მინი კანაპეები სულგუნით', en: 'Mini Mchadi with Sulguni Cheese' },
    description: {
      ka: 'ხრაშუნა სიმინდის მჭადი შებოლილი სულგუნითა და პიტნის ნადუღით',
      en: 'Crisp cornmeal bites topped with smoked sulguni and mint nadughi',
    },
  },
  {
    id: 'buffet-18',
    name: { ka: 'ბრუსკეტა ჩერი პომიდვრითა და რეჰანით', en: 'Tomato & Basil Bruschetta' },
    description: {
      ka: 'გახუხული ჩაბატა ნივრის არომატით, პომიდვრის კონკასითა და ზეითუნით',
      en: 'Toasted ciabatta topped with marinated cherry tomatoes, basil, and olive oil',
    },
  },
  {
    id: 'buffet-19',
    name: { ka: 'ორაგულის მუსის პროფიტეროლები', en: 'Smoked Salmon Mousse Profiteroles' },
    description: {
      ka: 'უტკბო შუ ნაზი ორაგულის კრემითა და წითელი ხიზილალით',
      en: 'Savory choux puffs filled with silky salmon mousse and red roe garnish',
    },
  },
  {
    id: 'buffet-20',
    name: { ka: 'ბრი ყველისა და ლეღვის ჯემის კანაპე', en: 'Brie & Fig Jam Crostini' },
    description: {
      ka: 'ფრანგული ბრი, ლეღვის მურაბა და მოხალული პეკანი',
      en: 'Creamy French brie paired with fig preserve and toasted pecans',
    },
  },
  {
    id: 'buffet-21',
    name: { ka: 'ქათმის ნაგეთსები მდოგვისა და თაფლის სოუსით', en: 'Crispy Chicken Bites with Honey Mustard' },
    description: {
      ka: 'ოქროსფერ პანირებაში შემწვარი ქათმის ფილე არომატული დიპით',
      en: 'Golden panko-crusted chicken fillets served with tangy honey-mustard dip',
    },
  },
  {
    id: 'buffet-22',
    name: { ka: 'მინი კეისადია ყველითა და ბოსტნეულით', en: 'Mini Cheese & Vegetable Quesadillas' },
    description: {
      ka: 'თბილი ტორტილა გამდნარი ყველით, ბულგარულით და არაჟნის სოუსით',
      en: 'Warm grilled tortillas filled with melted cheese and sweet bell peppers',
    },
  },
  {
    id: 'buffet-23',
    name: { ka: 'ბოსტნეულის კრუდიტე ჰუმუსთან ერთად', en: 'Fresh Vegetable Crudités & Hummus' },
    description: {
      ka: 'ხრაშუნა სტაფილო, კიტრი, ნიახური და კლასიკური ნუტის ჰუმუსი',
      en: 'Crisp seasonal vegetable sticks served in cups with velvety chickpea hummus',
    },
  },
  {
    id: 'buffet-24',
    name: { ka: 'გამომცხვარი კარტოფილი როზმარინით', en: 'Rosemary Baby Potatoes' },
    description: {
      ka: 'ოქროსფრად შებრაწული პატარა კარტოფილი ზღვის მარილითა და ნივრით',
      en: 'Oven-roasted baby potatoes seasoned with sea salt, garlic, and rosemary',
    },
  },
  {
    id: 'buffet-25',
    name: { ka: 'ხილისა და კენკრის ფურშეტის დაფა', en: 'Seasonal Fruit & Berry Platter' },
    description: {
      ka: 'სეზონური ხილი, ყურძენი, კენკრა და ახალი პიტნის ფოთლები',
      en: 'Curated seasonal fruits, grapes, and fresh berries arranged for sharing',
    },
  },
];

export const SWEET_MENU_ITEMS: MenuItemData[] = [
  {
    id: 'sweet-1',
    name: { ka: 'თაფლის ნამცხვარი „მედოვიკი“', en: 'Layered Honey Cake "Medovik"' },
    description: {
      ka: 'კარამელიზებული ნაღების კრემითა და მოხალული ნიგვზით',
      en: 'Delicate honey layers with caramelized cream and toasted walnuts',
    },
  },
  {
    id: 'sweet-2',
    name: { ka: 'მინი ტირამისუ', en: 'Mini Tiramisu Cups' },
    description: {
      ka: 'მასკარპონეს ნაზი კრემითა და არომატული ესპრესოთი',
      en: 'Silky mascarpone cream layered with aromatic espresso-soaked sponge',
    },
  },
  {
    id: 'sweet-3',
    name: { ka: 'ტყის კენკრის ტარტალეტკები', en: 'Wild Berry Tartlets' },
    description: {
      ka: 'ვანილის მოხარშული კრემითა და ცოცხალი კენკრით',
      en: 'Crisp pastry shells filled with vanilla custard and seasonal berries',
    },
  },
  {
    id: 'sweet-4',
    name: { ka: 'შოკოლადის ფონდანი', en: 'Warm Chocolate Fondant' },
    description: {
      ka: 'თბილი ბელგიური შოკოლადითა და ვანილის ნაყინით',
      en: 'Molten Belgian dark chocolate cake served with vanilla ice cream',
    },
  },
  {
    id: 'sweet-5',
    name: { ka: 'ჩურჩხელისა და ჩირის ტკბილი დაფა', en: 'Churchkhela & Dried Fruit Platter' },
    description: {
      ka: 'კახური თათარით, ლეღვის ჩირითა და მოხალული ნუშით',
      en: 'Kakhetian grape-must churchkhela with dried figs and roasted almonds',
    },
  },
  {
    id: 'sweet-6',
    name: { ka: 'მინი შუ და ეკლერების ასორტი', en: 'Mini Choux & Éclair Assortment' },
    description: {
      ka: 'პისტის, შოკოლადისა და დამარილებული კარამელის შიგთავსით',
      en: 'Filled with pistachio, dark chocolate, and salted caramel creams',
    },
  },
  {
    id: 'sweet-7',
    name: { ka: 'ფრანგული მაკარონების ასორტი', en: 'Assorted French Macarons' },
    description: {
      ka: 'ჟოლოს, ფისტის, ვანილისა და მწარე შოკოლადის არომატებით',
      en: 'Delicate almond meringue cookies in raspberry, pistachio, vanilla, and cocoa',
    },
  },
  {
    id: 'sweet-8',
    name: { ka: 'მინი ჩიზქეიქი კენკრის სოუსით', en: 'Mini Berry Cheesecake' },
    description: {
      ka: 'კრემყველის ნაზი ტექსტურა ხრაშუნა ძირითა და ჟოლოს კულით',
      en: 'Creamy baked cheesecake bites finished with tangy raspberry coulis',
    },
  },
  {
    id: 'sweet-9',
    name: { ka: 'ბრაუნის კუბები ნიგვზით', en: 'Belgian Chocolate Walnut Brownies' },
    description: {
      ka: 'მდიდარი მუქი შოკოლადის ბრაუნი კარამელის ნაზი ზოლებით',
      en: 'Fudgy dark chocolate brownie squares studded with roasted walnuts',
    },
  },
  {
    id: 'sweet-10',
    name: { ka: 'პანა კოტა მანგოს სოუსით', en: 'Vanilla Panna Cotta with Mango' },
    description: {
      ka: 'ნაზი ნაღების დესერტი ტროპიკული მანგოსა და მარაკუიას ფენით',
      en: 'Silky vanilla bean panna cotta topped with bright mango passionfruit glaze',
    },
  },
  {
    id: 'sweet-11',
    name: { ka: 'ლიმონის მერენგის ტარტალეტკა', en: 'Lemon Meringue Tartlets' },
    description: {
      ka: 'მომჟავო ლიმონის კრემი და ოდნავ შებრაწული ჰაეროვანი ბეზე',
      en: 'Zesty lemon curd in crisp pastry crowned with toasted meringue',
    },
  },
  {
    id: 'sweet-12',
    name: { ka: 'მინი პავლოვა ცოცხალი მარწყვით', en: 'Mini Pavlova with Fresh Strawberries' },
    description: {
      ka: 'ხრაშუნა ბეზე, ათქვეფილი ნაღები და სეზონური კენკრა',
      en: 'Crisp meringue nests topped with chantilly cream and fresh berries',
    },
  },
  {
    id: 'sweet-13',
    name: { ka: 'ნაპოლეონის მინი ნაჭრები', en: 'Classic Mini Napoleon' },
    description: {
      ka: 'თხელი ფენოვანი ცომი და ვანილის ნაზი მოხარშული კრემი',
      en: 'Crisp puff-pastry layers filled with light Madagascar vanilla cream',
    },
  },
  {
    id: 'sweet-14',
    name: { ka: 'შოკოლადის მუსის ჭიქები', en: 'Dark Chocolate Mousse Cups' },
    description: {
      ka: 'ჰაეროვანი შოკოლადის მუსი გახეხილი შოკოლადითა და კენკრით',
      en: 'Velvety Belgian chocolate mousse garnished with dark curls and berries',
    },
  },
  {
    id: 'sweet-15',
    name: { ka: 'ფისტისა და ჟოლოს რულეტი', en: 'Pistachio & Raspberry Meringue Roll' },
    description: {
      ka: 'ჰაეროვანი ბეზეს რულეტი მასკარპონეს კრემითა და ფისტის ნამცეცებით',
      en: 'Light meringue roulade with mascarpone cream, raspberries, and crushed pistachios',
    },
  },
  {
    id: 'sweet-16',
    name: { ka: 'მინი კაპქეიქების ასორტი', en: 'Assorted Mini Cupcakes' },
    description: {
      ka: 'ვანილის, წითელი ხავერდისა და შოკოლადის კრემ-ყველის ქუდით',
      en: 'Vanilla, red velvet, and cocoa mini cupcakes with whipped cream-cheese frosting',
    },
  },
  {
    id: 'sweet-17',
    name: { ka: 'კარამელისა და თხილის ტარტი', en: 'Salted Caramel & Hazelnut Tartlets' },
    description: {
      ka: 'დამარილებული კარამელი, მოხალული თხილი და მუქი შოკოლადის განაში',
      en: 'Rich salted caramel and roasted hazelnuts under silky chocolate ganache',
    },
  },
  {
    id: 'sweet-18',
    name: { ka: 'მარწყვი შოკოლადში', en: 'Chocolate-Dipped Strawberries' },
    description: {
      ka: 'ცოცხალი მარწყვი ბელგიური თეთრი და მუქი შოკოლადის საფარით',
      en: 'Fresh hand-dipped strawberries coated in Belgian dark and white chocolate',
    },
  },
  {
    id: 'sweet-19',
    name: { ka: 'მინი დონატები გლაზურით', en: 'Glazed Mini Donuts' },
    description: {
      ka: 'ფერადი შოკოლადის, ვანილისა და კენკრის მინანქრით',
      en: 'Soft bite-sized donuts finished with chocolate, vanilla, and berry glazes',
    },
  },
  {
    id: 'sweet-20',
    name: { ka: 'ვაშლის მინი შტრუდელი დარიჩინით', en: 'Mini Apple Cinnamon Strudel' },
    description: {
      ka: 'კარამელიზებული ვაშლი, ქიშმიში, დარიჩინი და შაქრის პუდრა',
      en: 'Flaky pastry filled with spiced caramelized apples and toasted almonds',
    },
  },
  {
    id: 'sweet-21',
    name: { ka: 'ტრიუფელების ხელნაკეთი ასორტი', en: 'Artisanal Chocolate Truffles' },
    description: {
      ka: 'კაკაოს, ქოქოსისა და ფისტის საფარში ამოვლებული ტრიუფელები',
      en: 'Hand-rolled chocolate truffles dusted with cocoa, coconut, and pistachio',
    },
  },
  {
    id: 'sweet-22',
    name: { ka: 'მინი კანოლი რიკოტას კრემით', en: 'Mini Sicilian Cannoli' },
    description: {
      ka: 'ხრაშუნა მილაკები ნაზი რიკოტათი და ფორთოხლის ცუკატებით',
      en: 'Crisp pastry shells filled with sweet ricotta cream and candied orange peel',
    },
  },
  {
    id: 'sweet-23',
    name: { ka: 'ბანოფის დესერტის ჭიქები', en: 'Banoffee Dessert Cups' },
    description: {
      ka: 'ბისკვიტის ნამცეცები, მოხარშული შედედებული რძე, ბანანი და ნაღები',
      en: 'Layered biscuit crumble, dulce de leche caramel, fresh banana, and cream',
    },
  },
  {
    id: 'sweet-24',
    name: { ka: 'შვრიისა და თეთრი შოკოლადის ნამცხვარი', en: 'White Chocolate & Cranberry Cookies' },
    description: {
      ka: 'შიგნიდან რბილი, არომატული ორცხობილა შტოშითა და თეთრი შოკოლადით',
      en: 'Soft-baked cookies studded with white chocolate chunks and dried cranberries',
    },
  },
  {
    id: 'sweet-25',
    name: { ka: 'მინი შოკოლადის კროსანები', en: 'Mini Pain au Chocolat' },
    description: {
      ka: 'თბილი ფენოვანი ცომი მუქი შოკოლადის გულსართით',
      en: 'Warm flaky French pastry baked around rich dark chocolate batons',
    },
  },
];

export const FAQ_ITEMS: FaqItemData[] = [
  {
    id: 'location',
    question: {
      ka: 'სად მდებარეობს შალე ბულაჩაური?',
      en: 'Where is Shale Bulachauri located?',
    },
    answer: {
      ka: 'შალე ბულაჩაური მდებარეობს თბილისთან ახლოს ბუნებრივად გამორჩეულ გარემოში, სადაც ქალაქის ხმაური სიმშვიდითა და ბუნების ჰარმონიით იცვლება. ზუსტი ლოკაცია შეგიძლიათ იხილოთ სექციაში "კონტაქტი".',
      en: 'Shale Bulachauri is located near Tbilisi, in a naturally beautiful setting where the noise of the city gives way to tranquility and harmony with nature. You can find the exact location in the "Contact" section.',
    },
  },
  {
    id: 'services',
    question: {
      ka: 'რა მომსახურებებს გვთავაზობს შალე ბულაჩაური?',
      en: 'What services does Shale Bulachauri offer?',
    },
    answer: {
      ka: 'შალე ბულაჩაური გთავაზობთ ღონისძიების ორგანიზებასთან დაკავშირებულ მრავალფეროვან მომსახურებას, მათ შორის ფურშეტს, დეკორაციის დიზაინს, სივრცის გაფორმებას და ფოტო/ვიდეო მომსახურებას. შეთავაზებები ინდივიდუალურად განისაზღვრება ღონისძიების ტიპისა და თქვენი სურვილების მიხედვით.',
      en: 'Shale Bulachauri offers a wide range of event-related services, including catering, decoration design, venue styling, and photography and videography services. Each offer is tailored to the type of event and your individual preferences.',
    },
  },
  {
    id: 'difference',
    question: {
      ka: 'რითი გამოირჩევა შალე ბულაჩაური სხვა სივრცეებისგან?',
      en: 'What makes Shale Bulachauri different from other venues?',
    },
    answer: {
      ka: 'შალე ბულაჩაური აერთიანებს ყველაფერს, რაც განსაკუთრებული ღონისძიების მოსაწყობად გჭირდებათ — ფურშეტს, ექსტერიერის დიზაინს, ფოტო და ვიდეო მომსახურებას და სხვა. ყველა სერვისის მიღება შესაძლებელია ერთ სივრცეში, ინდივიდუალურად მორგებული შეთავაზებით. ამასთან, მშვიდი და იზოლირებული მდებარეობა საშუალებას გაძლევთ, ღონისძიება ხმაურისა და დროის შეზღუდვის გარეშე გამართოთ.',
      en: 'Shale Bulachauri brings together everything you need to create a memorable event — from catering and exterior design to photography and videography services, and more. All services are available in one place, with packages tailored to your individual needs. In addition, its peaceful and secluded location allows you to enjoy your event without concerns about noise or time restrictions.',
    },
  },
  {
    id: 'event-types',
    question: {
      ka: 'რა ტიპის ღონისძიებებისთვის არის განკუთვნილი შალე ბულაჩაური?',
      en: 'What types of events can be hosted at Shale Bulachauri?',
    },
    answer: {
      ka: 'შალე ბულაჩაური იდეალური სივრცეა როგორც ინდივიდუალური წვეულებებისა და პირადი დღესასწაულებისთვის, ისე კორპორატიული ივენთებისა და სხვადასხვა ტიპის სპეციალური ღონისძიებებისთვის. სივრცე და მომსახურებები მორგებულია თქვენს სურვილებსა და ღონისძიების ფორმატზე.',
      en: 'Shale Bulachauri is an ideal venue for a wide range of occasions, from private parties and personal celebrations to corporate events and special gatherings. The space and services can be tailored to your preferences and the nature of your event.',
    },
  },
  {
    id: 'advance-booking',
    question: {
      ka: 'რამდენი ხნით ადრე უნდა დავჯავშნოთ სასურველი თარიღი?',
      en: 'How far in advance should I book my preferred date?',
    },
    answer: {
      ka: 'რადგან ხელმისაწვდომი თარიღები შეზღუდულია, სასურველია ჯავშანი წინასწარ, რაც შეიძლება ადრე გააფორმოთ, რათა სასურველი თარიღის არჩევა შეძლოთ.',
      en: 'As availability is limited, we recommend making your reservation as early as possible to secure your preferred date.',
    },
  },
  {
    id: 'pricing',
    question: {
      ka: 'როგორ განისაზღვრება ღონისძიების ღირებულება?',
      en: 'How is the cost of an event determined?',
    },
    answer: {
      ka: 'თითოეული ღონისძიების ღირებულება ინდივიდუალურად განისაზღვრება, ღონისძიების ტიპის, სტუმრების რაოდენობისა და თქვენი მოთხოვნების გათვალისწინებით. დეტალური შეთავაზების მისაღებად მოგვწერეთ პირად შეტყობინებაში.',
      en: 'Each event is priced individually, based on the type of event, number of guests, and your specific requirements. For a personalized offer, please contact us via direct message.',
    },
  },
];
