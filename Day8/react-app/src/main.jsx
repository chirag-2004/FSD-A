import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DisplayMarks } from './DisplayMarks.jsx'
// import Marks from './Marks.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App s1={'Chirag Gupta'} s2={'chirag.22b1541196@abes.ac.in'}  s3={6398153240}/>
    {/* <Marks m1={85} m2={88} m3={84} /> */}
  <App s1={'Akhil Vikram'} s2={'akhil.22b1541154@abes.ac.in'}  s3={7895433420}/>
    {/* <Marks m1={98} m2={78} m3={86} /> */}
    <DisplayMarks />
  </StrictMode>
)
