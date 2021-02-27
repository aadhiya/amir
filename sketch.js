var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1;
var bg="bg.png"
var backgroundimage
var score=0
var castle
var cannon
var cloud
var flyingMan,ManFlying

function preload(){
   GetBackgroundImage()
    castle=loadImage("castle_4.png")
cannon=loadImage("cannon.png")
cloud=loadImage("cloud.png")
ManFlying=loadImage("flyingMan.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

  database = firebase.database();
  flyingMan=new Flyingman(400,800,80)
cannon=new Cannon(flyingMan.body,{x:400,y:800})
  game =new Game()
  game.start()
}


function draw(){
    if(backgroundimage)  
    background(backgroundimage);
}
async function GetBackgroundImage(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime
    var hour=datetime.slice(11,13)
    if(hour>=06&&hour<=19){
        bg="bg.png"
    }else{
        bg="bg2.jpg"
    }
    backgroundimage=loadImage(bg)
    }