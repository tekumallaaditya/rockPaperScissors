
exports.home = function(req, res){
    console.log('inside the home route');
    res.render('home');    
}

exports.getName = function(req, res){
    console.log('inside the getName route' + req.body.playerName);
    res.render('youVScomp', {name: req.body.playerName});
}

exports.goHome = function(req, res){
    console.log('inside the goHome function');
    res.render('home');
}

exports.gotoCompVsComp = function(req, res){
    console.log('inside the function gotoCompVsComp');
    res.render('compVScomp');
}