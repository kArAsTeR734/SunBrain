import {Task} from "../../../shared/types/TaskTypes.ts";

export const tasks: Task[] = [
    {
        number: 1,
        description: 'В треугольнике ABC известно, что ∠B = 73, AB =\n' +
            'BC. Найдите ∠C. Ответ дайте в градусах.',
        imagePath: '/src/client/modules/StudentHomework/img/task1.png',
        answer: '53.5'
    },
    {
        number: 2,
        description: 'В треугольнике ABC угол C равен 90°, AC = 6, BC = 8.' +
            ' Найдите радиус окружности, описанной около этого треугольника.',
        answer: '5'
    },
    {
        number: 3,
        description: 'В параллелограмме ABCD AB = 5, AD = 8, ∠A = 60°. Найдите большую диагональ параллелограмма.',
        answer: '7'
    },
    {
        number: 4,
        description: 'В равнобедренной трапеции ABCD основания AD = 15, BC = 9, боковая сторона AB = 5.' +
            ' Найдите высоту трапеции.',
        answer: '4'
    },
    {
        number: 5,
        description: 'Около прямоугольника ABCD описана окружность радиусом R = 6.' +
            ' Найдите периметр прямоугольника, если одна из его сторон равна 8.',
        answer: '32'
    },
]