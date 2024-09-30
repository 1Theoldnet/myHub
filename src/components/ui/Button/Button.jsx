import './Button.scss'

export const Button = ({ children, disabled, onClick, height, width }) => <button style={{ width: width, height: height }} className={disabled ? 'btn-dis' : 'btn'} disabled={disabled} onClick={onClick}>{children}</button>