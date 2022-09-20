import React from 'react'

function Form() {
  return (
    <div className="form-container">
        <h1>Add Your Own Quote</h1>
        <form>
          <div>
            <label>Your name</label>
            <input placeholder="Enter your name"/>
          </div>
          <div>
            <label>Quote Text</label>
            <input placeholder="Enter the quote text"/>
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form