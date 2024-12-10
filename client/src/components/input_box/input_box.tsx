import "./input_box.css"

interface InputBoxProps{
    label?: string
    lines?: number
    width?: string
}

export function InputBox({label, lines, width}: InputBoxProps){
    return (
        <div className="inputBox-container" style={{width: width}}>
            {label ? <p className="inputBox-label text">{label}</p> : ""}
            {   
                lines && lines > 1 ? 
                    <textarea className="inputBox-input text" rows={lines}>

                    </textarea>
                :
                    <input className="inputBox-input text">

                    </input>
            }
        </div>
    )
}