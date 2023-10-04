function paperRequirements(book1, book2, book3){
 const perBook1PaperNeeds = 100;
 const perBook2PaperNeeds = 200;
 const perBook3PaperNeeds = 300;

 const totalBook1PaperNeeds = book1 * perBook1PaperNeeds;
 const totalBook2PaperNeeds = book2 * perBook2PaperNeeds;
 const totalBook3PaperNeeds = book3 * perBook3PaperNeeds;

 const totalPaperRequirements = totalBook1PaperNeeds + totalBook2PaperNeeds + totalBook3PaperNeeds;

 return totalPaperRequirements;
}
const totalPaperNeeds = paperRequirements(3, 2, 2);
console.log(totalPaperNeeds);