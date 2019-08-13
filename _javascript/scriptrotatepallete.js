/*Responsável por gerar o comportamento da paleta de esmaltes.
Ex. de usabilidade:

1 - No primeiro seguir a paleta gera em rotação contrária ao movimento do mouse:;
          var mY = 0,
          elementoPai = $('#rotated .items');
          $('#rotated').mousemove(function(e) {

              // moving upward
              if (e.pageY < mY) {
                  aOff = aOff - (e.pageY - mY)//(aOff + 1) ;
                  position(aOff, elementoPai);

              // moving downward
              } else {
              	  aOff = aOff - (e.pageY - mY)//(aOff + 1) ;
                  position(aOff, elementoPai);
              }

              // set new mY after doing test above
              mY = e.pageY;

          	});

2 - No segundo exemplo é utilizado um efeito animation para girar a paleta

       $('#teste').click(function ()
         {      
                var elementoPai = $('#rotated .items');

                $(this).animate({tabIndex: 0},
	           {
	              duration: 6000,
	              easing: 'linear',
	              step: function (now, fx) { 
	              aOff = 360 * fx.pos; 

	              position(aOff, elementoPai);}
	           });

        });

*/
			var aOff = 0;

			function getAOFFPosition(){
				return aOff;
			}

            function position(vOff, elementoPai)
            {
               aOff = vOff;
               var items = $(elementoPai).children(),//$('#rotated .items').children(),
                   icnt = items.length,
                   dstep = 360 / icnt;

               items.each(function (idx, el)
                {
                    var el = $(el),
                        a = dstep * idx,
                        pt = (a + (aOff*-1)) / 360,
                        tfm = '';

                        tx = el.outerWidth(true);
                        ty = el.outerHeight(true);
         
                    tfm += 'rotate('+(a + aOff)+'deg) ';
                    tfm += 'translate(-'+(tx)+'px, -'+(ty)+'px)';
                  
                    el.css({
                         left: (pt.x) + 'px',
                         top: (pt.y) + 'px',
                         transformOrigin: 'top center',
                         '-webkit-transform-origin' : 'top center',
                         '-ms-transform-origin' : 'top center',
                         '-o-transform-origin' :  'top center',
                          transform: tfm,
                         '-webkit-transform' : tfm, 
                         '-ms-transform': tfm,
                         '-o-transform' : tfm
                      });
                           
                 });
            }

           function declareCssPosition(elementoPai, elementoFilho, elementoFilhoInverso){
	             elementoPai.css({
	              'position' : 'absolute',
	              'left' : '-50px',
	              'margin-top' : '300px',
	              'padding' : '0px',
	              'list-style' : 'none'
	             });

	             elementoFilho.css({
	             'position' : 'absolute',
	             'padding' : '3px',
	             'margin-bottom': '180px'
	             });

	             elementoFilhoInverso.css({
	              'display' : 'block',
	              'margin' : '0px',
	              'position' : 'relative',
	              'z-index': '30',
	              'transition': '0.5s',
	              '-webkit-transition': '0.5s', /* Safari and Chrome */
	              '-moz-transition': '0.5s', /* Firefox */
	              '-ms-transition': '0.5s', /* Internet Explorer */
	              '-o-transition': '0.5s', /* Opera */
	            });
	            position(0, elementoPai);
           }
