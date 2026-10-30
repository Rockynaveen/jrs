export interface FacilityGalleryImage {
  url: string
  title: string
  caption?: string
  tag?: string
}

export interface FacilityItem {
  slug: string
  title: string
  heroTagline: string
  subtitle: string
  category: string
  overview: string
  primaryImage: string
  iconName: 'classroom' | 'flask' | 'brain' | 'book' | 'athlete' | 'bus'
  iconBg: string
  iconColor: string
  keyPoints: string[]
  galleryImages: FacilityGalleryImage[]
}

export const facilitiesList: FacilityItem[] = [
  {
    slug: 'smart-classrooms',
    title: 'Smart Classrooms',
    heroTagline: 'A modern learning space designed to inspire curiosity, creativity and innovation.',
    subtitle: 'Modern and interactive learning spaces',
    category: 'Academic Infrastructure',
    overview:
      'Our Smart Classrooms transform conventional teaching into an interactive, visually engaging experience. Equipped with modern interactive touchscreens, digital learning content, and ergonomic seating, each classroom empowers students to engage deeply with complex concepts.',
    primaryImage: '/images/facilities/smart-classroom.jpg',
    iconName: 'classroom',
    iconBg: 'bg-[#031c3f]',
    iconColor: 'text-[#031c3f]',
    keyPoints: [
      'Interactive and experiential digital learning',
      'Encourages student collaboration and creativity',
      'Ergonomically designed flexible learning spaces',
      'Equipped with modern audio-visual learning tools',
    ],
    galleryImages: [
      { url: '/images/facilities/smart-classroom.jpg', title: 'Interactive Smart Board' },
      { url: '/images/classrooms/1.png', title: 'Modular Seating Classroom' },
      { url: '/images/classrooms/2.png', title: 'Digital Collaboration Zone' },
      { url: '/images/classrooms/3.png', title: 'Primary Wing Classroom' },
      { url: '/images/classrooms/4.png', title: 'Well-Ventilated Study Space' },
      { url: '/images/secondary-school-classroom.jpg', title: 'Secondary Digital Smart Classroom' },
    ],
  },
  {
    slug: 'science-computer-labs',
    title: 'Science & Computer Labs',
    heroTagline: 'State-of-the-art laboratories designed for hands-on scientific discovery and digital literacy.',
    subtitle: 'Well-equipped labs for hands-on learning',
    category: 'STEM & Research',
    overview:
      'Our state-of-the-art Science and Computer Laboratories provide students with hands-on experiential learning where theoretical knowledge meets real-world practice under expert faculty guidance.',
    primaryImage: '/images/facilities/science-lab.jpg',
    iconName: 'flask',
    iconBg: 'bg-[#e31e24]',
    iconColor: 'text-[#e31e24]',
    keyPoints: [
      'Interactive and experiential lab experiments',
      'Encourages scientific curiosity and computational logic',
      'Equipped with modern lab apparatus and workstations',
      'Strict safety guidelines with expert faculty supervision',
    ],
    galleryImages: [
      { url: '/images/facilities/science-lab.jpg', title: 'Composite Science Laboratory' },
      { url: '/images/science.jpg', title: 'Hands-on Student Experiments' },
      { url: '/images/science-activities/1.jpg', title: 'Chemistry Experimental Station' },
      { url: '/images/science-activities/3.jpg', title: 'Microscopy and Biology Research' },
      { url: '/images/science-activities/10.jpg', title: 'STEM & Robotics Lab' },
      { url: '/images/science-activities/4.jpg', title: 'Physics & Applied Sciences Lab' },
    ],
  },
  {
    slug: 'cognospace',
    title: 'Cognospace',
    heroTagline: 'A modern learning space designed to inspire curiosity, creativity and innovation.',
    subtitle: 'Innovative learning & creative discovery zone',
    category: 'Cognitive & Innovation Hub',
    overview:
      'Cognospace is an innovative learning and discovery zone that nurtures creativity, critical thinking and problem-solving skills. It provides students with a stimulating environment to explore, experiment and bring their ideas to life.',
    primaryImage: '/images/facilities/cognospace.jpg',
    iconName: 'brain',
    iconBg: 'bg-[#e31e24]',
    iconColor: 'text-[#e31e24]',
    keyPoints: [
      'Interactive and experiential learning',
      'Encourages creativity and innovation',
      'Collaborative spaces for team activities',
      'Equipped with modern learning tools',
    ],
    galleryImages: [
      { url: '/images/facilities/cognospace.jpg', title: 'Cognospace Central Zone' },
      { url: '/images/science-activities/10.jpg', title: 'Hands-on STEM Robotics' },
      { url: '/images/facilities/smart-classroom.jpg', title: 'Interactive Digital Discovery Wall' },
      { url: '/images/pre-primary-learning.jpg', title: 'Early Cognitive Play Arena' },
      { url: '/images/primary-school-study.jpg', title: 'Collaborative Problem-Solving' },
      { url: '/images/science-activities/2.png', title: 'Creative Innovation Workshop' },
    ],
  },
  {
    slug: 'library',
    title: 'Library',
    heroTagline: 'A world of knowledge, literature, and quiet intellectual inspiration.',
    subtitle: 'A world of knowledge and imagination',
    category: 'Learning Resources',
    overview:
      'The JRS Library is an expansive sanctuary of literature and research containing thousands of fiction and non-fiction titles, reference encyclopedias, international journals, and multimedia reading terminals.',
    primaryImage: '/images/facilities/library.jpg',
    iconName: 'book',
    iconBg: 'bg-[#031c3f]',
    iconColor: 'text-[#031c3f]',
    keyPoints: [
      'Curated collection of thousands of print & digital volumes',
      'Encourages independent reading habits and research skills',
      'Quiet individual study carrels and group reading nooks',
      'Dedicated sections for early learners, middle, and senior grades',
    ],
    galleryImages: [
      { url: '/images/facilities/library.jpg', title: 'Main Library Reading Hall' },
      { url: '/images/primary-school-study.jpg', title: 'Guided Literature Circles & Junior Reading' },
      { url: '/images/middle-school-students.jpg', title: 'Quiet Study & Reference Nooks' },
      { url: '/images/secondary-school-classroom.jpg', title: 'Senior Research & Study Zone' },
      { url: '/images/science-activities/9.jpg', title: 'Scientific Reference Wing' },
      { url: '/images/classrooms/4.png', title: 'Independent Research Terminal' },
      { url: '/images/classrooms/2.png', title: 'Collaborative Group Study Space' },
      { url: '/images/facilities/smart-classroom.jpg', title: 'Interactive Media & Knowledge Pods' },
      { url: '/images/facilities/library.png', title: 'Expansive Literature Stacks' },
    ],
  },
  {
    slug: 'sports-facilities',
    title: 'Sports Facilities',
    heroTagline: 'Expansive indoor and outdoor sports grounds dedicated to physical fitness and character building.',
    subtitle: 'Indoor & outdoor sports for all-round growth',
    category: 'Athletics & Physical Fitness',
    overview:
      'We believe a healthy body houses a sharp mind. Our extensive sports complex offers dedicated grounds and courts for athletics, football, cricket, basketball, volleyball, martial arts, yoga, and skating.',
    primaryImage: '/images/facilities/sports.jpg',
    iconName: 'athlete',
    iconBg: 'bg-[#031c3f]',
    iconColor: 'text-[#031c3f]',
    keyPoints: [
      'Spacious outdoor grounds for athletics, football & cricket',
      'Dedicated basketball, volleyball & badminton courts',
      'Indoor sports arena for table tennis, yoga, and martial arts',
      'Professional NIS-certified sports coaching & fitness mentors',
    ],
    galleryImages: [
      { url: '/images/facilities/sports.jpg', title: 'Multi-Sport Outdoor Grounds' },
      { url: '/images/sports1.jpeg', title: 'Athletics & Team Sports' },
      { url: '/images/skating.jpg', title: 'Skating Rink & Arena' },
      { url: '/images/karate.jpg', title: 'Martial Arts & Self-Defense' },
      { url: '/images/yoga.jpg', title: 'Yoga & Meditation Hall' },
      { url: '/images/beyond/sports.jpg', title: 'Track & Outdoor Field Sports' },
    ],
  },
  {
    slug: 'transport',
    title: 'Transport',
    heroTagline: 'Dependable, safe, and GPS-monitored student transport fleet covering all major city routes.',
    subtitle: 'Safe, reliable and secure transport',
    category: 'Student Safety & Mobility',
    overview:
      'The JRS transport fleet provides dependable, safe, and comfortable commuting for students across major city routes. Every bus is equipped with GPS tracking, CCTV surveillance, speed governors, and female attendants.',
    primaryImage: '/images/facilities/transport.jpg',
    iconName: 'bus',
    iconBg: 'bg-[#e31e24]',
    iconColor: 'text-[#e31e24]',
    keyPoints: [
      'Real-time GPS tracking and live parental route monitoring',
      'High-definition internal CCTV cameras on every vehicle',
      'Trained drivers and verified female bus attendants on every trip',
      'Extensive route connectivity across Hyderabad & Medchal district',
    ],
    galleryImages: [
      { url: '/images/facilities/transport.jpg', title: 'JRS School Bus Fleet' },
      { url: '/images/campus-building.jpg', title: 'Dedicated Pick-up & Drop Bays' },
      { url: '/images/campus/entrance-1.png', title: 'Gated Security Checkpoint' },
      { url: '/images/campus/main-building.png', title: 'Safe Campus Bus Boarding Area' },
      { url: '/images/facilities/transport.png', title: 'Maintained Transport Infrastructure' },
      { url: '/images/campus/entrance-2.png', title: 'Main Campus Transit & Pick-up Gate' },
    ],
  },
]

export function getFacilityBySlug(slug: string): FacilityItem | undefined {
  return facilitiesList.find((item) => item.slug === slug)
}
