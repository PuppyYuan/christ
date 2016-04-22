var Obsever = (function(slice) {
    function bind(event, fn) {
        var events = this.events = this.events || {},
            parts = event.split(/\s+/),
            i = 0,
            num = parts.length,
            part;
        
        if(events[event] && events[event].length) return this;
        
        for(; i < num; i++){
            events[(part = parts[i])] = events[part] || {};
            events[part].push(fn);
        }
        return this;
    }
    
    function one(event, fn){
        
    }
    
    function unbind(event, fn) {
        
    }
    
    function trigger(event) {
        
    }
    
})([].slice);