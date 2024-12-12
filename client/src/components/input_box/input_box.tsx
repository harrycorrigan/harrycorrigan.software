import "./input_box.css"

interface InputBoxProps{
    onChange: (value: string) => any
    currValue?: string
    errorMsg?: string
    label?: string
    lines?: number
    width?: string
}

export function InputBox({onChange, currValue, label, lines, width}: InputBoxProps){
    return (
        <div className="inputBox-container" style={{width: width}}>
            {label ? <p className="inputBox-label text">{label}</p> : ""}
            {   
                lines && lines > 1 ? 
                    <textarea onChange={(e) => {onChange(e.currentTarget.value)}} value={currValue} className="inputBox-input text" rows={lines}>

                    </textarea>
                :
                    <input onChange={(e) => {onChange(e.currentTarget.value)}} value={currValue} className="inputBox-input text">

                    </input>
            }
        </div>
    )
}