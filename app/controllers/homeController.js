const  homeController = {
    getHomePage : (req ,res) =>{
        res.render('home.ejs'); 
    }
};
    module.exports = homeController;