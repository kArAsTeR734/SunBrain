import { Task } from '@entities/Task/types.ts';

export const mathTasks: Task[] = [
  {
    number: 1,
    description:
      'В треугольнике ABC стороны AC и BC равны, угол C равен 168∘, угол CBD внешний. Найдите величину угла CBD. Ответ дайте в градусах.',
    imagePath: '/src/assets/image1.svg',
    answer: '174',
  },
  {
    number: 2,
    description:
      'В треугольнике ABC угол C равен 90°, AC = 6, BC = 8.' +
      ' Найдите радиус окружности, описанной около этого треугольника.',
    answer: '5',
  },
  {
    number: 3,
    description:
      'В параллелограмме ABCD AB = 5, AD = 8, ∠A = 60°. Найдите большую диагональ параллелограмма.',
    answer: '7',
  },
  {
    number: 4,
    description:
      'В равнобедренной трапеции ABCD основания AD = 15, BC = 9, боковая сторона AB = 5.' +
      ' Найдите высоту трапеции.',
    answer: '4',
  },
  {
    number: 5,
    description:
      'Около прямоугольника ABCD описана окружность радиусом R = 6.' +
      ' Найдите периметр прямоугольника, если одна из его сторон равна 8.',
    answer: '32',
  },
];
