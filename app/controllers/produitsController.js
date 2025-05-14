const produitsList = require('../../data/products.json')

const  produitsController = {
    getProduitslistPage : (req ,res) =>{
        res.render('produitsList.ejs' , {produitsList}) 
    },

    getProduitDetails : (req , res) =>{

    const produitId = Number(req.params.id);
    console.log(produitId);
    const produitSearch = produitsList.find(produitSearch => produitSearch.id == produitId); 
res.render('produitDetails.ejs' , {produitSearch});

}
}
    module.exports = produitsController