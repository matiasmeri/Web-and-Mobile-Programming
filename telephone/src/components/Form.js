import React from 'react'

const Form = ({handlers, name, number}) => {

return(
  <form onSubmit={handlers.submit}>
    <div>
      Nimi: <input value={name}
      onChange={handlers.name}
      />
    </div>
    <div>
      Numero: <input value={number}
      onChange={handlers.number}
      />
    </div>
    <div>
      <form onSubmit={handlers.submit}>
        <button type="submit">lisää</button>
      </form>
    </div>
  </form>
  )
}

export default Form
