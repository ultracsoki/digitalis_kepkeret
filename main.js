import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

document.addEventListener('DOMContentLoaded', init);

function init()
{
  //document.getElementById('gombMehet').addEventListener('click',kepGeneralas);
  document.getElementById('url').addEventListener('focusout',kepGeneralas);
  document.getElementById('buttonTheme').addEventListener('click',themeChanger);
  document.getElementById('szelesseg').addEventListener('keypress',kepGeneralas);
  document.getElementById('szelesseg').addEventListener('keyup',kepGeneralas);
  document.getElementById('szelesseg').addEventListener('keydown',kepGeneralas);
  document.getElementById('vastagsag').addEventListener('keypress',kepGeneralas);
  document.getElementById('vastagsag').addEventListener('keyup',kepGeneralas);
  document.getElementById('vastagsag').addEventListener('keydown',kepGeneralas);
  document.getElementById('kepkeretSzin').addEventListener('input',kepGeneralas);
}

function kepGeneralas()
{
  if(document.getElementById('url').value != "")
  {
    document.getElementById("kep").src = document.getElementById('url').value;
  }
  if(document.getElementById('szelesseg').value != "")
  {
    document.getElementById('kep').width = document.getElementById('szelesseg').value;
  }
  let vastagseg = document.getElementById('vastagsag').value;
  let szin = document.getElementById('kepkeretSzin').value;
  let keret = vastagseg + "px solid " + szin;
  document.getElementById('kep').style.border = keret;
}

function themeChanger()
{
  var element = document.body;
  element.classList.toggle("dark-mode");
  var footer = document.footer;
  footer.classList.toggle("dark-mode");
}