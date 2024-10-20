/*нужно реализовать функции для генерации
идентификационных кодов для трёх стран: Эстонии, Латвии и Литвы.
Каждая функция должна возвращать код, который начинается с
уникального префикса для страны (EST-, LVA-, LTU-) и за которым
следует случайное четырёхзначное число.*/
export class CountriesPrefix {

    randomNumbers(count: number): string {
        let returnNumbers: string = ''
        for (let i = 0; i < count; i++) {
            returnNumbers += Math.floor(Math.random() * 9) + 1
        }
        return returnNumbers
    }

    estoniaPrefixAndNumbers(): string {
        return 'EST-' + this.randomNumbers(4)
    }

    latviaPrefixAndNumbers() {
        return 'LVA-' + this.randomNumbers(4)
    }

    lithuaniaPrefixAndNumbers() {
        return 'LTU-' + this.randomNumbers(4)
    }

}