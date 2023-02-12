
import './App.css';
// test
import Header from './Header.js';
import Content from './Content';
import Footer from './Footer.js';
import Massege from './Massege'
import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="App">
//      hello react
//     </div>
//   );
// }
class App extends Component {
  
constructor(){
  super();
  this.state ={
    nameuser :"slamah"
  }
}

  render() {
    return (
      <>
    <Header/>
    <Content test={this.state.nameuser}/>
    <Massege info={ [
        {bookTitle:'Becoming Free Indeed',
         author:'Mary Pope Osborne ',
        description:`Jinger Vuolo, the sixth child in the famous Duggar family of TLC's 19 Kids and Counting and Counting On, recounts how she began to question the unhealthy ideology of her youth and learned to embrace true freedom in Christ`,
        bookImage:'https://m.media-amazon.com/images/I/61zHWm8mvQL._SX338_BO1,204,203,200_.jpg'},
        {bookTitle:'Afternoon on the Amazon',
         author:'Jinger Vuolo',
        description:`Vampire bats and killer ants? That's what Jack and Annie are about to run into when the Magic Tree House whisks them away to the Amazon River. It's not long before they get hopelessly lost. Will they be able to find their way back `,
        bookImage:'https://m.media-amazon.com/images/P/1949078205.01._SCLZZZZZZZ_SX500_.jpg'},
        {bookTitle:'Hannah Saves the World',
         author:'Luzzader ',
        description:`Hannah’s got a funny feeling that it’s up to her to save the entire world, but before she can do so, she and her skeptical best friend Mia have to figure out what they’re saving the world from! As the girls’ detective work proceeds.`,
        bookImage:'https://m.media-amazon.com/images/I/51neNJ95N-L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'},
      ]
}/>
    <Footer/>
    </>
    )
  }
}
export default App;
