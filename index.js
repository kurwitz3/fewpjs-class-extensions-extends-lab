class Polygon{
    constructor(array){
        this.array = array 
    }
    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce((acc,value) => {return acc + value})
    }
}

class Triangle extends Polygon{

    get isValid(){
     let sorted = this.array.sort(function(a,b){return a-b})
        if(sorted[0] + sorted[1] > sorted[2] &&
           sorted[1] + sorted[2] > sorted[0] &&
           sorted[2] + sorted[0] > sorted[1]){
            return true
        }
        else{
            return false 
        }
    }
}

class Square extends Polygon{

    get isValid(){
      let  square = this.array
      if(square[0] === square[1] && square[0] === square[2] 
        && square[0] === square[3]){
            return true
        } 
        else{
            return false 
        }
    }

    get area(){
        let area = this.array 
        return area[0] * area[1]
    }
}