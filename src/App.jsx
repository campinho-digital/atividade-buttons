import React from "react"
import Button from "./components/Button/Button"

import "./index.css"

const App = () => {
  return(
    <div className="app-wrapper">
      <Button
        disabled={false}
        onClick="send"
        styleType="button-send"
        text="Enviar"
        type="submit"
      />

      <Button
        disabled={false}
        onClick="add"
        styleType="button-add"
        text="Adicionar"
      />

      <Button
        disabled={false}
        onClick="remove"
        styleType="button-remove"
        text="Remover"
      />

      <Button
        disabled={false}
        onClick="clear"
        styleType="button-clear"
        text="Limpar"
      />

      <Butto text="Default"/>
    </div>
  )
}

export default App
