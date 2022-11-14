import React from "react"
class ClaseColaboradores extends React.Component {
    render() {
        return (
            <div >
                <h1>{this.props.Nombre}</h1>
                <a href="#">
                    <  img className="ImagenColaborador" src={this.props.img} alt="Vista Previa" /></a>
                <h3 className="Descripcion">Descripcion</h3>
                <p className="Parrafo"> {this.props.Descripcion}</p>
            </div>
        )
    }
}

export default ClaseColaboradores;