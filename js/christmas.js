// 切换场景镜头效果
function changePage(element, effect, callback){
    element
        .addClass(effect)
        .one('animationend webkitAnimationend', function(){
            callback && callback();
        });
}

var Chritmas = function() {
    var $pageA = $('.page-a');
    var $pageB = $('.page-b');
    var $pageC = $('.page-c');
    
    $('#choose').on('change', function(e){
       var pageName = e.target.value;
       
       switch (pageName) {
            case "page-b":
                //切换到页面B，然后捕获到切换后的通知
                changePage($pageA, "effect-out", function() {
                    new pageB()
                })
                break;
            case "page-c":
                //切换到页面C，然后捕获到切换后的通知
                changePage($pageC, "effect-in", function() {
                    new pageC()
                })
                break;
        } 
    });
};