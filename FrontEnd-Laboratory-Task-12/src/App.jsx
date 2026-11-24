export function Header(){
  return(
    <>
      <h1>Header Component</h1>
    </>
  )
}

function Footer(){
  return(
    <>
      <h1>Footer Component</h1>
    </>
  )
} 

function PersonDetails(){
  let name = "Johny";
  let age = 25; 
  let location = "New York";
  let food = "Pizza";
  return(
    <article>
      <h1>Person Details</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Location: {location}</h2>
      <h2>Favorite Food: {food}</h2>
    </article>
  )
}

function Person(){
  return(
    <>
      <h1>Person Component</h1>
    </>
  )
}

function App(){
  return(
    <>
      <Header />
      <PersonDetails />
      <Footer />  
    </>

  )
}

export default App;