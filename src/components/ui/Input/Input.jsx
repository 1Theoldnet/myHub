import './Input.scss'

export const Input = ({ disabled, value, placeholder, onChange }) => {
    return (
        <>
            <input className={disabled ? 'inp-dis' : 'inp'} onChange={onChange} placeholder={placeholder} value={value} disabled={disabled} />
            <div className="bottom"></div>
        </>
    )
}