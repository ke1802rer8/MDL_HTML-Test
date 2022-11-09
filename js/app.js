$(function() {

    this.list = $('#list');
    this.span = this.list.children('span');
    this.opts = this.list.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    
    let obj = this;
   
    obj.list.on('click', function(event){
        $(this).toggleClass('active');
        
        return false;
    });

    obj.opts.on('click',function(){
        let opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        
        obj.span.text( obj.val);
        
        $('.color').toggleClass('black');
        
        
    });

    $(document).click(function() {
        $('.wrapper').removeClass('active');
    });

});