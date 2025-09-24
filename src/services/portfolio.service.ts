
import { Injectable, signal } from '@angular/core';
import { DesignerProfile, Project } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  designerProfile = signal<DesignerProfile>({
    name: 'Алина Третьякова',
    title: 'Дизайнер Интерьеров',
    photoUrl: 'https://picsum.photos/id/1027/800/1200',
    bio: [
      'Создаю пространства, которые рассказывают историю. Моя философия заключается в том, чтобы каждый интерьер был не только эстетически привлекательным, но и функциональным, отражая индивидуальность и образ жизни его владельцев.',
      'С более чем десятилетним опытом в индустрии, я специализируюсь на жилых и коммерческих проектах, сочетая современные тенденции с вечной классикой. Внимание к деталям, качественные материалы и тесное сотрудничество с клиентом — ключи к созданию идеального дома.'
    ],
    email: 'hello@alinadesign.com',
    phone: '+7 (926) 123-45-67',
    socials: [
      { name: 'Instagram', url: '#' },
      { name: 'Pinterest', url: '#' },
      { name: 'Behance', url: '#' },
    ],
  });

  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Квартира в стиле лофт',
      category: 'Жилой',
      description: 'Проект современной квартиры в Москве с элементами лофта. Открытая планировка, кирпичные стены и панорамные окна создают ощущение простора и света. Мебель на заказ и уникальные световые решения подчеркивают характер пространства.',
      coverImage: 'https://picsum.photos/seed/project1/800/600',
      images: [
        'https://picsum.photos/seed/project1-1/1200/800',
        'https://picsum.photos/seed/project1-2/1200/800',
        'https://picsum.photos/seed/project1-3/1200/800',
        'https://picsum.photos/seed/project1-4/1200/800',
      ],
    },
    {
      id: 2,
      title: 'Минималистичный загородный дом',
      category: 'Жилой',
      description: 'Дизайн загородного дома, где преобладают чистые линии, натуральные материалы и нейтральная цветовая палитра. Основной задачей было создание спокойной и гармоничной атмосферы, способствующей отдыху от городской суеты.',
      coverImage: 'https://picsum.photos/seed/project2/800/600',
      images: [
        'https://picsum.photos/seed/project2-1/1200/800',
        'https://picsum.photos/seed/project2-2/1200/800',
      ],
    },
    {
      id: 3,
      title: 'Креативное пространство "ArtHub"',
      category: 'Коммерческий',
      description: 'Дизайн многофункционального коммерческого пространства, включающего коворкинг, галерею и кафе. Яркие цветовые акценты, нестандартные формы и трансформируемая мебель делают это место идеальным для творчества и сотрудничества.',
      coverImage: 'https://picsum.photos/seed/project3/800/600',
      images: [
        'https://picsum.photos/seed/project3-1/1200/800',
        'https://picsum.photos/seed/project3-2/1200/800',
        'https://picsum.photos/seed/project3-3/1200/800',
      ],
    },
    {
      id: 4,
      title: 'Элегантные апартаменты в центре',
      category: 'Жилой',
      description: 'Проект апартаментов с акцентом на роскошь и комфорт. Использование мрамора, латуни и бархата в сочетании с продуманным освещением создает утонченную и респектабельную атмосферу.',
      coverImage: 'https://picsum.photos/seed/project4/800/600',
      images: [
        'https://picsum.photos/seed/project4-1/1200/800',
        'https://picsum.photos/seed/project4-2/1200/800',
        'https://picsum.photos/seed/project4-3/1200/800',
      ],
    },
  ]);
}
