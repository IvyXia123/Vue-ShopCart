(function(window){var svgSprite='<svg><symbol id="icon-jiahao" viewBox="0 0 1024 1024"><path d="M970.745 459.367 566.614 459.367 566.614 55.251C566.614 25.842 542.771 2 513.361 2c-29.411 0-53.253 23.841-53.253 53.251l0 404.116L55.975 459.367c-29.411 0-53.253 23.841-53.253 53.25 0 29.41 23.842 53.253 53.253 53.253l404.133 0 0 404.115c0 29.407 23.842 53.249 53.253 53.249 29.41 0 53.253-23.842 53.253-53.249L566.614 565.87l404.131 0c29.413 0 53.255-23.843 53.255-53.253C1024 483.208 1000.158 459.367 970.745 459.367z"  ></path></symbol><symbol id="icon-shanchu" viewBox="0 0 1024 1024"><path d="M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768zM416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768zM928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160zM736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z"  ></path></symbol><symbol id="icon-icons-" viewBox="0 0 1024 1024"><path d="M67.566862 956.25406l103.623055-264.61675 618.872053-623.892393 166.371168 166.371168-638.951367 628.195396-249.914909 93.942579z m169.239495-211.908294l-25.815968 68.842924 68.842924-25.815969 557.917796-553.256636-47.689139-47.688115-553.255613 557.917796z"  ></path><path d="M781.815145 349.214497l-106.850563-106.850564 59.162448-59.162448 106.850563 106.850564z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)