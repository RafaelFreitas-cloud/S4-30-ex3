function DNAStrand(dna){
    let complementar = ""
    for(let i=0; i<dna.length;i++){
        
        if(dna[i]=="A"){
            complementar+="T"
        }else if(dna[i]=="T"){
            complementar+="A"
        }else if(dna[i]=="G"){
            complementar+="C"
        }else if(dna[i]=="C"){
            complementar+="G"
        }
        
       
    }
return `${complementar}, String ${dna} is`
}

let dna = "AATCG" 
console.log(dna)
console.log(DNAStrand(dna))

// console.log(listadna)
// listadna=listadna.replace(/A/g,"T")
// listadna=listadna.replace(/T/g,"A")
// console.log(listadna)
// listadna=listadna.replace
