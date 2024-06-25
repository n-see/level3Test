interface Props {
    children: string
    color: string
    handleClick: () => void
}

const Button = ({children, color, handleClick}:Props ) => {
  return (
    <>
        <button className={`btn btn-${color}`} onClick={handleClick}>{children}</button>
    </>
  )
}

export default Button