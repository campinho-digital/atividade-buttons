import "./Button.css";

const Button = ({disabled, styleType, text, type, onClick}) => {

  const handleClickDefault = () => console.log("Clicou em Default")
  const handleClickAdd     = () => console.log("Clicou em Adicionar")
  const handleClickClear   = () => console.log("Clicou em Limpar")
  const handleClickRemove  = () => console.log("Clicou em Remover")
  const handleClickSend    = () => console.log("Clicou em Enviar")

  return(
    <button
      className = {styleType ? `button ${styleType}` : "button"}
      disabled = { disabled ? disabled : true }
      onClick = {
        onClick === "add" ? handleClickAdd
        : onClick === "remove" ? handleClickRemove
        :  onClick === "clear" ? handleClickClear
        : onClick === "send" ? handleClickSend
        : handleClickDefault
      }
      type = {type ? type : "button"}
    >
      <span>{text}</span>
    </button>
  )
}

export default Button