//const todoTitle = "Call Family"
//const todoDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

//const headingStyle={
// backgroundColor : "purple",
//  color : "white",
//  textAlign : "center",
//  padding : "15px",
//}

function Card(props){
const {titleText,descText} =props;
  return  <div className="card">
           <h3 className="cardTitle">{titleText}</h3>
           <p className="cardDesc">{descText}</p>
           <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
         </div>
}
export default Card;