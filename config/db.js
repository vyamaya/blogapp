if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://yamaya:yamaya123@cluster0.mtwm6.mongodb.net/blogapp?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}