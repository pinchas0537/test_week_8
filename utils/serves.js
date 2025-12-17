import { findDangerousPeople, getCall, getPepole, SearchByAge, SearchByName } from "./agents.js";
import input from 'analiza-sync';

const all_menu = [
    "Get People List",
    "Get Call Records/Transcriptions",
    "Search People by Name",
    "Search People by Age",
    "Find Dangerous People",
    "Exit"
]

function showmenu() {
    all_menu.forEach((choice, i) => {
        console.log((`${i + 1}.${choice}`));
    })
}

export async function showAllmenu(){
    let fleag = true
    do{
        showmenu()
        const choice = input("Choose what you want to do? ")
        switch(choice){
            case "1":
                await getPepole();
                break;
            case "2":
                await getCall()
                break;

            case "3":
                console.log(await SearchByName(input("Enter name: ")))
                break;

            case "4":
                console.log(await SearchByAge(Number(input("Enter age: "))))
                break;
            case "5":
                console.log(await findDangerousPeople())
                break;
            case "6":
                fleag = false
                break;
            default:console.log("There is no such possibility.")
        }
    }
    while(fleag)
}