import './App.css';

let games = ["Game Boy - Nintendo Switch Online", "Game Boy Advance - Nintendo Switch Online", "Hyrule Warriors: Age of Calamity", "Lego City Undercover", "Lego Star Wars: The Skywalker Saga", "Mario Kart 8", "Nintendo 64 - Nintendo Switch Online", "Nintendo Entertainment System - Nintendo Switch Online", "Pokemon Violet", "Sega Genesis - Nintendo Switch Online", "Sega Genesis Classics", "Sonic x Shadow Generations", "Super Nintendo - Nintendo Switch Online", "Super Smash Bros Ultimate", "The Legend of Zelda: Breath of the Wild", "The Legend of Zelda: Echoes of Wisdom", "The Legend of Zelda: Link's Awakening", "The Legend of Zelda: Skyward Sword", "The Legend of Zelda: Tears of the Kingdom", "Transformers: Galactic Trials"];



function game() {
  console.log(games);

  let listNumber = Math.floor(Math.random() * games.length);

  console.log(listNumber);

  let chosenGame = games[listNumber];

  console.log(chosenGame);
}

game();

function App() {
return (
  <>
    <h1>Which Game should you play?</h1>
    <div>
      
    </div>
    </>
  );
}

export default App;
