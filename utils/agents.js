import fs from "fs/promises"
export async function getPepole() {
    try {
        const res = await fetch("https://spiestestserver-8l55.onrender.com/people")
        const text = await res.text()
        fs.writeFile("./PEOPLE.json", text, () => { })
    } catch (error) {
        console.error(error)
    }
}

export async function getCall() {
    try {
        const res = await fetch("https://spiestestserver-8l55.onrender.com/transcriptions")
        const text = await res.text()
        fs.writeFile("./TRANSCRIPTIONS.json", text, () => { })
    } catch (error) {
        console.error(error)
    }
}

export async function SearchByName(name) {
    try {
        const byName = await fs.readFile('./PEOPLE.json', 'utf-8', () => { })
        const text = JSON.parse(byName)
        const newfilter = text.filter((people) => name === people.name)
        if (newfilter.length === 0) {
            console.log("No such name found.")
        }
        return newfilter
    } catch (error) {
        console.log(error)
    }
}

export async function SearchByAge(age) {
    try {
        const byAge = await fs.readFile('./TRANSCRIPTIONS.json', 'utf-8', () => { })
        const text = JSON.parse(byAge)
        const newfilter = text.filter((call) => age === call.age)
        if (newfilter.length === 0) {
            console.log("No such age found.")
        }
        return newfilter
    } catch (error) {
        console.log(error)
    }
}

export async function findDangerousPeople() {
    try {
        const read = await fs.readFile('./TRANSCRIPTIONS.json', 'utf-8', () => { })
        const text = JSON.parse(read)
        const transcriptions = text.filter((call) => {
        })
    } catch (error) {
        console.error(error)
    }
}