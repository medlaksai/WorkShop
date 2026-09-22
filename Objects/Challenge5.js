function bookinfos (title , auteur , year){
    return{
        title : title,
        auteur : auteur,
        year : year ,
    }
}
let infos = bookinfos("48 Laws of Power", "Robert" , 2009 )


console.log("Book Infos :")
console.log("Title : " + infos.title)
console.log("Auteur : " + infos.auteur)
console.log("Year : " + infos.year)