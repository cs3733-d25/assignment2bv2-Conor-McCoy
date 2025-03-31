import './App.css'
import './assets/components/intro.tsx'
import './assets/components/hobby1.tsx'
import Intro from "./assets/components/intro.tsx";
import Hobby1 from "./assets/components/hobby1.tsx"

function App() {

  return (
    <div>
        TITLE
        <br/>
        <Intro name1={"Conor"} name2={"Ayush"} />
        <br/>
        <Hobby1/>
        <br/>
        HOBBY2
    </div>
  )
}

export default App
