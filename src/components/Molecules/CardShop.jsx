import React from 'react'
import '../../assets/styles/Shopping.css'
import AutoCADwhile from '../../assets/Images/AutoCADwhile.svg'
import BasicaLevel from '../../assets/Images/BasicaLevel.svg'

function CardShop() {
  return (
    <div>
        <div class="row" data-aos="fade-right">
                <div class="row_iconos">
                    <img src={AutoCADwhile} alt="Icono" />
                    <h1>AutoCAD</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff2" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,229.3C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
    
                <div class="row_text"> 
                    <h3>Autodesk AutoCAD para Diseño, Interiorismo y Arquitectura</h3>
    
                    <div class="row_basicoImg">
                        <img src={BasicaLevel} alt="Basico" />
                        <h6>Basico</h6>
                    </div>
    
                </div>
    
                <div class="row_rating">
                    <div class="star">
                        <a href="#"><i class='bx bxs-star'></i></a>
                        <h4>5.0</h4>
                    </div>
                </div>
    
                <div class="precios">
                    <div class="subPrecio">
                        <h3>$600</h3>
                        <h4><del>$900</del></h4>
                    </div>

                    <div class="carritoTitle">
                        <button>Añadir al carrito</button>
                    </div>
                </div>
    
                <hr />
    
                <div class="perfil">
                    <div class="LogoProfe">
                        <img src="" alt="img" />
                        <h3>Profe: jose mendez</h3>
                    </div>
    
                    <img src="" alt="" />
                </div>
            </div>
    </div>
  )
}

export default CardShop