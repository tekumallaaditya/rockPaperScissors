var expect  = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
var request = require('request');
var app = require('../app');
var main = require('../public/js/main');
var assert  = require('chai').assert;
var express = require('express');
var main = require('../public/js/main');
chai.use(chaiHttp);

describe('routing', function(){
    it('home page', function(done){
        request('http://localhost:8080/', function(err, res, body){
            expect(res.statusCode).to.equal(200)
            done();
        });
    });

    it('gotoCompVsComp', function(done){
        request('http://localhost:8080/gotoCompVsComp', function(err, res, body){
            expect(res.statusCode).to.equal(200)
            done();           
        });
        
    });

    it('goToHome', function(done){
        request('http://localhost:8080/goToHome', function(err, res, body){
            expect(res.statusCode).to.equal(200)
            done();          
        });
        
    });

        
    
   
});

describe('testing external js', function(){
    before(() => {
        const { JSDOM } = require("jsdom"); 
        const myJSDom = new JSDOM ();
        const $ = require('jquery')(myJSDom.window);
        global.$ = $;
      });
    it('roundCount should return comp the winner', function(){
       var res =  main.roundCount(10, 4, 5);
       expect(res).to.equal('comp is the winner');
    });
    it('roundCount should return comp the winner', function(){
        var res =  main.roundCount(10, 6, 2);
        expect(res).to.equal('player is the winner');
     });
     it('roundCount should return a tie', function(){
        var res =  main.roundCount(10, 4, 4);
        expect(res).to.equal('it is a tie');
     });
     it('function winner() should return player as the winner', function(){
        var res =  main.winner('rock', 'scissors');
        expect(res).to.equal('player is the winner');
     });
     it('function winner() should return player as the winner', function(){
        var res =  main.winner('paper', 'rock');
        expect(res).to.equal('player is the winner');
     });
     it('function winner() should return player as the winner', function(){
        var res =  main.winner('scissors', 'paper');
        expect(res).to.equal('player is the winner');
     });
     it('function winner() should return player as the winner', function(){
        var res =  main.winner('rock', 'paper');
        expect(res).to.equal('comp is the winner');
     });
     it('function winner() should return player as the winner', function(){
        var res =  main.winner('paper', 'scissors');
        expect(res).to.equal('comp is the winner');
     });
     it('function winner() should return player as the winner', function(){
        var res =  main.winner('scissors', 'rock');
        expect(res).to.equal('comp is the winner');
     });
     it('compChoose() shold return one choice', function(){
         var res = main.compChoose();
         expect(res).to.satisfy(function(res){
             if((res == 'rock') || (res == 'paper') || (res == 'scissors')){
                 return true;
             } else {
                 return false;
             }
         });
     });
     it('scissors() function should set playermove as scissors', function(){
         var res = main.scissors();
         expect(res).to.equal('scissors');
     });
     it('paper() function should set playermove as paper', function(){
        var res = main.paper();
        expect(res).to.equal('paper');
    });
    it('rock() function should set playermove as rock', function(){
        var res = main.rock();
        expect(res).to.equal('rock');
    });
});



      


