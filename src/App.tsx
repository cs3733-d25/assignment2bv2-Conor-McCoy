import './App.css'
import './assets/components/intro.tsx'
import './assets/components/hobby1.tsx'
import Title from "./assets/components/title.tsx"
import Intro from "./assets/components/intro.tsx";
import Hobby1 from "./assets/components/hobby1.tsx"
import Hobby2 from "./assets/components/hobby2.tsx"

function App() {

  return (
    <div>
        <Title />
        <br/>
        <Intro name1={"Conor"} name2={"Ayush"} />
        <br/>
        <Hobby1/>
        <br/>
        <Hobby2/>
    </div>
  )
}

export default App
