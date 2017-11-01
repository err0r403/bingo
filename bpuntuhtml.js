<!doctype html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
      #messages { margin-bottom: 40px }
      .tile {     height: 100px;
          border: 1px solid black;
          float: left;
          margin-left: -1px;
          margin-bottom: -1px;
          text-align: center;
          vertical-align: middle;
          width: 64px;
          height: 64px;
          list-style-type: none;
          background: #F39FAC; 
        }
      .nro{ width: 64px;
        height: 64px;
        float: left;
        line-height: 64px;
        font-size: 64px; 
      }
      .nro>h1{
        height: 64px;
        width: 64px;
        margin: 0;
        line-height: 64px;
        color: black;
        text-shadow: 1px 1px 1px white;
      }
      .pressed{
        background: #5cb85c;
      }
      .cartilla{
        bottom: 0;
        margin: auto;
        position: fixed;
        left: 0;
        right: 0;
      }
      .anterior{
        color: red;
        font-size: 5.5rem;
      }
      .ultimo{
        color: black;
        font-weight: 900;
        font-size: 7.5rem;
      }
    </style>
  </head>
  <body>
  <div class="container tablero">
    <div class="row">
      <div class="col-md-6">
        <h1>ANTERIOR</h1>
        <span class="anterior">B1</span>
      </div>
      <div class="col-md-6">
        <h1>ÚLTIMO</h1>
        <span class="ultimo">O69</span>
      </div>
    </div>
  </div>
  <div class="container cartilla">
    <div class="row">
        <div class="col-md-12">
           <a href="#" class="tile pressed"><div class="nro"><h1 id="">B</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B1">1</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B2">2</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B3">3</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B4">4</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B5">5</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B6">6</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B7">7</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B8">8</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B9">9</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B10">10</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B11">11</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B12">12</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B13">13</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B14">14</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="B15">15</h1></div></a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
           <a href="#" class="tile pressed"><div class="nro"><h1 id="">I</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I16">16</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I17">17</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I18">18</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I19">19</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I20">20</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I21">21</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I22">22</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I23">23</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I24">24</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I25">25</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I26">26</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I27">27</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I28">28</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I29">29</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="I30">30</h1></div></a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
           <a href="#" class="tile pressed"><div class="nro"><h1 id="">N</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N31">31</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N32">32</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N33">33</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N34">34</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N35">35</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N36">36</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N37">37</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N38">38</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N39">39</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N40">40</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N41">41</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N42">42</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N43">43</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N44">44</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N45">45</h1></div></a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
           <a href="#" class="tile pressed"><div class="nro"><h1 id="">G</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N46">46</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N47">47</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N48">48</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N49">49</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N50">50</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N51">51</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N52">52</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N53">53</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N54">54</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N55">55</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N56">56</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N57">57</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N58">58</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N59">59</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="N60">60</h1></div></a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
           <a href="#" class="tile pressed"><div class="nro"><h1 id="">O</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O61">61</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O62">62</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O63">63</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O64">64</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O65">65</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O66">66</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O67">67</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O68">68</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O69">69</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O70">70</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O71">71</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O72">72</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O73">73</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O74">74</h1></div></a>
           <a href="#" onclick="marcar(this)" class="tile"><div class="nro"><h1 id="O75">75</h1></div></a>
        </div>
    </div>
  </div>  
<!-- <div class="container">
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
</div> -->
    <script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.1.js"></script>

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script>
    function marcar(tile){
      //$(tile).toggleClass('pressed');
      var nro = jQuery(tile).find('h1');
      // console.log($(nro).html());
      // console.log($(nro).attr('id'));
      // console.log($(tile).html());
      var socket = io();
      socket.emit('ultimo numero', $(nro).attr('id'));
    }
      $(function () {
        var socket = io();
        $('form').submit(function(){
          socket.emit('chat message', $('#m').val());
          $('#m').val('');
          return false;
        });
        socket.on('chat message', function(msg){
          $('#messages').append($('<li>').text(msg));
          window.scrollTo(0, document.body.scrollHeight);
        });
        socket.on('ultimo numero', function(nro){
          console.log(nro);
          $('#'+nro).parents('a').toggleClass('pressed');
        });
      });
    </script>
  </body>
</html>
