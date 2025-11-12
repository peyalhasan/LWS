import { useState } from "react";

// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useImmer(0);

//   function handleClick() {
//     setIndex(index + 1);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
      
//     </>
//   );
// }
// let guest = 0;

// function Guest() {
//   guest = guest + 1;
//   return <h2>Your Guest id is - #{guest}</h2>;
// }

// export  function TeaSet() {
//   return (
//     <>
//       <Guest />
//       <Guest />
//     </>
//   );
// }

export function App() {
  // const [position, setPosition] = useImmer({
  //   x: 0,
  //   y: 0
  // });
  return (
    <div>
      <div>
        {/* <Form></Form> */}
      </div>
      <div>
        {/* <Form1></Form1> */}
      </div>
      <div>
        {/* <List></List> */}
      </div>
      <div>
        <BucketList></BucketList>
      </div>
   {/* */} 
    </div>
  );
}

//  function Form() {
//   const [person, setPerson] = useImmer({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com'
//   });

//   function handleChange(e) {
//     setPerson({
//       ...person,
//       [e.target.name]: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           name="firstName"
//           value={person.firstName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           name="lastName"
//           value={person.lastName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           name="email"
//           value={person.email}
//           onChange={handleChange}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>
//     </>
//   );
// }


//  function Form1() {
//   const [person, setPerson] = useImmer({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
//       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     setPerson({
//       ...person,
//       name: e.target.value
//     });
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleTitleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleCityChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleImageChange}
//         />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {' by '}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img 
//         src={person.artwork.image} 
//         alt={person.artwork.title}
//       />
//     </>
//   );
// }


// export default function Form() {
//   const [person, setPerson] = useState({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
//       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     setPerson({
//       ...person,
//       name: e.target.value
//     });
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input
//           value={person.name}
//           onChange={handleNameChange}
//         />
//       </label>
//       <label>
//         Title:
//         <input
//           value={person.artwork.title}
//           onChange={handleTitleChange}
//         />
//       </label>
//       <label>
//         City:
//         <input
//           value={person.artwork.city}
//           onChange={handleCityChange}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           value={person.artwork.image}
//           onChange={handleImageChange}
//         />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {' by '}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img 
//         src={person.artwork.image} 
//         alt={person.artwork.title}
//       />
//     </>
//   );
// }


// let nextId = 3;
// const initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];
//  function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState(
//     initialArtists
//   );

//   function handleClick() {
//     const insertAt = 1; // Could be any index
//     const nextArtists = [
//       // Items before the insertion point:
//       ...artists.slice(0, insertAt),
//       // New item:
//       { id: nextId++, name: name },
//       // Items after the insertion point:
//       ...artists.slice(insertAt)
//     ];
//     setArtists(nextArtists);
//     setName('');
//   }

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={handleClick}>
//         Insert
//       </button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {
    const myNextList = myList.map(artwork => {
      if(artwork.id === artworkId){
        return {...artwork, seen: nextSeen}
      }
      else{
        return artwork
      }
    })
    const artwork = myNextList.find(
      a => a.id === artworkId
    );
    artwork.seen = nextSeen;
    setMyList(myNextList);
  }

  function handleToggleYourList(artworkId, nextSeen) {
    const yourNextList = yourList.map(artwork=>{
      if(artwork.id === artworkId){
        return {...artwork, seen: nextSeen}
      }
      else{
        return artwork;
      }
    });
    const artwork = yourNextList.find(
      a => a.id === artworkId
    );
    artwork.seen = nextSeen;
    setYourList(yourNextList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

