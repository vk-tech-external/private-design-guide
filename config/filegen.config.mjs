import { tableOfContents as toc1 } from './design-guide.toc.js';

export const config = {
    docsRelativePath: null, // Абсолютный путь до папки с исходниками документации, если null, то ./docs
    resultRelativePath: '/d11n-data/result', // Абсолютный путь до папки с временными файлами, если null, то ./tmp
    documents: [
        {
            buildPoints: ['box'], // Для каких окружений собрать документ
            description: 'Руководство по проектированию', // Заголовок документа
            key: 'design-guide', // Ключ, участвует в формировании имени документа
            htmlTemplate: null, // Какой шаблон для html использовать, не обязательное поле
            fodtTemplate: 'fodt-template', // Какой шаблон для odt использовать
            fodtParams: {
                system: 'Private Cloud',
                doctitle: 'Руководство по проектированию',
                revnumber1: 'Версия 4.1.1',
                revdate1: process.env?.date1 ?? ' от 12.09.2019',
            },
            tableOfContents: toc1, // Содержание
        }
    ]
};
