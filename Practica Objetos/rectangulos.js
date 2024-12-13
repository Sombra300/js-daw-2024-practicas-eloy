function Rectangulo(widht, height){
    widht=parseInt(widht),
    height=parseInt(height)
    if(widht>0 && widht!==NaN){
        this.widht=widht
    }else{
        this.widht=1
    }
    if(height>0 && height!=NaN){
        this.height=height
    }else{
        this.height=1
    }
    this.area=(this.widht*this.height),
 
 
    this.cambiarDimensiones=function(anchoNuev, altoNuev){
        if(anchoNuev>0 && anchoNuev!==NaN){
            this.widht=anchoNuev
        }else{
            this.widht=1
        }
        if(altoNuev>0 && altoNuev!=NaN){
            this.height=height
        }else{
            this.height=1
        this.area=(this.widht*this.height);
        }
    }


    this.calcularArea=function(){
        return `${this.height}*${this.widht}=${this.area}`;
    }
 
 
    this.comparar=function(){
    }

    this.comparar = function(otroRectangulo) {
        const areaActual = this.calcularArea()
        const areaOtro = otroRectangulo.calcularArea()

        if (areaActual > areaOtro) {
            return "mayor"
        } else if (areaActual < areaOtro) {
            return "menor"
        } else {
            return "igual"
        }
    }
}

Rectangulo.calcularAritmetMed = function(rectangulos) {
    const sumaAreas = rectangulos.reduce((suma, rect) => suma + rect.area, 0)
    return sumaAreas / rectangulos.length
}

 let rectagulo1=new Rectangulo(7, 7)
 let rectagulo2=new Rectangulo(7, 7)

 console.log(rectagulo1.comparar(rectagulo2))
 console.log(rectagulo1.calcularArea())

 rectagulo1.cambiarDimensiones(8,9)
 console.log(rectagulo1.calcularArea())

 console.log(rectagulo1.comparar(rectagulo2))

 rectagulo1.cambiarDimensiones(4,7)
 console.log(rectagulo1.comparar(rectagulo2))

 const rectangulosLista = [rectagulo1, rectagulo2]
 console.log(Rectangulo.calcularAritmetMed(rectangulosLista))