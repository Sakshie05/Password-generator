import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState();

  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbers) str += "0123456789";

    if(characters) str+="!@#$%^&*()-_+{}[]:;><?/|~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);  
    }

    setPassword(pass);

  }, [length, numbers, characters, setPassword]);

  let copyPassword = useCallback(() =>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    generatePassword()
  }, [length, numbers, characters, generatePassword])

  return (
    <div>
      <h1 className = "text-5xl font-bold text-center text-pink-300 bg-pink-100">Password Generator</h1>
      <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
        {/* Input and Copy Button */}
        <div className="flex items-center space-x-2 mb-6">
          <input
            type="text"
            placeholder = "Password"
            value = {password}
            readOnly
            className="flex-1 bg-pink-50 text-pink-700 font-mono px-4 py-2 rounded-xl 
            border border-pink-200 focus:outline-none"
            ref={passRef}
          />
          <button className="bg-pink-300 text-white px-4 py-2 rounded-xl shadow 
          hover:bg-pink-400 transition" onClick = {copyPassword}>
            copy
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-pink-700">
            <label htmlFor="length" className="font-semibold">Length {length}</label>
            <input type="range" id="length" min={4} max={32} value={length} className="accent-pink-400"
            onChange={(e) => {setLength(e.target.value)}}/>
          </div>

          <div className="flex items-center space-x-4 text-pink-700">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-pink-400" onChange={() => {
                setNumbers((prev) => !prev)
              }}/>
              <span>Numbers</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked = {numbers} className="accent-pink-400" 
              onChange={() => { setCharacters((prev) => !prev)}}/>
              <span>Characters</span>
            </label>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
