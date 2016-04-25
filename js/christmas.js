// 切换场景镜头效果
function changePage(element, effect, callback){
    element
        .addClass(effect)
        .one('animationend webkitAnimationend', function(){
            callback && callback();
        });
}

function HTML5Audio(url, loop){
    var audio = new Audio(url);
    audio.autoplay = true;
    audio.loop = loop || false;
    audio.play();
    
    return {
        end: function(callback){
            audio.addEventListener('ended', function(){
                callback();
            }, false);
        }
    }
}

var Chritmas = function() {
    var $pageA = $('.page-a');
    var $pageB = $('.page-b');
    var $pageC = $('.page-c');
    
    var observer = new Observer();
    
    new pageA($pageA, function(){
        observer.publish("completeA");
    });
    
    observer.subscribe('pageB', function(){
        new pageB($pageB, function(){
            //observer.publish("completeB");
        });
    });
    
    observer.subscribe("pageC", function() {
        new pageC();
    });
    
    observer.subscribe('completeA', function(){
        changePage($pageA, 'effect-out', function(){
            observer.publish('pageB');
        });
    });
    
    observer.subscribe('completeB', function(){
        changePage($pageC, 'effect-in', function(){
            observer.publish('pageC');
        });
    });
};

$(function(){
    $('button').on('click', function(){        
        Chritmas();

        // var audio1 = HTML5Audio('music/scene.mp3');
        // audio1.end(function() {
        //     alert("音乐结束")
        // })
    });
});