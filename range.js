module.exports=(req,res,next)=>{
    res.header('Content-Range','meals 0-20/20')
    next()
}