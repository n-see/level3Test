interface Props {
    children: string
    color: string
    handleClick: () => void
    group?: string
}

const Button = ({children, color, group, handleClick}:Props ) => {
  return (
    <>
        <button className={`btn btn-${color} ${group}`} onClick={handleClick}>{children}</button>
    </>
  )
}

export default Button