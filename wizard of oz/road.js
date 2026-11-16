// Draws the wavy brick road to fit the page. Change AMP and PERIOD to reshape the waves.
(function(){
var map=document.querySelector('.map'),svg=document.querySelector('.road-svg');
if(!map||!svg)return;
var edge=svg.querySelector('.edge'),top=svg.querySelector('.top');
function draw(){
  var w=map.clientWidth,h=map.clientHeight,narrow=w<600;
  var amp=w*(narrow?0.06:0.055),period=narrow?420:560,width=narrow?74:116,d='';
  svg.setAttribute('viewBox','0 0 '+w+' '+h);
  for(var y=0;y<=h;y+=8){d+=(y?'L':'M')+(w/2+amp*Math.sin(2*Math.PI*y/period)).toFixed(1)+' '+y+' ';}
  edge.setAttribute('d',d);top.setAttribute('d',d);
  edge.setAttribute('stroke-width',width+12);top.setAttribute('stroke-width',width);
}
draw();window.addEventListener('resize',draw);window.addEventListener('load',draw);
})();
