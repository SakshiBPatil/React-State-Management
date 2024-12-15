import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className="card text-center p-4 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#ffffffcc' }}>
          <div className="card-body">
            <h2 className="card-title mb-4" style={{ color: '#6a11cb' }}>
              Counter App
            </h2><hr></hr>
            <h2 className="mb-4" style={{ fontWeight: 'bold', fontSize: '2rem' }}>
              Count = {count}
            </h2>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-success mx-2"
                style={{ fontWeight: 'bold' }}
                onClick={() => setCount(count + 1)} >
                Increment
              </button>
              <button
                className="btn btn-danger mx-2"
                style={{ fontWeight: 'bold' }}
                onClick={() => setCount(count - 1)}
                disabled={count === 0} >
                Decrement
              </button>
              <button
                className="btn btn-secondary mx-2"
                style={{ fontWeight: 'bold' }}
                onClick={() => setCount(0)}
                disabled={count === 0} >
                Reset
              </button>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
