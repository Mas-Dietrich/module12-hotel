// what is the path to the JSON file?
const apiURL = "../hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i=0; i < myList.length; i++) {
    
    let myImageTag = document.createElement('img');
    myImageTag.src = myList[i].photo;

    let myyFigcaptionTag = document.createElement("figcaption");
    myyFigcaptionTag.textContent = myList[i].name;
    
    let myFigureTag = document.createElement('figure');
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myyFigcaptionTag);

    let myDiv = document.createElement('div')
    myDiv.className = "infoColumns"
    
    let myCarIcon = document.createElement('i')
    myCarIcon.className = "icon ion-md-car"

    let myDirections = document.createElement('p')
    myDirections.textContent = myList[i].address;

    let myAddressSpan = document.createElement('span')
    myAddressSpan.appendChild(myCarIcon)
    myAddressSpan.appendChild(myDirections)


    let myPhoneIcon = document.createElement('i')
    myPhoneIcon.className = "icon ion-md-call"
    

    let myPhoneNumber = document.createElement('p')
    myPhoneNumber.textContent = myList[i].phone


    let myPhoneSpan = document.createElement('span')
    myPhoneSpan.appendChild(myPhoneIcon)
    myPhoneSpan.appendChild(myPhoneNumber)



    myDiv.appendChild(myAddressSpan)
    myDiv.appendChild(myPhoneSpan)


    let inventoryWrapper = document.createElement('div')
    inventoryWrapper.className="inventoryWrapper";

    inventoryWrapper.appendChild(myFigureTag);
    inventoryWrapper.appendChild(myDiv)

    document.getElementById('myCards').appendChild(inventoryWrapper)

    }
}); //end of "then" fat arrow function