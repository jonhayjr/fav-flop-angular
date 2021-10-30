import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-practice';
  isSelected = -1;

  //Method to hide elements
  hideElement(index: any) {
    //If index is selected, 'chosen' paragraph should not be hidden.
    if (index === this.isSelected) {
      return false;
    }
    return true;
  }

  //Method that displays text for button
  getButtonText(index: any) {
    //If index is selected, return 'Unvote.  In all other scenarios, return 'Vote'
    if (index === this.isSelected) {
      return 'Unvote';
    }
    return 'Vote';
  }

  disableButton(index: any) {
    //If isSelect isn't one or isSelected equals index, button should display
     if (this.isSelected === -1 || this.isSelected === index)  {
      return false;
    } 
    return true;
  }

  //Method that handles button click
  onClick(index: number) {
    //Set isSelected to index.  If index was selected previously, set to -1
    this.isSelected = this.isSelected === index ? -1 : index;
    this.disableButton(index);
    this.getButtonText(index)
    this.hideElement(index);
  }

  // onClick(event: any) {

  //   //Get all buttons
  //   const buttons = document.querySelectorAll('button');
  //     //Loop through all buttons
  //     for(let i = 0; i < buttons.length; i++) {
      
  //     //Get parent element
  //     const parent: any = buttons[i].parentNode;
  //     //Get id from parent element
  //     const id: any = parent.id;
      
  //     //if parent id doesn't equal parent id of button that was clicked, disable it.
  //     if (id !== event.target.parentNode.id && event.target.innerText === 'Vote') {
  //       buttons[i].disabled = true;
  //     } else {
  //       buttons[i].disabled = false;
  //     }
  //   }


  //   //Get all 'chosen paragraphs
  //   const chosenParagraphs = document.querySelectorAll('p.chosen');
  //   //Loop through all 'chosen' paragraphs
  //   for(let i = 0; i < chosenParagraphs.length; i++) {
  //     //Get parent element
  //     const parent: any = buttons[i].parentNode;
  //     //Get id from parent element
  //     const id: any = parent.id;

  //     //If paragraph has 'show' class, update it to 'hide' class.
  //     if (id !== event.target.parentNode.id && chosenParagraphs[i].className === 'show chosen') {
  //         chosenParagraphs[i].className = 'hide chosen';
  //     }
  //   }

  //   //For clicked button, update text based on previous text value.
  //   //If button text is 'Vote', change to 'Unvote' and add 'show' class to 'chosen' paragraph.
  //   //If button text is 
  //   if (event.target.innerText === 'Vote') {
  //     event.target.innerText = 'Unvote';
  //     event.target.previousSibling.className = 'show chosen';
  //   } else {
  //     event.target.innerText = 'Vote';
  //     event.target.previousSibling.className = 'hide chosen';
  //   }

  // }

}
